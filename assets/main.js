const jams=[
  {key:'relics',title:'Relics',roles:'UI/UX, generalist programmer, game &amp; level designer',
   desc:'3D low-poly isometric roguelite where the player embodies a retired archaeologist who enters a trance state after interacting with his relics, revealing a whole different time period.',
   role:'UI/UX programmer, generalist programmer, game designer, level designer',
   resp:['Developed the inventory and collectibles system','Integrated collectibles animation and SFX','Designed and developed UI/UX across canvases','Implemented a player feedback system for actions and progress','Programmed the interaction system and NPCs','Wrote the game design document','Worked on level design, scenes and environments','Animated and programmed environmental damage and traps','Debugged issues reported during playtesting'],
   code:'https://github.com/ligomezm/G7FinalProject/blob/dev/Assets/Scripts/Inventory/Inventory.cs',
   play:'https://bayron-david.itch.io/beta-relics',
   doc:'https://drive.google.com/file/d/1cCmRJhS1j7pUjYzzee0kHg4lYjtfc4lF/view?usp=sharing',
   poster:'images/relics.png',gifs:['images/gifs/combat.gif']},
  {key:'forest',title:'Into the forest',roles:'UI/UX, gameplay programmer, animator, game designer',
   desc:'3D first-person survival game about Dominique, an ex-combatant who escaped the militia and now hides in one of the coldest, most dangerous forests in the world.',
   role:'UI/UX programmer, gameplay programmer, animator, game designer',
   resp:['Designed UI/UX: health bar, counter, game over/win screens and menus','Developed the tree-chopping attack mechanics','Worked on enemy mechanics','Handled character animation using Mixamo','Set up scene and environment','Integrated SFX and music'],
   code:'https://github.com/ligomezm/IntoTheForestVideoGame/blob/main/Proyecto%202nd%20Jam/Assets/Scripts/PlayerHealth.cs',
   play:'https://ligomezm.itch.io/into-the-forest',
   doc:'https://drive.google.com/file/d/1DLuKwIsKwiwJAWHi_T7KSv_dw0XsrTfz/view?usp=sharing',
   poster:'images/forest.png',gifs:['images/gifs/forest.gif']},
  {key:'noway',title:'No way back',roles:'Generalist, programmer, UI/UX designer',
   desc:'A hoverboard controller/simulation built with Unity physics and C# for a two-day game jam, inspired by Back to the Future. Features hovering that reacts to ground height, speed boost, a battery indicator and a mini-map.',
   role:'Generalist, programmer, UI/UX designer',
   resp:['Designed and developed UI/UX for the project','Built the battery indicator with an animated 3D hoverboard','Created and implemented the mini-map','Integrated SFX and music'],
   code:'https://github.com/ligomezm/NoWayBackVideoGame/blob/main/Assets/Scripts/EnergyBar.cs',
   play:'https://ligomezm.itch.io/no-way-back',
   poster:'images/back.png',gifs:['images/gifs/hoverboard.gif']},
  {key:'cherry',title:'Cherry rush',roles:'Generalist programmer, animator, game designer',
   desc:'2D single-player platformer RPG about a Hawaiian god who collects cherries.',
   role:'Generalist programmer, animator, game designer',
   resp:['Worked on core gameplay: movement, jumping and collision detection','Programmed platforms, collectibles and hazards','Implemented scoring, progression and level unlocking','Integrated SFX and music','Debugged issues found during playtesting','Collaborated on the game design document'],
   code:'https://github.com/ligomezm/CherryRushVideoGame/blob/main/Assets/Scripts/Finish.cs',
   play:'https://ligomezm.itch.io/cherry-rush',
   doc:'https://drive.google.com/file/d/1iGhOvZ4Hrkxiwe_QjHFGp-lhm0VMl8Jj/view?usp=sharing',
   poster:'images/cherry.png',gifs:['images/gifs/cherry.gif']}
];
const personal=[
  {key:'birds',title:'Angry Birds clone',roles:'Generalist developer',
   desc:'A clone of the popular mobile game with extra functionality for more interesting gameplay, working on both mobile and PC. Assets from angrybirds.fandom.com.',
   role:'Generalist developer',
   resp:['Created a character selection menu to choose your bird','Implemented explosion and split mechanics, plus slingshot behaviour with line renderers','Developed 2D character animations','Built a scoring system to track performance','Added SFX and background music'],
   code:'https://github.com/ligomezm/Angry-Birds-clone/blob/master/Assets/Scripts/BirdMechanics/Explosion.cs',
   play:'https://play.unity.com/mg/other/angry-birds-clone-webgl',
   poster:'images/birds.png',gifs:['images/gifs/explosion.gif']}
];
const skills=[
  {name:'AI Agents / LLM',c:'var(--lime)'},
  {name:'Unity',c:'var(--cyan)'},
  {name:'C#',c:'var(--violet)'},
  {name:'Git',c:'var(--gold)'},
  {name:'OOP',c:'var(--lime)'},
  {name:'Shader Graph',c:'var(--cyan)'},
  {name:'Lighting',c:'var(--violet)'},
  {name:'Game Design',c:'var(--gold)'},
  {name:'UI / UX',c:'var(--lime)'},
  {name:'Animation',c:'var(--cyan)'},
  {name:'VR',c:'var(--violet)'},
  {name:'Light Baking / Global Illumination',c:'var(--gold)'},
  {name:'Post-processing',c:'var(--lime)'},
  {name:'Unreal',c:'var(--cyan)'},
  {name:'Blueprints',c:'var(--violet)'},
  {name:'APIs',c:'var(--gold)'},
  {name:'Python',c:'var(--lime)'},
  {name:'Gameplay Programming',c:'var(--cyan)'},
  {name:'Performance Optimization',c:'var(--violet)'},
  {name:'Level Design',c:'var(--gold)'},
  {name:'Narrative design',c:'var(--lime)'},
  {name:'Player Psychology',c:'var(--cyan)'},
  {name:'Prompt Engineering / AI Workflows',c:'var(--violet)'},
  {name:'Rapid Prototyping',c:'var(--gold)'}
];
const details={
  sopa:{title:'SOPA \u2014 Tale of the Stolen Potato',
    desc:"A magical-realism narrative adventure set in South America. Miho is pulled into a fantastical world while fetching a potato for his grandmother's soup. Launched in 2025 on Xbox, Steam and PS5.",
    role:'Gameplay Developer, Lighting Artist',
    resp:[
      'Owned the end-to-end visual polish: light baking, custom post-processing and VFX for high-fidelity environments without sacrificing performance', 
      'Contributed to core gameplay systems and production pipeline', 
      'Expanded and maintained existing codebases, tools and proprietary APIs',
      'Implemented gameplay-driven animations and interactive features',
      'Built intuitive systems designed around the player experience',
      'Tested, debugged and iterated within a live production environment',
      'Lit scenes and shaped atmosphere to deepen immersion and carry the story',
      'Currently collaborating on the sequel'],
    play:'https://www.xbox.com/en-US/games/store/sopa-tale-of-the-stolen-potato/9N221ZTFGQB0',steam:'https://store.steampowered.com/app/1935330/SOPA__Tale_of_the_Stolen_Potato/',code:'',
    gifs:['images/gifs/sopa_1.gif','images/gifs/sopa_2.gif','images/gifs/sopa_3.gif','images/gifs/sopa_4.gif','images/gifs/sopa_5.gif']},
  ...Object.fromEntries([...jams,...personal].map(p=>[p.key,{title:p.title,desc:p.desc,role:p.role,resp:p.resp,code:p.code,play:p.play,steam:p.steam,gifs:p.gifs,doc:p.doc,poster:p.poster}]))
};
const cardHTML=p=>{const poster=p.poster||`images/${p.key}.png`;
  return `<article class="pcard glass pcard-open" tabindex="0" role="button" aria-label="View ${p.title} details" data-key="${p.key}">
  <div class="pcard-media">
    <img src="${poster}" alt="${p.title}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <div class="initial" style="display:none">${p.title.charAt(0)}</div>
  </div>
  <div class="pcard-body"><h4>${p.title}</h4><p class="roles">${p.roles}</p>
    <span class="pcard-more">More info<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
  </div></article>`;};
