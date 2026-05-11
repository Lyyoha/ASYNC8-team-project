import{a as u,C as P,i as M,A as B,S as b,N as y,P as h}from"./assets/vendor-96xp1dn3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(a){if(a.ep)return;a.ep=!0;const n=r(a);fetch(a.href,n)}})();const s={body:document.body,burger:document.querySelector(".burger-container"),burgerBtn:document.querySelector(".burger-icon"),burgerBtnClose:document.querySelector(".btn-close"),burgerMenuLink:document.querySelector(".menu-link"),burgerMenuBtn:document.querySelector(".button-menu"),feedbackList:document.querySelector(".js-feedback-list"),burger:document.querySelector(".burger-container"),burgerBtn:document.querySelector(".burger-icon"),burgerBtnClose:document.querySelector(".btn-close"),burgerMenuLink:document.querySelectorAll(".burger-menu-link"),burgerMenuBtn:document.querySelector(".button-menu"),wrapper:document.querySelector(".about-us-list"),items:document.querySelectorAll(".about-us-item"),desertsList:document.querySelector(".desert-cards"),desertsCategories:document.querySelector(".desert-categories"),desertsCategoriesSelect:document.querySelector(".desert-categories-select"),desertsEmpty:document.querySelector(".desert-empty"),desertsLoadMore:document.querySelector(".desert-load-more"),popularList:document.querySelector(".swiper-wrapper")},H=()=>{s.burger.classList.add("is-open"),s.body.classList.add("scroll-lock")},v=()=>{s.burger.classList.remove("is-open"),s.body.classList.remove("scroll-lock")};u.defaults.baseURL="https://deserts-store.b.goit.study/api";const I=async()=>{const{data:e}=await u.get("/feedbacks?limit=10&page=1");return e.feedbacks};async function L({page:e=1,limit:t=9,category:r=null}={}){const o={page:e,limit:t};r&&(o.category=r);const{data:a}=await u.get("/desserts",{params:o});return a}async function x(){const{data:e}=await u.get("/categories");return e}const A=async()=>{const{data:e}=await u.get("/desserts",{params:{type:"popular"}});return e},O=e=>{const t=Math.floor(e),r=e%1!==0;return`
    <div class="rating value-${t} ${r?"half":""}">
      <div class="star-container">
        ${[1,2,3,4,5].map(()=>`
          <div class="star">
            <svg class="star-empty" style="fill: var(--color-scheme-1-text)">
                <use href="/img/sprite.svg#star-empty"></use>
            </svg>
             <svg class="star-half" style="fill: var(--color-scheme-1-text)">
                <use href="/img/sprite.svg#star-half"></use>
            </svg>
            <svg class="star-filled" style="fill: var(--color-scheme-1-text)">
                <use href="/img/sprite.svg#star-filled"></use>
            </svg>
        </div>
        `).join("")}
      </div>
    </div>
  `},V=({_id:e,rate:t,description:r,author:o})=>`<li class="swiper-slide feedback-item" data-id="${e}">
  <div class="feedback-item-rate">${O(t)}</div>
  <p class="feedback-item-description">"${r}"</p>
  <h3 class="feedback-item-author">${o}</h3>
