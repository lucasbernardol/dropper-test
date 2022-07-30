@echo off
:: "%1" Ref migration name

yarn migration:create ./src/api/database/migrations/%1
