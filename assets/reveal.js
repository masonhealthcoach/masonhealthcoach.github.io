/* Scroll reveal: text fades in from light grey, highlighter swipes and underlines draw in. Used on story pages only, not quizzes or forms. */
(function(){
  var st=document.createElement('style');
  st.textContent=[
    /* static look (also what reduced-motion users see) */
    'mark.hl{color:inherit;padding:0 .12em;margin:0 -.06em;border-radius:3px;background:linear-gradient(rgba(140,165,90,.36),rgba(140,165,90,.36)) no-repeat 0 88%/100% 72%}',
    'u.ul{text-decoration:none;background:linear-gradient(var(--ochre),var(--ochre)) no-repeat 0 100%/100% 2px;padding-bottom:1px}',
    '.circ{position:relative;display:inline-block;padding:0 .12em}',
    '.circ::after{content:"";position:absolute;inset:-.06em -.14em -.02em;border:3px solid var(--ochre);border-radius:50%;transform:rotate(-4deg);pointer-events:none}',
    '@media (prefers-color-scheme: dark){mark.hl{background-image:linear-gradient(rgba(180,192,138,.28),rgba(180,192,138,.28))}}',
    /* animated states */
    '.rv-on .rv{opacity:.16;transform:translateY(16px);transition:opacity .9s ease,transform .9s ease}',
    '.rv-on .rv.in{opacity:1;transform:none}',
    '.rv-on mark.hl{background-size:0% 72%;transition:background-size .9s cubic-bezier(.6,.1,.2,1) .45s}',
    '.rv-on .in mark.hl,.rv-on mark.hl.in{background-size:100% 72%}',
    '.rv-on u.ul{background-size:0% 2px;transition:background-size .8s ease .7s}',
    '.rv-on .in u.ul{background-size:100% 2px}',
    '.rv-on .circ::after{clip-path:inset(0 100% 0 0);transition:clip-path 1.1s cubic-bezier(.6,.1,.2,1) .5s}',
    '.rv-on .in .circ::after{clip-path:inset(0 0 0 0)}'
  ].join('');
  document.head.appendChild(st);
  if(!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.documentElement.classList.add('rv-on');
  var sel='main h1,main h2,main h3,main p,main figure,main .pillar,main .card,main .phase,main .list li,main .ticks li,main details,main .pair img,main .who,main .actions,main .price,main .eyebrow';
  var els=[].slice.call(document.querySelectorAll(sel)).filter(function(e){return !e.closest('.cta,.foot,footer,nav')||e.matches('.cta')});
  [].forEach.call(document.querySelectorAll('main .cta'),function(c){els.push(c)});
  els.forEach(function(e){e.classList.add('rv')});
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
  },{rootMargin:'0px 0px -12% 0px',threshold:0.15});
  els.forEach(function(e){io.observe(e)});
})();
