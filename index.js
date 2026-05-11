import{a as u,C as P,i as M,A,S as y,N as h,P as v}from"./assets/vendor-96xp1dn3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(a){if(a.ep)return;a.ep=!0;const n=r(a);fetch(a.href,n)}})();const s={body:document.body,burger:document.querySelector(".burger-container"),burgerBtn:document.querySelector(".burger-icon"),burgerBtnClose:document.querySelector(".btn-close"),burgerMenuLink:document.querySelector(".menu-link"),burgerMenuBtn:document.querySelector(".button-menu"),feedbackList:document.querySelector(".js-feedback-list"),burger:document.querySelector(".burger-container"),burgerBtn:document.querySelector(".burger-icon"),burgerBtnClose:document.querySelector(".btn-close"),burgerMenuLink:document.querySelectorAll(".burger-menu-link"),burgerMenuBtn:document.querySelector(".button-menu"),wrapper:document.querySelector(".about-us-list"),items:document.querySelectorAll(".about-us-item"),desertsList:document.querySelector(".desert-cards"),desertsCategories:document.querySelector(".desert-categories"),desertsCategoriesSelect:document.querySelector(".desert-categories-select"),desertsEmpty:document.querySelector(".desert-empty"),desertsLoadMore:document.querySelector(".desert-load-more"),popularList:document.querySelector(".swiper-wrapper")},H=()=>{s.burger.classList.add("is-open"),s.body.classList.add("scroll-lock")},L=()=>{s.burger.classList.remove("is-open"),s.body.classList.remove("scroll-lock")};u.defaults.baseURL="https://deserts-store.b.goit.study/api";const I=async()=>{const{data:e}=await u.get("/feedbacks?limit=10&page=1");return e.feedbacks};async function w({page:e=1,limit:t=9,category:r=null}={}){const o={page:e,limit:t};r&&(o.category=r);const{data:a}=await u.get("/desserts",{params:o});return a}async function x(){const{data:e}=await u.get("/categories");return e}const j=async()=>{const{data:e}=await u.get("/desserts",{params:{type:"popular"}});return e},g="/ASYNC8-team-project/assets/sprite-ByJCB0-d.svg",N=e=>{const t=Math.floor(e),r=e%1!==0;return`
    <div class="rating value-${t} ${r?"half":""}">
      <div class="star-container">
        ${[1,2,3,4,5].map(()=>`
          <div class="star">
            <svg class="star-empty" style="fill: var(--color-scheme-1-text)">
               <use href="${g}#star-empty"></use>
            </svg>
             <svg class="star-half" style="fill: var(--color-scheme-1-text)">
                <use href="${g}#star-half"></use>
            </svg>
            <svg class="star-filled" style="fill: var(--color-scheme-1-text)">
                <use href="${g}#star-filled"></use>
            </svg>
        </div>
        `).join("")}
      </div>
    </div>
  `},O=({_id:e,rate:t,description:r,author:o})=>`<li class="swiper-slide feedback-item" data-id="${e}">
  <div class="feedback-item-rate">${N(t)}</div>
  <p class="feedback-item-description">"${r}"</p>
  <h3 class="feedback-item-author">${o}</h3>