</li>`,j={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function d(e=""){return String(e).replace(/[&<>"']/g,t=>j[t])}function N({_id:e,name:t,description:r,price:o,image:a,category:n}){const c=d(t),$=d(r),T=d((n==null?void 0:n.name)??"");return`
    <li class="desert-card" data-id="${e}">
      <img class="desert-card-img" src="${a}" alt="${c}" loading="lazy" />
      <div class="desert-card-body">
        <p class="desert-card-category">${T}</p>
        <h3 class="desert-card-title">${c}</h3>
        <p class="desert-card-description">${$}</p>
        <div class="desert-card-footer">
          <p class="desert-card-price">${o} грн</p>
          <button class="desert-card-arrow" type="button" aria-label="Переглянути ${c}">
            <svg class="desert-card-arrow-icon" width="24" height="24">
              <use href="/img/sprite.svg#arrow_outward"></use>
            </svg>
          </button>
        </div>
      </div>
    </li>
  `}function F(e){return e.map(N).join("")}function D(e){const t='<li><button type="button" class="desert-chip is-active" data-id="">Всі десерти</button></li>',r=e.map(({_id:o,name:a})=>`<li><button type="button" class="desert-chip" data-id="${o}">${d(a)}</button></li>`).join("");return t+r}function z(e){const t='<option value="">Всі десерти</option>',r=e.map(({_id:o,name:a})=>`<option value="${o}">${d(a)}</option>`).join("");return t+r}function R(e=6){return`
    <li class="desert-card desert-card--skeleton">
      <div class="desert-skeleton-thumb desert-skeleton-shimmer"></div>
      <div class="desert-card-body">
        <div class="desert-skeleton-line desert-skeleton-line--short desert-skeleton-shimmer"></div>
        <div class="desert-skeleton-line desert-skeleton-line--title desert-skeleton-shimmer"></div>
        <div class="desert-skeleton-line desert-skeleton-shimmer"></div>
        <div class="desert-skeleton-line desert-skeleton-line--short desert-skeleton-shimmer"></div>
      </div>
    </li>
  `.repeat(e)}const U=({_id:e,image:t,category:r,name:o,description:a,price:n})=>`
    <li class="swiper-slide" data-id="${e}">
      <article class="product-card">
        <div class="img-thumb">
          <img src="${t}" alt="${o}" loading="lazy" />
        </div>
        <div class="card-content">
          <p class="category">${r.name}</p>
          <h3 class="name">${o}</h3>
          <p class="description">${a}</p>
          <div class="card-footer">
            <span class="price">${n} грн</span>
            <button type="button" class="order-link-btn" aria-label="Детальна інформація">
              <svg width="20" height="20">
                <use href="../img/sprite.svg#arrow_outward"></use>
              </svg>
            </button>
          </div>
        </div>
      </article>
    </li>
  `,_={searchEnabled:!1,shouldSort:!1,itemSelectText:"",allowHTML:!1,position:"bottom",classNames:{containerOuter:["choices","category-select"]}};function K(e,{onChange:t}={}){if(!e)return null;const r=new P(e,_);return typeof t=="function"&&e.addEventListener("change",o=>t(o.target.value)),r}function Q(e,t){e&&e.setChoiceByValue(t??"")}const i={page:1,limit:8,category:"",totalItems:0,loaded:0};let m=null;async function G(){var e,t;if(s.desertsList){(e=s.desertsCategories)==null||e.addEventListener("click",J),(t=s.desertsLoadMore)==null||t.addEventListener("click",X),s.desertsList.addEventListener("click",Y),E();try{const[r,o]=await Promise.all([L({page:1,limit:i.limit}),x()]);s.desertsCategories&&(s.desertsCategories.innerHTML=D(o)),s.desertsCategoriesSelect&&(s.desertsCategoriesSelect.innerHTML=z(o),m=K(s.desertsCategoriesSelect,{onChange:C})),i.totalItems=r.totalItems,i.loaded=r.desserts.length,i.page=1,w(r.desserts,"replace"),p(),k()}catch(r){s.desertsList.innerHTML="",i.loaded=0,p(),S(r)}}}function J(e){const t=e.target.closest(".desert-chip");if(!t)return;const r=t.dataset.id||"";C(r)}async function C(e){if(e!==i.category){i.category=e,i.page=1,i.loaded=0,W(e),E(),s.desertsLoadMore.hidden=!0;try{const t=await L({page:1,limit:i.limit,category:e||null});i.totalItems=t.totalItems,i.loaded=t.desserts.length,w(t.desserts,"replace"),p(),k()}catch(t){s.desertsList.innerHTML="",p(),S(t)}}}function W(e){s.desertsCategories&&s.desertsCategories.querySelectorAll(".desert-chip").forEach(t=>t.classList.toggle("is-active",t.dataset.id===e)),m&&s.desertsCategoriesSelect&&s.desertsCategoriesSelect.value!==e&&Q(m,e)}async function X(){s.desertsLoadMore.disabled=!0;const e=i.page+1;try{const t=await L({page:e,limit:i.limit,category:i.category||null});i.page=e,i.totalItems=t.totalItems,i.loaded+=t.desserts.length,w(t.desserts,"append"),k()}catch(t){S(t)}finally{s.desertsLoadMore.disabled=!1}}function Y(e){const t=e.target.closest(".desert-card");if(!t||t.classList.contains("desert-card--skeleton"))return;const r=t.dataset.id;r&&M.info({title:"Скоро",message:`Деталі десерту: ${r}`,position:"topRight"})}function E(){s.desertsList.hidden=!1,s.desertsEmpty&&(s.desertsEmpty.hidden=!0),s.desertsList.innerHTML=R(i.limit)}function w(e,t){const r=F(e);t==="replace"?s.desertsList.innerHTML=r:s.desertsList.insertAdjacentHTML("beforeend",r),Z()}function Z(){s.desertsList.querySelectorAll("img.desert-card-img:not(.is-loaded)").forEach(t=>{if(t.complete){t.classList.add("is-loaded");return}t.addEventListener("load",()=>t.classList.add("is-loaded")),t.addEventListener("error",()=>t.classList.add("is-loaded"))})}function p(){if(!s.desertsEmpty)return;const e=i.loaded===0;s.desertsEmpty.hidden=!e,s.desertsList.hidden=e}function k(){if(!s.desertsLoadMore)return;const e=i.loaded<i.totalItems;s.desertsLoadMore.hidden=!e}function S(e){M.error({title:"Помилка",message:e.message||"Не вдалося завантажити десерти",position:"topRight"})}new B(".faq-list",{elementClass:"faq-list-item",triggerClass:"faq-list-item-thumb",panelClass:"faq-accordion"});G();s.burgerBtn.addEventListener("click",H);s.burgerBtnClose.addEventListener("click",v);s.burgerMenuLink.forEach(e=>e.addEventListener("click",v));s.burgerMenuBtn.addEventListener("click",v);const ee=async()=>{try{return await A()}catch(e){return console.error("Помилка запиту:",e),[]}},te=()=>{new b(".popular-swiper",{modules:[y,h],slidesPerView:1,spaceBetween:20,pagination:{el:".popular-pagination",clickable:!0},navigation:{nextEl:".popular-swiper-button-next",prevEl:".popular-swiper-button-prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:3,spaceBetween:24}},watchOverflow:!0})},se=async()=>{try{const e=await ee();if(!e||!e.desserts||e.desserts.length===0){s.popularList.innerHTML="<p>На жаль, популярні товари зараз недоступні.</p>";return}const t=e.desserts.map(U).join("");s.popularList.innerHTML=t,te()}catch(e){console.error("Помилка рендерингу секції:",e),s.popularList.innerHTML="<p>Сталася помилка при завантаженні даних.</p>"}};se();let g=null;const re=async()=>{try{const t=(await I()).map(r=>V(r)).join("");s.feedbackList.innerHTML=t,ae()}catch(e){console.log(e)}},ae=()=>{g&&g.destroy(!0,!0),g=new b(".feedback-swiper",{modules:[y,h],direction:"horizontal",loop:!1,spaceBetween:24,pagination:{el:".feedback-swiper-control .swiper-pagination",clickable:!0},navigation:{nextEl:".feedback-swiper-btn-next",prevEl:".feedback-swiper-btn-prev"},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:3}},a11y:{prevSlideMessage:"Попередній слайд",nextSlideMessage:"Наступний слайд"},keyboard:{enabled:!0,onlyInViewport:!1}})};document.addEventListener("DOMContentLoaded",re);const f=window.matchMedia("(min-width: 768px)");let l=null;const q=()=>{f.matches&&!l?l=new b(".about-us-slider .swiper",{modules:[y,h],slidesPerView:2,spaceBetween:24,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".about-us-pagination",clickable:!0}}):!f.matches&&l&&(l.destroy(!0,!0),l=null)};q();f.addEventListener("change",q);
//# sourceMappingURL=index.js.map
