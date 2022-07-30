@echo off
:: Print hours
echo %time:~0,8%

set MIGRATION_NAME=%1

if not defined MIGRATION_NAME (
  echo.
  echo "Error: missing arg[1]"
  echo.
  exit /b
)

call .\scripts\migration.cmd %MIGRATION_NAME%
