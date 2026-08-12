// scripts.js — menú fijo, marcado de sección y carousel (4 visibles)
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = Array.from(document.querySelectorAll('nav a'));
  const sections = navLinks.map(a => document.getElementById(a.getAttribute('data-target'))).filter(Boolean);
  const header = document.getElementById('site-header');

  function setActive(){
    const y = window.scrollY + (window.innerHeight / 3);
    let current = sections[0];
    for(const sec of sections){ if(sec.offsetTop <= y) current = sec; }
    navLinks.forEach(a => a.classList.toggle('active', document.getElementById(a.getAttribute('data-target')) === current));
  }
  setActive();
  window.addEventListener('scroll', setActive);

  navLinks.forEach(a => a.addEventListener('click', e =>{
    e.preventDefault();
    const id = a.getAttribute('href');
    const target = document.querySelector(id);
    const offset = header.getBoundingClientRect().height + 12;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({top, behavior:'smooth'});
  }));

  // CAROUSEL: forzar cantidad visible: desktop=4, tablet=3, mobile=2
  const track = document.getElementById('carousel-track');
  const container = document.getElementById('tech-carousel');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  let index = 0;
  const gap = 12;

  function getVisibleCount(){
    const w = container.offsetWidth;
    if(w >= 980) return 4;
    if(w >= 700) return 3;
    return 2;
  }

  function layoutItems(){
    const visible = getVisibleCount();
    const itemWidth = Math.floor((container.offsetWidth - (gap * (visible - 1))) / visible);
    // set each child width
    Array.from(track.children).forEach(child => {
      child.style.flex = `0 0 ${itemWidth}px`;
    });
    // after resizing ensure index valid
    const items = track.children.length;
    const maxIndex = Math.max(0, items - visible);
    if(index > maxIndex) index = maxIndex;
    update();
  }

  function update(){
    const item = track.children[0];
    if(!item) return;
    const itemW = item.getBoundingClientRect().width + gap;
    track.style.transform = `translateX(-${index * itemW}px)`;
  }

  prev.addEventListener('click', ()=>{
    index = Math.max(0, index - 1);
    update();
  });
  next.addEventListener('click', ()=>{
    const visible = getVisibleCount();
    const items = track.children.length;
    const maxIndex = Math.max(0, items - visible);
    index = Math.min(maxIndex, index + 1);
    update();
  });

  window.addEventListener('resize', () => {
    layoutItems();
  });

  // touch support
  let startX = null;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; });
  track.addEventListener('touchend', e => {
    if(startX === null) return;
    const diff = startX - e.changedTouches[0].clientX;
    if(Math.abs(diff) > 40){
      index += diff > 0 ? 1 : -1;
      const visible = getVisibleCount();
      const items = track.children.length;
      const maxIndex = Math.max(0, items - visible);
      if(index < 0) index = 0;
      if(index > maxIndex) index = maxIndex;
      update();
    }
    startX = null;
  });

  // initial layout
  setTimeout(layoutItems, 80);
});

