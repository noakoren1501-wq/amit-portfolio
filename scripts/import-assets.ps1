# import-assets.ps1  v3
# Maps assets/ -> public/ using partial folder-name matching (avoids RTL-mark encoding issues).

param()

$projectRoot = Split-Path $PSScriptRoot -Parent
$assetsRoot  = Join-Path $projectRoot "assets"
$publicRoot  = Join-Path $projectRoot "public"

# ── Helper: find a subfolder by partial ASCII name match ─────────────────────
function Find-Folder($parent, $pattern) {
  $hit = Get-ChildItem -Path $parent -Directory -ErrorAction SilentlyContinue |
         Where-Object { $_.Name -match [regex]::Escape($pattern) -or $_.Name -like "*$pattern*" } |
         Select-Object -First 1
  return $hit
}

# ── Result lists ──────────────────────────────────────────────────────────────
$copied   = [System.Collections.Generic.List[string]]::new()
$skipped  = [System.Collections.Generic.List[string]]::new()
$warnings = [System.Collections.Generic.List[string]]::new()

function Ensure-Dir($path) {
  $d = Split-Path $path -Parent
  if (-not (Test-Path $d)) { New-Item -ItemType Directory -Force -Path $d | Out-Null }
}

function Copy-Asset($srcFull, $destRel) {
  $destFull = Join-Path $publicRoot ($destRel.Replace('/', '\'))
  Ensure-Dir $destFull
  if (Test-Path $destFull) {
    $skipped.Add($destRel)
    return
  }
  if (-not (Test-Path $srcFull)) {
    $warnings.Add("SOURCE NOT FOUND: $srcFull")
    return
  }
  Copy-Item -Path $srcFull -Destination $destFull -Force
  $srcShort = $srcFull.Replace($assetsRoot, '').TrimStart('\','/')
  $copied.Add("$destRel  <-  $srcShort")
}

# Map files from a folder to destination slots.
# $folderPath  = full path to source folder
# $slots       = ordered array of dest-relative paths (use $null to skip a position)
function Map-Folder($folderPath, [array]$slots) {
  if (-not $folderPath -or -not (Test-Path $folderPath)) {
    foreach ($s in $slots) { if ($s) { $warnings.Add("FOLDER NOT FOUND, skipping: $s") } }
    return
  }
  $files = Get-ChildItem -Path $folderPath -File | Sort-Object Name
  for ($i = 0; $i -lt $slots.Count; $i++) {
    $dest = $slots[$i]
    if (-not $dest) { continue }
    if ($i -lt $files.Count) {
      Copy-Asset $files[$i].FullName $dest
    } else {
      $warnings.Add("NO SOURCE at slot $($i+1) in $folderPath  ->  $dest")
    }
  }
  if ($files.Count -gt ($slots | Where-Object { $_ }).Count) {
    $extra = $files.Count - ($slots | Where-Object { $_ }).Count
    $warnings.Add("EXTRA ($extra unmapped) in: " + $folderPath.Replace($assetsRoot,''))
  }
}

# ── PORTRAIT ─────────────────────────────────────────────────────────────────
Map-Folder (Join-Path $assetsRoot "portrait") @(
  "images/portrait.jpg"
)

# ── GUERRILLA ─────────────────────────────────────────────────────────────────
Map-Folder (Join-Path $assetsRoot "guerrilla\PANGO") @(
  "images/guerrilla/pango-floor.jpg"
  "images/guerrilla/pango-screen-1.jpg"
  "images/guerrilla/pango-screen-2.jpg"
)
Map-Folder (Join-Path $assetsRoot "guerrilla\TINDER") @(
  "images/guerrilla/tinder.jpg"
  $null
)
# Single glasses image at root of guerrilla/
$glassesFile = Get-ChildItem -Path (Join-Path $assetsRoot "guerrilla") -File |
               Where-Object { $_.Name -match "glasses" } | Select-Object -First 1
if ($glassesFile) { Copy-Asset $glassesFile.FullName "images/guerrilla/halperin.jpg" }
else              { $warnings.Add("NO SOURCE for images/guerrilla/halperin.jpg") }

# ── PRINT ─────────────────────────────────────────────────────────────────────
Map-Folder (Join-Path $assetsRoot "print\ARIEL STAIN REMOVER") @(
  "images/print/stain-remover-1.jpg"
  "images/print/stain-remover-2.jpg"
  "images/print/stain-remover-3.jpg"
  "images/print/stain-remover-4.jpg"
)
Map-Folder (Join-Path $assetsRoot "print\2 IN 1 SHAMPOO") @(
  "images/print/shampoo-1.jpg"
  "images/print/shampoo-2.jpg"
  "images/print/shampoo-3.jpg"
)
# Lemon-waffle: single loose file at root of print/
$waffleFile = Get-ChildItem -Path (Join-Path $assetsRoot "print") -File |
              Where-Object { $_.Name -match "choclate|waffle|lemon" } | Select-Object -First 1
if ($waffleFile) { Copy-Asset $waffleFile.FullName "images/print/lemon-waffle-1.jpg" }
else             { $warnings.Add("NO SOURCE for images/print/lemon-waffle-1.jpg") }

# ── FILMS ─────────────────────────────────────────────────────────────────────
Map-Folder (Join-Path $assetsRoot "films") @(
  "videos/films/main-film.mp4"
)

# ── SOCIAL ────────────────────────────────────────────────────────────────────
$aiFolder = Find-Folder (Join-Path $assetsRoot "social") "AI"
Map-Folder $aiFolder.FullName @(
  "images/social/ai-carousel-1.jpg"
  "images/social/ai-carousel-2.jpg"
  "images/social/ai-carousel-3.jpg"
  "images/social/ai-carousel-4.jpg"
  "images/social/ai-carousel-5.jpg"
  "images/social/ai-carousel-6.jpg"
  "images/social/ai-carousel-7.jpg"
  "images/social/ai-carousel-8.jpg"
)
$catsFile = Get-ChildItem -Path (Join-Path $assetsRoot "social") -File |
            Where-Object { $_.Name -match "CAT|cat" } | Select-Object -First 1
if ($catsFile) { Copy-Asset $catsFile.FullName "images/social/cat-voice-cover.jpg" }
else           { $warnings.Add("NO SOURCE for images/social/cat-voice-cover.jpg") }

# ── BILLBOARDS ────────────────────────────────────────────────────────────────
Map-Folder (Join-Path $assetsRoot "billboards\ketchup") @(
  "images/billboards/ketchup-1.jpg"
  "images/billboards/ketchup-2.jpg"
  "images/billboards/ketchup-3.jpg"
)
$shapewearFolder = Find-Folder (Join-Path $assetsRoot "billboards") "carver"
Map-Folder $shapewearFolder.FullName @(
  "images/billboards/shapewear.jpg"
)

# ── WOLT ──────────────────────────────────────────────────────────────────────
$woltRoot = Join-Path $assetsRoot "wolt"

$woltPreelFolder = Find-Folder $woltRoot "pre"
Map-Folder $woltPreelFolder.FullName @(
  "videos/wolt/prep.mp4"
)

$woltGameFolder = Find-Folder $woltRoot "app illustration video"
Map-Folder $woltGameFolder.FullName @(
  "videos/wolt/game.mp4"
)

$woltShareFolder = Find-Folder $woltRoot "app illustration picture"
Map-Folder $woltShareFolder.FullName @(
  "images/wolt/share-1.jpg"
)

$woltStoriesFolder = Find-Folder $woltRoot "social stories"
Map-Folder $woltStoriesFolder.FullName @(
  "images/wolt/story-1.jpg"
)

# ── PLANET ────────────────────────────────────────────────────────────────────
$planetRoot = Join-Path $assetsRoot "planet"

$planetInfluFolder = Find-Folder $planetRoot "infuencer"
Map-Folder $planetInfluFolder.FullName @(
  "images/planet/date.jpg"       # save the date story.png  (s < v alphabetically)
  "videos/planet/event-day.mp4"  # video 1.mp4
  "videos/planet/tonight.mp4"    # video 2.mp4
)

$planetInviteFolder = Find-Folder $planetRoot "invatation"
Map-Folder $planetInviteFolder.FullName @(
  "images/planet/qr.jpg"         # qr.png (q < screenshot)
  "images/planet/tickets.jpg"    # screenshot
)

$planetPostsFolder = Find-Folder $planetRoot "social posts"
Map-Folder $planetPostsFolder.FullName @(
  "images/planet/save-the-date-posts.jpg"
)

$planetStoriesFolder = Find-Folder $planetRoot "social stories"
Map-Folder $planetStoriesFolder.FullName @(
  "images/planet/story-1.jpg"
)

$planetMagnetFolder = Find-Folder $planetRoot "magnet"
Map-Folder $planetMagnetFolder.FullName @(
  "images/planet/photobooth-1.jpg"
)

$planetReceptionFolder = Find-Folder $planetRoot "reception"
Map-Folder $planetReceptionFolder.FullName @(
  "images/planet/welcome.jpg"
)

# ── HAMASHBIR ─────────────────────────────────────────────────────────────────
$hamRoot = Join-Path $assetsRoot "hamashbir"

$hamTVFolder = Find-Folder $hamRoot "television"
Map-Folder $hamTVFolder.FullName @(
  "videos/hamashbir/campaign.mp4"
)

$hamBillFolder = Find-Folder $hamRoot "billboards"
Map-Folder $hamBillFolder.FullName @(
  "images/hamashbir/billboard-1.jpg"
  "images/hamashbir/billboard-2.jpg"
  "images/hamashbir/billboard-3.jpg"
)

$hamPostFolder = Find-Folder $hamRoot "social post"
Map-Folder $hamPostFolder.FullName @(
  "images/hamashbir/post-1.jpg"
  "images/hamashbir/post-2.jpg"
  "images/hamashbir/post-3.jpg"
)

# Stories folder has invisible RTL-mark prefix — find by "social stories" keyword
$hamStoriesFolder = Get-ChildItem -Path $hamRoot -Directory |
                    Where-Object { $_.Name -match "social stories" } | Select-Object -First 1
Map-Folder $hamStoriesFolder.FullName @(
  "images/hamashbir/stories-row.jpg"
  "images/hamashbir/story-reveal.jpg"
)

$hamDigitalFolder = Find-Folder $hamRoot "digital"
Map-Folder $hamDigitalFolder.FullName @(
  "images/hamashbir/gett-notification.jpg"
  "images/hamashbir/gett-question.jpg"
  "images/hamashbir/gett-result-1.jpg"
  "images/hamashbir/gett-result-2.jpg"
)

$hamInfluFolder = Find-Folder $hamRoot "social infuencer"
Map-Folder $hamInfluFolder.FullName @(
  "videos/hamashbir/influencer-kobi.mp4"
  "videos/hamashbir/influencer-dana.mp4"
)

$hamRadioFolder = Find-Folder $hamRoot "radio"
# Radio files sorted A-Z by Hebrew name: hag(chet) < lida(lamed) < dira(mem)
Map-Folder $hamRadioFolder.FullName @(
  "audio/hamashbir/radio-hag.mp4"
  "audio/hamashbir/radio-lida.mp4"
  "audio/hamashbir/radio-dira.mp4"
)

$hamGuerrillaFolder = Find-Folder $hamRoot "guerrilla"
Map-Folder $hamGuerrillaFolder.FullName @(
  "images/hamashbir/guerrilla-1.jpg"
  "images/hamashbir/guerrilla-2.jpg"
  "images/hamashbir/guerrilla-3.jpg"
)

# Real store sign photos
$hamSignsFolder = Get-ChildItem -Path $hamRoot -Directory |
                  Where-Object { $_.Name -match "^shop signs$" -or ($_.Name -match "shop signs" -and $_.Name -notmatch "illustrate") } |
                  Select-Object -First 1
Map-Folder $hamSignsFolder.FullName @(
  "images/hamashbir/store-sign-1.jpg"
  "images/hamashbir/store-sign-2.jpg"
  "images/hamashbir/store-sign-3.jpg"
  "images/hamashbir/store-sign-4.jpg"
)

# Illustrated store signs (ChatGPT images) — folder has invisible RTL-mark prefix
$hamIllustFolder = Get-ChildItem -Path $hamRoot -Directory |
                   Where-Object { $_.Name -match "illustrate" } | Select-Object -First 1
Map-Folder $hamIllustFolder.FullName @(
  "images/hamashbir/store-sign-5.jpg"
  "images/hamashbir/store-sign-6.jpg"
  "images/hamashbir/store-sign-7.jpg"
)

# ── ALL referenced destinations for final verification ────────────────────────
$allDest = @(
  "images/portrait.jpg"
  "images/guerrilla/pango-floor.jpg","images/guerrilla/pango-screen-1.jpg","images/guerrilla/pango-screen-2.jpg"
  "images/guerrilla/halperin.jpg","images/guerrilla/tinder.jpg"
  "images/print/lemon-waffle-1.jpg","images/print/lemon-waffle-2.jpg","images/print/lemon-waffle-3.jpg"
  "images/print/stain-remover-1.jpg","images/print/stain-remover-2.jpg","images/print/stain-remover-3.jpg","images/print/stain-remover-4.jpg"
  "images/print/shampoo-1.jpg","images/print/shampoo-2.jpg","images/print/shampoo-3.jpg"
  "images/films/main-film-cover.jpg","videos/films/main-film.mp4"
  "images/social/cat-voice-cover.jpg"
  "images/social/ai-carousel-1.jpg","images/social/ai-carousel-2.jpg","images/social/ai-carousel-3.jpg","images/social/ai-carousel-4.jpg"
  "images/social/ai-carousel-5.jpg","images/social/ai-carousel-6.jpg","images/social/ai-carousel-7.jpg","images/social/ai-carousel-8.jpg"
  "images/billboards/ketchup-1.jpg","images/billboards/ketchup-2.jpg","images/billboards/ketchup-3.jpg"
  "images/billboards/shapewear.jpg"
  "videos/wolt/prep.mp4","videos/wolt/game.mp4"
  "images/wolt/share-1.jpg","images/wolt/share-2.jpg","images/wolt/story-1.jpg","images/wolt/story-2.jpg"
  "images/planet/date.jpg","videos/planet/event-day.mp4","videos/planet/tonight.mp4"
  "images/planet/tickets.jpg","images/planet/qr.jpg","images/planet/save-the-date-posts.jpg"
  "images/planet/story-1.jpg","images/planet/story-2.jpg","images/planet/story-3.jpg"
  "images/planet/photobooth-1.jpg","images/planet/photobooth-2.jpg","images/planet/welcome.jpg"
  "videos/hamashbir/campaign.mp4","videos/hamashbir/influencer-kobi.mp4","videos/hamashbir/influencer-dana.mp4"
  "audio/hamashbir/radio-hag.mp4","audio/hamashbir/radio-dira.mp4","audio/hamashbir/radio-lida.mp4"
  "images/hamashbir/billboard-1.jpg","images/hamashbir/billboard-2.jpg","images/hamashbir/billboard-3.jpg"
  "images/hamashbir/post-1.jpg","images/hamashbir/post-2.jpg","images/hamashbir/post-3.jpg"
  "images/hamashbir/stories-row.jpg","images/hamashbir/story-reveal.jpg"
  "images/hamashbir/gett-notification.jpg","images/hamashbir/gett-question.jpg"
  "images/hamashbir/gett-result-1.jpg","images/hamashbir/gett-result-2.jpg"
  "images/hamashbir/guerrilla-1.jpg","images/hamashbir/guerrilla-2.jpg","images/hamashbir/guerrilla-3.jpg"
  "images/hamashbir/store-sign-1.jpg","images/hamashbir/store-sign-2.jpg","images/hamashbir/store-sign-3.jpg"
  "images/hamashbir/store-sign-4.jpg","images/hamashbir/store-sign-5.jpg","images/hamashbir/store-sign-6.jpg"
  "images/hamashbir/store-sign-7.jpg"
)

$finalMissing = [System.Collections.Generic.List[string]]::new()
foreach ($rel in $allDest) {
  $full = Join-Path $publicRoot ($rel.Replace('/', '\'))
  if (-not (Test-Path $full)) { $finalMissing.Add($rel) }
}

# ── Print report ──────────────────────────────────────────────────────────────
$ln = "-" * 64
Write-Host ""
Write-Host $ln
Write-Host "  ASSET IMPORT REPORT"
Write-Host $ln

if ($copied.Count -gt 0) {
  Write-Host ""
  Write-Host "COPIED ($($copied.Count)):" -ForegroundColor Green
  $copied  | ForEach-Object { Write-Host "  + $_" -ForegroundColor Green }
}
if ($skipped.Count -gt 0) {
  Write-Host ""
  Write-Host "SKIPPED - already existed ($($skipped.Count)):" -ForegroundColor DarkYellow
  $skipped | ForEach-Object { Write-Host "  ~ $_" -ForegroundColor DarkYellow }
}
if ($warnings.Count -gt 0) {
  Write-Host ""
  Write-Host "WARNINGS ($($warnings.Count)):" -ForegroundColor Yellow
  $warnings | ForEach-Object { Write-Host "  ! $_" -ForegroundColor Yellow }
}

Write-Host ""
Write-Host $ln
Write-Host "  FINAL VERIFICATION"
Write-Host $ln

if ($finalMissing.Count -eq 0) {
  Write-Host ""
  Write-Host "  All $($allDest.Count) referenced assets are present in public/." -ForegroundColor Green
} else {
  Write-Host ""
  Write-Host "  Missing from public/ ($($finalMissing.Count) / $($allDest.Count)):" -ForegroundColor Red
  $finalMissing | ForEach-Object { Write-Host "  x $_" -ForegroundColor Red }
}

Write-Host ""
$total = $copied.Count + $skipped.Count
Write-Host $ln
Write-Host "  Processed: $total  |  Copied: $($copied.Count)  |  Skipped: $($skipped.Count)  |  Still missing: $($finalMissing.Count)"
Write-Host $ln
Write-Host ""
