/* HETRAS × WORLD VISION — presentation controller
   ← → / Space / PageUp·PageDown : 이동   Home·End : 처음·끝
   F : 전체화면   P : PDF 저장(인쇄)   ? : 단축키 도움말
   URL #5 처럼 페이지 번호로 바로 이동 */
(function () {
  const deck = document.querySelector('.deck');
  const slides = [...document.querySelectorAll('.slide')];
  const bar = document.querySelector('.progress');
  const counter = document.querySelector('[data-counter]');
  const help = document.querySelector('.help');
  let i = 0;

  // 슬라이드 번호(folio) 자동 기입
  slides.forEach((s, k) => {
    const f = s.querySelector('.folio');
    if (f) f.textContent = String(k + 1).padStart(2, '0') + ' / ' + String(slides.length).padStart(2, '0');
  });

  function fit() {
    const k = Math.min(innerWidth / 1920, innerHeight / 1080);
    deck.style.transform = `translate(-50%,-50%) scale(${k})`;
  }
  function go(n, push = true) {
    i = Math.max(0, Math.min(slides.length - 1, n));
    slides.forEach((s, k) => s.classList.toggle('active', k === i));
    bar.style.width = ((i + 1) / slides.length * 100) + '%';
    if (counter) counter.textContent = (i + 1) + ' / ' + slides.length;
    if (push) history.replaceState(null, '', '#' + (i + 1));
  }

  addEventListener('resize', fit);
  addEventListener('keydown', e => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const k = e.key;
    if (['ArrowRight', 'PageDown', ' ', 'Enter'].includes(k)) { e.preventDefault(); go(i + 1); }
    else if (['ArrowLeft', 'PageUp', 'Backspace'].includes(k)) { e.preventDefault(); go(i - 1); }
    else if (k === 'Home') go(0);
    else if (k === 'End') go(slides.length - 1);
    else if (k === 'f' || k === 'F') toggleFull();
    else if (k === 'p' || k === 'P') window.print();
    else if (k === '?' || k === 'h' || k === 'H') help.classList.toggle('on');
    else if (k === 'Escape') help.classList.remove('on');
  });
  // 화면 좌/우 클릭으로 이동
  document.querySelector('.stage').addEventListener('click', e => {
    if (e.target.closest('a,button')) return;
    go(e.clientX > innerWidth / 2 ? i + 1 : i - 1);
  });
  // 스와이프
  let tx = null;
  addEventListener('touchstart', e => tx = e.touches[0].clientX, { passive: true });
  addEventListener('touchend', e => {
    if (tx === null) return;
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 50) go(dx < 0 ? i + 1 : i - 1);
    tx = null;
  });

  function toggleFull() {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
    else document.exitFullscreen?.();
  }
  document.querySelector('[data-prev]').onclick = () => go(i - 1);
  document.querySelector('[data-next]').onclick = () => go(i + 1);
  document.querySelector('[data-full]').onclick = toggleFull;
  document.querySelector('[data-print]').onclick = () => window.print();
  document.querySelector('[data-help]').onclick = () => help.classList.toggle('on');
  help.onclick = () => help.classList.remove('on');

  fit();
  go((parseInt(location.hash.slice(1), 10) || 1) - 1, false);
})();
