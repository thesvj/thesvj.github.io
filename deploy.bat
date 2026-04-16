@echo off
echo ==========================================
echo Deploying updates to GitHub Pages...
echo ==========================================

git add -A
set /p "desc=Enter a short update description (or hit enter for default): "
if "%desc%"=="" set desc=Auto-deployed portfolio updates

git commit -m "%desc%"
git push

echo.
echo ==========================================
echo Deployment complete! 
echo Your live site (https://thesvj.github.io) will reflect these changes in about 1-2 minutes.
echo ==========================================
pause