document.getElementById('jamGrid').innerHTML=jams.map(cardHTML).join('');
document.getElementById('personalGrid').innerHTML=personal.map(cardHTML).join('');
const skillPill=s=>`<div class="skill glass"><span class="dot" style="color:${s.c}"></span><span>${s.name}</span></div>`;
// duplicate the list so the -50% loop is seamless
const loop=skills.map(skillPill).join('');
document.getElementById('skillsRow1').innerHTML=loop+loop;
document.getElementById('skillsRow2').innerHTML=loop+loop;

const modal=document.getElementById('modal');let lastFocused=null;
let galSlides=[],galIndex=0;
const galTrack=document.getElementById('mTrack');
const galDots=document.getElementById('mDots');
const galPrev=document.getElementById('galPrev');
const galNext=document.getElementById('galNext');
function renderGallery(gifs,title){
  galIndex=0;
  // if no gifs, show a single gradient placeholder slide
  galSlides=(gifs&&gifs.length)?gifs:[null];
  galTrack.innerHTML=galSlides.map((src,i)=>src
    ? `<div class="gallery-slide"><span class="slide-blur" style="background-image:url('${src}')"></span><img data-src="${src}" src="${src}" alt="${title} preview ${i+1}" loading="lazy" onerror="if(this.getAttribute('src')){this.style.display='none';this.parentElement.insertAdjacentHTML('beforeend','<div class=\\'ph\\'>Preview coming soon</div>')}"></div>`
    : `<div class="gallery-slide"><div class="ph">${title}</div></div>`
  ).join('');
  const multi=galSlides.length>1;
  galPrev.classList.toggle('hidden',!multi);
  galNext.classList.toggle('hidden',!multi);
  galDots.innerHTML=multi?galSlides.map((_,i)=>`<button data-i="${i}" class="${i===0?'active':''}" aria-label="Go to image ${i+1}"></button>`).join(''):'';
  updateGallery();
}
function updateGallery(){
  galTrack.style.transform=`translateX(-${galIndex*100}%)`;
  [...galDots.children].forEach((d,i)=>d.classList.toggle('active',i===galIndex));
  // Freeze every non-active gif (clear its src) and (re)load the active one from frame 1.
  [...galTrack.children].forEach((slide,i)=>{
    const img=slide.querySelector('img');if(!img)return;
    const src=img.getAttribute('data-src');if(!src)return;
    if(i===galIndex){
      img.setAttribute('src','');       // drop current frame
      void img.offsetWidth;             // force reflow
      img.setAttribute('src',src+'?t='+Date.now()); // cache-bust -> plays from start
    }else{
      img.setAttribute('src','');       // freeze background gifs
    }
  });
}
function galGo(dir){galIndex=(galIndex+dir+galSlides.length)%galSlides.length;updateGallery();}
galPrev.addEventListener('click',e=>{e.stopPropagation();galGo(-1);});
galNext.addEventListener('click',e=>{e.stopPropagation();galGo(1);});
galDots.addEventListener('click',e=>{const b=e.target.closest('button');if(b){e.stopPropagation();galIndex=+b.dataset.i;updateGallery();}});

