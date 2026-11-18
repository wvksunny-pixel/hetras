# HETRAS × WORLD VISION — 2026 Christmas Love On 제안서

두 가지 형태로 들어 있습니다.
- `index.html` — 16:9 발표용 슬라이드 (12페이지). Chrome/Edge로 열어 바로 발표.
- `home.html` — 같은 내용을 스크롤형 브랜드 홈페이지로 구성. 링크로 공유하거나 미팅 전후 열람용.

## 홈페이지 (home.html)
- 구성: Hero → Vision(4,280개 지난 후원 결과보고) → Why Christmas → Proposal 01(대상 · 선물 패키지 탭) → Proposal 02(향 5종, 마우스 올리면 메시지) → The Giving Room 도면 → 참여 4단계 → Impact · KPI → 동행 로드맵 · ‘함께 시작하기’(메일).
- 모바일 대응 · 움직임 줄이기 설정 존중. `home.html?static`으로 열면 애니메이션 없이 전체가 펼쳐져 캡처·점검에 편합니다.
- 스타일 `assets/home.css`, 동작 `assets/home.js`. 이미지는 슬라이드와 같은 `assets/img`, `assets/products`를 씁니다.
- 로컬 파일로 열어도 동작하지만, 글꼴은 인터넷 연결 시 불러옵니다.

## 폴더 구조
```
index.html              슬라이드 본문 (12개 <section class="slide">)
assets/deck.css         디자인 시스템: 컬러·서체·칩·인쇄(PDF) 규칙
assets/slides.css       슬라이드별 레이아웃 (1920×1080 기준 좌표)
assets/deck.js          내비게이션·화면 맞춤·PDF 저장
home.html               스크롤형 홈페이지
assets/home.css · home.js  홈페이지 스타일 · 인터랙션
assets/img/             사진 (헤트라스 디퓨저 후원 현장·패키지, 사랑On 캠페인)
assets/products/        헤트라스 공식몰(hetras.co.kr) 제품 이미지 — 제안 용도
export/make-pdf.bat     더블클릭하면 PDF 자동 생성
export/*.pdf            생성된 PDF
```

## 발표 조작
| 키 | 동작 |
|---|---|
| → · Space · Enter · 화면 오른쪽 클릭 | 다음 |
| ← · 화면 왼쪽 클릭 | 이전 |
| Home / End | 처음 / 끝 |
| F | 전체화면 |
| P | PDF 저장 (인쇄 창 → 대상 ‘PDF로 저장’, 옵션 ‘배경 그래픽’ 켜기) |
| ? | 단축키 도움말 |

`index.html#6` 처럼 주소 끝에 번호를 붙이면 해당 페이지로 바로 열립니다.

## 자주 하는 수정
- **문구 수정**: `index.html`에서 `<!-- ============ 06 GIFT CURATION ============ -->` 처럼 번호가 붙은 주석을 찾아 텍스트만 바꾸면 됩니다.
- **제품 이미지 교체**: `assets/products/`의 같은 파일명으로 덮어쓰면 6페이지에 반영됩니다. 파일을 지우면 라인 아트로 자동 대체됩니다.
  `diffuser.jpg`(Premium Diffuser) · `fabric-perfume.jpg`(Textile Perfume) · `hand-cream.jpg`(Perfume Hand Cream) · `hand-wash.jpg`(Perfume Bubble Hand Wash) · `body-care.jpg`(Hotel Therapy Body Lotion) · `hand-cream-kids.jpg`(Perfume Hand Cream Set)
  공식몰 600×600 썸네일이며 프로모션 배지(‘13향’, ‘5개 Set’)는 잘라냈습니다. 인쇄용 고해상도가 필요하면 헤트라스에 원본을 요청하세요.
- **사진 교체**: `assets/img/`의 같은 파일명으로 덮어쓰기. 아동 얼굴이 보이는 사진은 쓰지 않습니다.
- **상태 칩**: `chip done` = 지난 후원 결과보고 / `chip` = 제안(안) / `chip tbd` = 협의 필요. 협의가 끝나면 class와 문구를 바꿔 주세요.
- **향 정보**: 8페이지 카드의 이름·감정·메시지. 색은 `slides.css`의 `.sw-cherry` 등에서 변경.
- **색·서체 전체 변경**: `deck.css` 맨 위 `:root` 변수만 고치면 전 페이지에 반영됩니다.

## PDF / PPT
- PDF: `export/make-pdf.bat` 실행 (Chrome 또는 Edge 사용) 또는 발표 중 **P** 키.
- PPT가 필요하면 PDF를 PowerPoint에서 열거나(Acrobat ‘PowerPoint로 내보내기’), 페이지 이미지를 슬라이드에 붙이는 방식이 가장 레이아웃이 안정적입니다.

## 발송 전 확인할 것
1. 향 5종(No.1 블랙체리 · No.2 플라워파크 · No.4 북스토어 · No.5 허그솝 · No.7 호텔우드)은 공식몰 향 목록으로 확인했습니다.
2. 6페이지 품목은 공식몰 판매 제품 기준이며, 실제 기부 품목 · 향 · 수량은 협의 사항입니다.
3. **성수 플래그십** 위치·운영 가능 여부, 구매 연계 기부 방식·비율, 대상 인원·전달 기관 — 모두 ‘협의’로 표기되어 있습니다.
4. 아동 패키지 품목은 전성분·알레르기 유발 향료 표기 확인 후 확정.

## 근거 자료 (확정 수치 출처)
- 디퓨저 4,280개, 2026. 2. 24.–6. 30., 송파·성남·춘천 복지관, 감사편지 문구: 「[월드비전] 헤트라스 디퓨저 물품후원 결과보고서 v3」
- 1950년 시작·75년, 69개 협력 아동양육시설, K-BPI NGO 부문 6년 연속 1위: 「2026 크리스마스사랑On 기업제안서」
- 그 밖의 수량·예산·대상 인원·판매량은 임의로 넣지 않았습니다.
