@echo off
:: Clear screen/terminal
cls
set DEBUG=*

set SCRIPT_ALIAS=%1

if defined SCRIPT_ALIAS (
  ::run typeorm:cli --h
  if exist ".\package.json" (
    yarn %SCRIPT_ALIAS% %*
  ) else (
    echo "Error: package.json not found!"
    exit /b
  )
)

yarn dev