function openModal(k){const d=details[k];if(!d)return;lastFocused=document.activeElement;
  document.getElementById('modalTitle').textContent=d.title;
  document.getElementById('mDesc').textContent=d.desc;
  document.getElementById('mRole').textContent=d.role;
  document.getElementById('mResp').innerHTML=d.resp.map(r=>`<li>${r}</li>`).join('');
  renderGallery(d.gifs,d.title);
  const codeSvg='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>';
  const playSvg='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="6 4 20 12 6 20 6 4"/></svg>';
  const docSvg='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>';
  let links='';
  if(d.play){const label=d.steam?'Xbox / Store':'Play game';links+=`<a class="mlink primary" href="${d.play}" target="_blank" rel="noopener">${playSvg}${label}</a>`;}
  if(d.steam)links+=`<a class="mlink secondary" href="${d.steam}" target="_blank" rel="noopener">${playSvg}Steam</a>`;
  if(d.code)links+=`<a class="mlink code" href="${d.code}" target="_blank" rel="noopener">${codeSvg}View code</a>`;
  if(d.doc)links+=`<a class="mlink secondary" href="${d.doc}" target="_blank" rel="noopener">${docSvg}Design doc</a>`;
  document.getElementById('mLinks').innerHTML=links;
  modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
  document.getElementById('modalClose').focus();}
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';if(lastFocused)lastFocused.focus();}
document.addEventListener('click',e=>{const c=e.target.closest('.pcard-open');if(c)openModal(c.dataset.key);
  if(e.target===modal||e.target.closest('#modalClose'))closeModal();});
document.addEventListener('keydown',e=>{
  if(!modal.classList.contains('open'))return;
  if(e.key==='Escape')closeModal();
  else if(e.key==='ArrowLeft'&&galSlides.length>1)galGo(-1);
  else if(e.key==='ArrowRight'&&galSlides.length>1)galGo(1);
});
document.getElementById('projects').addEventListener('keydown',e=>{const c=e.target.closest('.pcard-open');
  if(c&&(e.key==='Enter'||e.key===' ')){e.preventDefault();openModal(c.dataset.key);}});

const mm=document.getElementById('mobileMenu');
const openMM=()=>{mm.classList.add('open');mm.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';};
const closeMM=()=>{mm.classList.remove('open');mm.setAttribute('aria-hidden','true');document.body.style.overflow='';};
document.getElementById('openMenu').addEventListener('click',openMM);
document.getElementById('closeMenu').addEventListener('click',closeMM);
mm.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMM));