</li>`,V={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function d(e=""){return String(e).replace(/[&<>"']/g,t=>V[t])}function F({_id:e,name:t,description:r,price:o,image:a,category:n}){const c=d(t),T=d(r),B=d((n==null?void 0:n.name)??"");return`
    <li class="desert-card" data-id="${e}">
      <img class="desert-card-img" src="${a}" alt="${c}" loading="lazy" />
      <div class="desert-card-body">
        <p class="desert-card-category">${B}</p>
        <h3 class="desert-card-title">${c}</h3>
        <p class="desert-card-description">${T}</p>
        <div class="desert-card-footer">
          <p class="desert-card-price">${o} грн</p>
          <button class="desert-card-arrow" type="button" aria-label="Переглянути ${c}">
            <svg class="desert-card-arrow-icon" width="24" height="24">
              <use href="./img/sprite.svg#arrow_outward"></use>
            </svg>
          </button>
        </div>
      </div>
    </li>
  `}function D(e){return e.map(F).join("")}function z(e){const t='<li><button type="button" class="desert-chip is-active" data-id="">Всі десерти</button></li>',r=e.map(({_id:o,name:a})=>`<li><button type="button" class="desert-chip" data-id="${o}">${d(a)}</button></li>`).join("");return t+r}function R(e){const t='<option value="">Всі десерти</option>',r=e.map(({_id:o,name:a})=>`<option value="${o}">${d(a)}</option>`).join("");return t+r}function U(e=6){return`
    <li class="desert-card desert-card--skeleton">
      <div class="desert-skeleton-thumb desert-skeleton-shimmer"></div>
      <div class="desert-card-body">
        <div class="desert-skeleton-line desert-skeleton-line--short desert-skeleton-shimmer"></div>
        <div class="desert-skeleton-line desert-skeleton-line--title desert-skeleton-shimmer"></div>
        <div class="desert-skeleton-line desert-skeleton-shimmer"></div>
        <div class="desert-skeleton-line desert-skeleton-line--short desert-skeleton-shimmer"></div>
      </div>
    </li>
  `.repeat(e)}const _=({_id:e,image:t,category:r,name:o,description:a,price:n})=>`
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
                <use href="./img/sprite.svg#arrow_outward"></use>
              </svg>
            </button>
          </div>
        </div>
      </article>
    </li>
  `,J={searchEnabled:!1,shouldSort:!1,itemSelectText:"",allowHTML:!1,position:"bottom",classNames:{containerOuter:["choices","category-select"]}};function K(e,{onChange:t}={}){if(!e)return null;const r=new P(e,J);return typeof t=="function"&&e.addEventListener("change",o=>t(o.target.value)),r}function Q(e,t){e&&e.setChoiceByValue(t??"")}const i={page:1,limit:8,category:"",totalItems:0,loaded:0};let f=null;async function Y(){var e,t;if(s.desertsList){(e=s.desertsCategories)==null||e.addEventListener("click",G),(t=s.desertsLoadMore)==null||t.addEventListener("click",X),s.desertsList.addEventListener("click",Z),$();try{const[r,o]=await Promise.all([w({page:1,limit:i.limit}),x()]);s.desertsCategories&&(s.desertsCategories.innerHTML=z(o)),s.desertsCategoriesSelect&&(s.desertsCategoriesSelect.innerHTML=R(o),f=K(s.desertsCategoriesSelect,{onChange:E})),i.totalItems=r.totalItems,i.loaded=r.desserts.length,i.page=1,k(r.desserts,"replace"),p(),S()}catch(r){s.desertsList.innerHTML="",i.loaded=0,p(),C(r)}}}function G(e){const t=e.target.closest(".desert-chip");if(!t)return;const r=t.dataset.id||"";E(r)}async function E(e){if(e!==i.category){i.category=e,i.page=1,i.loaded=0,W(e),$(),s.desertsLoadMore.hidden=!0;try{const t=await w({page:1,limit:i.limit,category:e||null});i.totalItems=t.totalItems,i.loaded=t.desserts.length,k(t.desserts,"replace"),p(),S()}catch(t){s.desertsList.innerHTML="",p(),C(t)}}}function W(e){s.desertsCategories&&s.desertsCategories.querySelectorAll(".desert-chip").forEach(t=>t.classList.toggle("is-active",t.dataset.id===e)),f&&s.desertsCategoriesSelect&&s.desertsCategoriesSelect.value!==e&&Q(f,e)}async function X(){s.desertsLoadMore.disabled=!0;const e=i.page+1;try{const t=await w({page:e,limit:i.limit,category:i.category||null});i.page=e,i.totalItems=t.totalItems,i.loaded+=t.desserts.length,k(t.desserts,"append"),S()}catch(t){C(t)}finally{s.desertsLoadMore.disabled=!1}}function Z(e){const t=e.target.closest(".desert-card");if(!t||t.classList.contains("desert-card--skeleton"))return;const r=t.dataset.id;r&&M.info({title:"Скоро",message:`Деталі десерту: ${r}`,position:"topRight"})}function $(){s.desertsList.hidden=!1,s.desertsEmpty&&(s.desertsEmpty.hidden=!0),s.desertsList.innerHTML=U(i.limit)}function k(e,t){const r=D(e);t==="replace"?s.desertsList.innerHTML=r:s.desertsList.insertAdjacentHTML("beforeend",r),ee()}function ee(){s.desertsList.querySelectorAll("img.desert-card-img:not(.is-loaded)").forEach(t=>{if(t.complete){t.classList.add("is-loaded");return}t.addEventListener("load",()=>t.classList.add("is-loaded")),t.addEventListener("error",()=>t.classList.add("is-loaded"))})}function p(){if(!s.desertsEmpty)return;const e=i.loaded===0;s.desertsEmpty.hidden=!e,s.desertsList.hidden=e}function S(){if(!s.desertsLoadMore)return;const e=i.loaded<i.totalItems;s.desertsLoadMore.hidden=!e}function C(e){M.error({title:"Помилка",message:e.message||"Не вдалося завантажити десерти",position:"topRight"})}new A(".faq-list",{elementClass:"faq-list-item",triggerClass:"faq-list-item-thumb",panelClass:"faq-accordion"});Y();s.burgerBtn.addEventListener("click",H);s.burgerBtnClose.addEventListener("click",L);s.burgerMenuLink.forEach(e=>e.addEventListener("click",L));s.burgerMenuBtn.addEventListener("click",L);const te=async()=>{try{return await j()}catch(e){return console.error("Помилка запиту:",e),[]}},se=()=>{new y(".popular-swiper",{modules:[h,v],slidesPerView:1,spaceBetween:20,pagination:{el:".popular-pagination",clickable:!0},navigation:{nextEl:".popular-swiper-button-next",prevEl:".popular-swiper-button-prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:3,spaceBetween:24}},watchOverflow:!0})},re=async()=>{try{const e=await te();if(!e||!e.desserts||e.desserts.length===0){s.popularList.innerHTML="<p>На жаль, популярні товари зараз недоступні.</p>";return}const t=e.desserts.map(_).join("");s.popularList.innerHTML=t,se()}catch(e){console.error("Помилка рендерингу секції:",e),s.popularList.innerHTML="<p>Сталася помилка при завантаженні даних.</p>"}};re();let m=null;const ae=async()=>{try{const t=(await I()).map(r=>O(r)).join("");s.feedbackList.innerHTML=t,ie()}catch(e){console.log(e)}},ie=()=>{m&&m.destroy(!0,!0),m=new y(".feedback-swiper",{modules:[h,v],direction:"horizontal",loop:!1,spaceBetween:24,pagination:{el:".feedback-swiper-control .swiper-pagination",clickable:!0},navigation:{nextEl:".feedback-swiper-btn-next",prevEl:".feedback-swiper-btn-prev"},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:3}},a11y:{prevSlideMessage:"Попередній слайд",nextSlideMessage:"Наступний слайд"},keyboard:{enabled:!0,onlyInViewport:!1}})};document.addEventListener("DOMContentLoaded",ae);const b=window.matchMedia("(min-width: 768px)");let l=null;const q=()=>{b.matches&&!l?l=new y(".about-us-slider .swiper",{modules:[h,v],slidesPerView:2,spaceBetween:24,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".about-us-pagination",clickable:!0}}):!b.matches&&l&&(l.destroy(!0,!0),l=null)};q();b.addEventListener("change",q);
//# sourceMappingURL=index.js.map
