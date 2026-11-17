@echo off
rem HETRAS x World Vision 제안서 PDF 생성 (Chrome 또는 Edge 필요)
set "HERE=%~dp0"
set "SRC=%HERE%..\index.html"
set "OUT=%HERE%HETRAS_x_WorldVision_2026_Christmas_Proposal.pdf"
set "BR=C:\Program Files\Google\Chrome\Application\chrome.exe"
if not exist "%BR%" set "BR=C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
"%BR%" --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=6000 --print-to-pdf="%OUT%" "file:///%SRC:\=/%"
echo PDF 저장: %OUT%