const io=new IntersectionObserver(en=>en.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

/* ---------- INTERACTIVE CONSTELLATION FIELD ---------- */
(function(){
  const panel=document.getElementById('hero');
  const cv=document.getElementById('field'),ctx=cv.getContext('2d');
  const glow=document.querySelector('.field-glow');
  const reduce=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  const COLORS=[[182,240,156],[124,224,211],[155,140,255],[255,210,122]];
  let W=0,H=0,dpr=1,pts=[],mouse={x:-999,y:-999,active:false};
  const rand=(a,b)=>a+Math.random()*(b-a);
  function fit(){
    const r=cv.getBoundingClientRect();dpr=Math.min(window.devicePixelRatio||1,2);
    cv.width=r.width*dpr;cv.height=r.height*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);
    W=r.width;H=r.height;build();
  }
  function build(){
    const density=Math.min(70,Math.floor((W*H)/9000));
    pts=[];for(let i=0;i<density;i++){
      const c=COLORS[Math.floor(Math.random()*COLORS.length)];
      pts.push({x:Math.random()*W,y:Math.random()*H,
        vx:rand(-.28,.28),vy:rand(-.28,.28),
        r:rand(1.3,2.6),c,ox:0,oy:0});
    }
  }
  function move(e){
    const r=cv.getBoundingClientRect();
    const t=e.touches?e.touches[0]:e;
    mouse.x=t.clientX-r.left;mouse.y=t.clientY-r.top;mouse.active=true;
    glow.style.setProperty('--mx',(mouse.x/W*100)+'%');
    glow.style.setProperty('--my',(mouse.y/H*100)+'%');
  }
  function leave(){mouse.active=false;mouse.x=-999;mouse.y=-999;}
  panel.addEventListener('pointermove',move);
  panel.addEventListener('pointerleave',leave);
  panel.addEventListener('touchmove',move,{passive:true});
  panel.addEventListener('touchend',leave);

  const LINK=118,PULL=140;
  function frame(){
    ctx.clearRect(0,0,W,H);
    for(const p of pts){
      p.x+=p.vx;p.y+=p.vy;
      if(p.x<0||p.x>W)p.vx*=-1;
      if(p.y<0||p.y>H)p.vy*=-1;
      // mouse repulsion (springy geometry)
      if(mouse.active){
        const dx=p.x-mouse.x,dy=p.y-mouse.y,d=Math.hypot(dx,dy);
        if(d<PULL&&d>0){const f=(1-d/PULL)*2.2;p.ox+=(dx/d)*f;p.oy+=(dy/d)*f;}
      }
      p.ox*=0.9;p.oy*=0.9;
      const px=p.x+p.ox,py=p.y+p.oy;
      ctx.beginPath();ctx.arc(px,py,p.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(${p.c[0]},${p.c[1]},${p.c[2]},.85)`;ctx.fill();
      p._px=px;p._py=py;
    }
    // links
    for(let i=0;i<pts.length;i++){
      for(let j=i+1;j<pts.length;j++){
        const a=pts[i],b=pts[j];
        const dx=a._px-b._px,dy=a._py-b._py,d=Math.hypot(dx,dy);
        if(d<LINK){
          const al=(1-d/LINK)*0.5;
          ctx.strokeStyle=`rgba(${a.c[0]},${a.c[1]},${a.c[2]},${al})`;
          ctx.lineWidth=0.7;ctx.beginPath();ctx.moveTo(a._px,a._py);ctx.lineTo(b._px,b._py);ctx.stroke();
        }
      }
      // link to cursor
      if(mouse.active){
        const a=pts[i],dx=a._px-mouse.x,dy=a._py-mouse.y,d=Math.hypot(dx,dy);
        if(d<LINK+30){const al=(1-d/(LINK+30))*0.7;
          ctx.strokeStyle=`rgba(124,224,211,${al})`;ctx.lineWidth=0.9;
          ctx.beginPath();ctx.moveTo(a._px,a._py);ctx.lineTo(mouse.x,mouse.y);ctx.stroke();}
      }
    }
    if(mouse.active){
      ctx.beginPath();ctx.arc(mouse.x,mouse.y,3,0,Math.PI*2);
      ctx.fillStyle='rgba(124,224,211,.95)';ctx.fill();
    }
    requestAnimationFrame(frame);
  }
  function staticFrame(){
    ctx.clearRect(0,0,W,H);
    for(const p of pts){ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(${p.c[0]},${p.c[1]},${p.c[2]},.7)`;ctx.fill();}
    for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){
      const a=pts[i],b=pts[j],d=Math.hypot(a.x-b.x,a.y-b.y);
      if(d<LINK){ctx.strokeStyle=`rgba(${a.c[0]},${a.c[1]},${a.c[2]},${(1-d/LINK)*0.4})`;
        ctx.lineWidth=0.6;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();}
    }
  }
  fit();window.addEventListener('resize',fit);
  if(reduce)staticFrame();else requestAnimationFrame(frame);
})();