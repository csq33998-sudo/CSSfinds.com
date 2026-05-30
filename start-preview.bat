@echo off
cd /d "%~dp0"
start "" powershell.exe -NoProfile -ExecutionPolicy Bypass -Command "Start-Sleep -Seconds 2; Start-Process 'http://127.0.0.1:4321/'"
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0start-preview.ps1"
pause
