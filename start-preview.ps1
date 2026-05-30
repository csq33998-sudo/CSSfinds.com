Set-Location $PSScriptRoot
Write-Host "Starting CSSFinds preview at http://127.0.0.1:4321/"
Write-Host "Keep this window open while previewing."
& ".\.tools\node-v24.16.0-win-x64\node.exe" ".\scripts\serve-dist.mjs"
