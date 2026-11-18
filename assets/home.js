/* HETRAS × WORLD VISION — homepage interactions */
if (new URLSearchParams(location.search).has('static')) document.documentElement.classList.add('static');
(function () {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const nav = document.querySelector('.nav');
  const bar = document.querySelector('.bar');
  const heroImg = document.querySelector('.hero .visual img');
  const hero = document.querySelector('.hero');

  // 스크롤: 내비 상태 · 진행바 · 히어로 패럴랙스
  function onScroll() {
    const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    nav.classList.toggle('solid', y > hero.offsetHeight - 80);
    bar.style.width = (h > 0 ? y / h * 100 : 0) + '%';
    if (heroImg && !reduce && y < innerHeight * 1.2) heroImg.style.transform = `translateY(${-y * 0.12}px)`;
  }
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // 등장 애니메이션
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: 0.18, rootMargin: '0px 0px -6% 0px' });
  document.querySelectorAll('.rv,.mask,.img-rv,.steps').forEach(el => io.observe(el));

  // 숫자 카운트 (지난 후원 결과보고)
  document.querySelectorAll('[data-count]').forEach(el => {
    const end = +el.dataset.count;
    const run = () => {
      if (reduce) { el.textContent = end.toLocaleString(); return; }
      const t0 = performance.now(), dur = 1800;
      const tick = t => {
        const p = Math.min(1, (t - t0) / dur), v = Math.round(end * (1 - Math.pow(1 - p, 3)));
        el.textContent = v.toLocaleString();
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    new IntersectionObserver((es, o) => { if (es[0].isIntersecting) { run(); o.disconnect(); } }, { threshold: .6 }).observe(el);
  });

  // 현재 섹션 표시
  const links = [...document.querySelectorAll('.nav ul a')];
  const secs = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const secIO = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  secs.forEach(s => secIO.observe(s));

  // 선물 패키지 탭
  const tabs = [...document.querySelectorAll('.gift .tabs button')];
  tabs.forEach(b => b.addEventListener('click', () => {
    tabs.forEach(t => t.setAttribute('aria-selected', t === b));
    document.querySelectorAll('.gift .panel').forEach(p => p.classList.toggle('on', p.id === b.getAttribute('aria-controls')));
  }));

  // 향 카드: 터치 기기에서는 탭으로 메시지 보기
  document.querySelectorAll('.scent').forEach(c => c.addEventListener('click', () => c.classList.toggle('show')));

  // 공간 도면: 존 순서대로 은은하게 하이라이트
  const zones = [...document.querySelectorAll('.zone')];
  if (zones.length && !reduce) {
    let k = 0, timer = null;
    const cycle = () => { zones.forEach((z, i) => z.classList.toggle('on', i === k)); k = (k + 1) % zones.length; };
    new IntersectionObserver(es => {
      if (es[0].isIntersecting && !timer) { cycle(); timer = setInterval(cycle, 2200); }
      else if (!es[0].isIntersecting && timer) { clearInterval(timer); timer = null; zones.forEach(z => z.classList.remove('on')); }
    }, { threshold: .4 }).observe(document.querySelector('.plan'));
    zones.forEach(z => z.addEventListener('mouseenter', () => { clearInterval(timer); timer = 'paused'; zones.forEach(o => o.classList.toggle('on', o === z)); }));
  }
})();
