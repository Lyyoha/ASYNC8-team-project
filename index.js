import{a as d,C as j,i as V,A as D,S as E,N as S,P as C}from"./assets/vendor-96xp1dn3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const r={body:document.body,burger:document.querySelector(".burger-container"),burgerBtn:document.querySelector(".burger-btn"),burgerBtnClose:document.querySelector(".btn-close"),burgerMenuBtn:document.querySelectorAll(".button-menu"),burgerMenuLink:document.querySelectorAll(".burger-menu-link"),feedbackList:document.querySelector(".js-feedback-list"),orderBackdrop:document.querySelector("[data-order-backdrop]"),orderModal:document.querySelector("[data-order-modal]"),orderCloseBtn:document.querySelector("[data-order-close]"),orderForm:document.querySelector("[data-order-form]"),dessertIdInput:document.querySelector('[name="dessertId"]'),submitBtn:document.querySelector(".order-submit-btn"),productModal:document.querySelector(".product-modal-inner"),productBackdrop:document.querySelector("[data-product-backdrop]"),productModal:document.querySelector("[data-product-modal]"),productCloseBtn:document.querySelector("[data-product-close]"),orderOpenBtns:document.querySelectorAll("[data-order-open]"),wrapper:document.querySelector(".about-us-list"),items:document.querySelectorAll(".about-us-item"),desertsList:document.querySelector(".desert-cards"),desertsCategories:document.querySelector(".desert-categories"),desertsListPopular:document.querySelector("#popular-list"),desertsCategoriesSelect:document.querySelector(".desert-categories-select"),desertsEmpty:document.querySelector(".desert-empty"),desertsLoadMore:document.querySelector(".desert-load-more"),popularList:document.querySelector(".swiper-wrapper")};function g(e,t){const s=e.closest(".order-field")??e.parentElement;if(e.classList.add("error"),s.querySelector(".input-error-text, .textarea-error-text"))return;const a=document.createElement("p");a.textContent=t,a.classList.add(e.tagName==="TEXTAREA"?"textarea-error-text":"input-error-text"),s.appendChild(a)}function F(e){e.classList.remove("error");const s=(e.closest(".order-field")??e.parentElement).querySelector(".input-error-text, .textarea-error-text");s&&s.remove()}const z=()=>{r.burger.classList.add("is-open"),r.body.classList.add("scroll-lock")},B=()=>{r.burger.classList.remove("is-open"),r.body.classList.remove("scroll-lock")};function U(){if(!r.orderForm)return;r.orderForm.reset(),[r.orderForm.elements.name,r.orderForm.elements.phone,r.orderForm.elements.comment].forEach(t=>{t&&F(t)})}const _=()=>{r.orderBackdrop.classList.add("is-open"),r.body.style.overflow="hidden"},v=()=>{r.orderBackdrop.classList.remove("is-open"),r.body.style.overflow="",U()};r.orderCloseBtn&&r.orderCloseBtn.addEventListener("click",v);r.orderBackdrop&&r.orderBackdrop.addEventListener("click",e=>{e.target===r.orderBackdrop&&v()});document.addEventListener("keydown",e=>{var t,s;e.key==="Escape"&&((t=r.orderBackdrop)!=null&&t.classList.contains("is-open")&&v(),(s=r.productBackdrop)!=null&&s.classList.contains("is-open")&&h())});const h=()=>{r.productBackdrop.classList.remove("is-open"),r.body.style.overflow=""};r.productCloseBtn&&r.productCloseBtn.addEventListener("click",h);r.productBackdrop&&r.productBackdrop.addEventListener("click",e=>{e.target===r.productBackdrop&&h()});if(!r.dessertIdInput){const e=document.createElement("input");e.type="hidden",e.name="dessertId",r.orderForm.appendChild(e),r.dessertIdInput=e}r.orderOpenBtns.forEach(e=>{e.addEventListener("click",()=>{r.dessertIdInput.value=e.dataset.dessertId,h(),_()})});d.defaults.baseURL="https://deserts-store.b.goit.study/api";async function G(e){const{data:t}=await d.get(`/desserts/${e}`);return t}async function M({page:e=1,limit:t=9,category:s=null}={}){const a={page:e,limit:t};s&&(a.category=s);const{data:o}=await d.get("/desserts",{params:a});return o}async function K(){const{data:e}=await d.get("/categories");return e}async function A(e){const{data:t}=await d.get(`/desserts/${e}`);return t}const Q=async()=>{const{data:e}=await d.get("/desserts",{params:{type:"popular"}});return e};async function W(){const{data:e}=await d.get("/feedbacks");return e}const X=async e=>d.post("/orders",e),u="/ASYNC8-team-project/assets/sprite-CL5jNEbh.svg",Y=e=>{const t=Math.floor(e),s=e%1!==0;return`
    <div class="rating value-${t} ${s?"half":""}">
      <div class="star-container">
        ${[1,2,3,4,5].map(()=>`
          <div class="star">
            <svg class="star-empty" style="fill: var(--color-scheme-1-text)">
               <use href="${u}#star-empty"></use>
            </svg>
             <svg class="star-half" style="fill: var(--color-scheme-1-text)">
                <use href="${u}#star-half"></use>
            </svg>
            <svg class="star-filled" style="fill: var(--color-scheme-1-text)">
                <use href="${u}#star-filled"></use>
            </svg>
        </div>
        `).join("")}
      </div>
    </div>
  `},J=({_id:e,rate:t,description:s,author:a})=>`<li class="swiper-slide feedback-item" data-id="${e}">
  <div class='feedback-thumb'>
  <div class="feedback-item-rate">${Y(t)}</div>
  <p class="feedback-item-description">"${s}"</p>
  </div>
  <h3 class="feedback-item-author">${a}</h3>
</li>`,Z={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function p(e=""){return String(e).replace(/[&<>"']/g,t=>Z[t])}function ee({_id:e,name:t,description:s,price:a,image:o,category:i}){const c=p(t),b=p(s),m=p((i==null?void 0:i.name)??"");return`
    <li class="desert-card" data-id="${e}">
      <img class="desert-card-img" src="${o}" alt="${c}" loading="lazy" />
      <div class="desert-card-body">
        <p class="desert-card-category">${m}</p>
        <h3 class="desert-card-title">${c}</h3>
        <p class="desert-card-description">${b}</p>
        <div class="desert-card-footer">
          <p class="desert-card-price">${a} грн</p>
          <button class="desert-card-arrow" type="button" aria-label="Переглянути ${c}">
            <svg class="desert-card-arrow-icon" width="24" height="24">
              <use href="${u}#arrow_outward"></use>
            </svg>
          </button>
        </div>
      </div>
    </li>
  `}function te(e){return e.map(ee).join("")}function re(e){const t='<li><button type="button" class="desert-chip is-active" data-id="">Всі десерти</button></li>',s=e.map(({_id:a,name:o})=>`<li><button type="button" class="desert-chip" data-id="${a}">${p(o)}</button></li>`).join("");return t+s}function se(e){const t='<option value="">Всі десерти</option>',s=e.map(({_id:a,name:o})=>`<option value="${a}">${p(o)}</option>`).join("");return t+s}function oe(e=6){return`
    <li class="desert-card desert-card--skeleton">
      <div class="desert-skeleton-thumb desert-skeleton-shimmer"></div>
      <div class="desert-card-body">
        <div class="desert-skeleton-line desert-skeleton-line--short desert-skeleton-shimmer"></div>
        <div class="desert-skeleton-line desert-skeleton-line--title desert-skeleton-shimmer"></div>
        <div class="desert-skeleton-line desert-skeleton-shimmer"></div>
        <div class="desert-skeleton-line desert-skeleton-line--short desert-skeleton-shimmer"></div>
      </div>
    </li>
  `.repeat(e)}const ae=({_id:e,image:t,category:s,name:a,description:o,price:i})=>`
    <li class="swiper-slide" data-id="${e}">
      <article class="product-card">
        <div class="img-thumb">
          <img src="${t}" alt="${a}" loading="lazy" />
        </div>
        <div class="card-content">
          <p class="category">${s.name}</p>
          <h3 class="name">${a}</h3>
          <p class="description">${o}</p>
          <div class="card-footer">
            <span class="price">${i} грн</span>
            <button type="button" class="order-link-btn" aria-label="Детальна інформація">
              <svg width="24" height="24">
                <use href="${u}#arrow_outward"></use>
              </svg>
            </button>
          </div>
        </div>
      </article>
    </li>
  `;function T(){r.productBackdrop.classList.add("is-open"),document.body.style.overflow="hidden"}function $(){r.productBackdrop.classList.remove("is-open"),document.body.style.overflow=""}function ne(e){e.target===r.productBackdrop&&$()}function ie(e){e.key==="Escape"&&$()}function ce(e){const s=Number(e)||0;return Array.from({length:5},(a,o)=>`<span>${o+1<=s?"★":"☆"}</span>`).join("")}function I(e){if(!e)return;let t=`  <!-- IMAGE -->
      <div class="product-img-wrapper">
        <img src="${e.image}" alt="${e.name}" class="product-img" />
      </div>

      <!-- CONTENT -->
      <div class="product-content">
        <!-- TITLE -->
        <h2 class="product-title">${e.name}</h2>

        <!-- PRICE -->
        <p class="product-price">${e.price} грн</p>

        <!-- RATING -->
        <div class="product-rating">${ce(e.rate)}</div>

        <!-- DESCRIPTION -->
        <p class="product-desc">${e.description}</p>

        <!-- COMPOSITION -->
        <p class="product-composition">
          <span class="composition-label">Склад:</span>
          <span class="composition-value">${e.composition}</span>
        </p>

        <!-- ORDER BUTTON WRAPPER -->
        <div class="order-btn-wrapper">
          <button class="order-btn" data-order-open data-dessert-id="${e._id}">
            Перейти до замовлення
          </button>
        </div> </div>`;r.productModal.innerHTML=t}async function de(e){try{const t=await G(e);I(t),T()}catch(t){console.error("Помилка завантаження десерту:",t)}}function le(){r.productCloseBtn.addEventListener("click",$),!(!r.productCloseBtn||!r.productBackdrop||!r.productModal)&&(r.productBackdrop.addEventListener("click",ne),window.addEventListener("keydown",ie),document.addEventListener("dessert:open",e=>{de(e.detail.id)}))}const ue={searchEnabled:!1,shouldSort:!1,itemSelectText:"",allowHTML:!1,position:"bottom",classNames:{containerOuter:["choices","category-select"]}};function pe(e,{onChange:t}={}){if(!e)return null;const s=new j(e,ue);return typeof t=="function"&&e.addEventListener("change",a=>t(a.target.value)),s}function me(e,t){e&&e.setChoiceByValue(t??"")}const n={page:1,limit:8,category:"",totalItems:0,loaded:0};let k=null;async function fe(){var e,t,s;if(r.desertsList){(e=r.desertsCategories)==null||e.addEventListener("click",ge),(t=r.desertsLoadMore)==null||t.addEventListener("click",ve),r.desertsList.addEventListener("click",he),(s=r.desertsListPopular)==null||s.addEventListener("click",be),N();try{const[a,o]=await Promise.all([M({page:1,limit:n.limit}),K()]);r.desertsCategories&&(r.desertsCategories.innerHTML=re(o)),r.desertsCategoriesSelect&&(r.desertsCategoriesSelect.innerHTML=se(o),k=pe(r.desertsCategoriesSelect,{onChange:H})),n.totalItems=a.totalItems,n.loaded=a.desserts.length,n.page=1,q(a.desserts,"replace"),y(),P()}catch(a){r.desertsList.innerHTML="",n.loaded=0,y(),x(a)}}}function ge(e){const t=e.target.closest(".desert-chip");if(!t)return;const s=t.dataset.id||"";H(s)}async function H(e){if(e!==n.category){n.category=e,n.page=1,n.loaded=0,ye(e),N(),r.desertsLoadMore.hidden=!0;try{const t=await M({page:1,limit:n.limit,category:e||null});n.totalItems=t.totalItems,n.loaded=t.desserts.length,q(t.desserts,"replace"),y(),P()}catch(t){r.desertsList.innerHTML="",y(),x(t)}}}function ye(e){r.desertsCategories&&r.desertsCategories.querySelectorAll(".desert-chip").forEach(t=>t.classList.toggle("is-active",t.dataset.id===e)),k&&r.desertsCategoriesSelect&&r.desertsCategoriesSelect.value!==e&&me(k,e)}async function ve(){r.desertsLoadMore.disabled=!0;const e=n.page+1;try{const t=await M({page:e,limit:n.limit,category:n.category||null});n.page=e,n.totalItems=t.totalItems,n.loaded+=t.desserts.length,q(t.desserts,"append"),P()}catch(t){x(t)}finally{r.desertsLoadMore.disabled=!1}}async function he(e){e.target.closest("[data-open]");const t=e.target.closest(".desert-card");if(!t||t.classList.contains("desert-card--skeleton"))return;const s=t.dataset.id;if(s)try{const a=await A(s);I(a),T()}catch(a){console.error("Помилка завантаження десерту:",a)}}async function be(e){const t=e.target.closest(".order-link-btn");if(!t)return;const s=t.closest("li[data-id]");if(!s)return;const a=s.dataset.id;if(a)try{const o=await A(a);I(o),T()}catch(o){console.error("Помилка відкриття модалки:",o)}}function N(){r.desertsList.hidden=!1,r.desertsEmpty&&(r.desertsEmpty.hidden=!0),r.desertsList.innerHTML=oe(n.limit)}function q(e,t){const s=te(e);t==="replace"?r.desertsList.innerHTML=s:r.desertsList.insertAdjacentHTML("beforeend",s),Le()}function Le(){r.desertsList.querySelectorAll("img.desert-card-img:not(.is-loaded)").forEach(t=>{if(t.complete){t.classList.add("is-loaded");return}t.addEventListener("load",()=>t.classList.add("is-loaded")),t.addEventListener("error",()=>t.classList.add("is-loaded"))})}function y(){if(!r.desertsEmpty)return;const e=n.loaded===0;r.desertsEmpty.hidden=!e,r.desertsList.hidden=e}function P(){if(!r.desertsLoadMore)return;const e=n.loaded<n.totalItems;r.desertsLoadMore.hidden=!e}function x(e){V.error({title:"Помилка",message:e.message||"Не вдалося завантажити десерти",position:"topRight"})}function ke(e="Ваше замовлення успішно відправлено!"){iziToast.success({title:"Success!",message:e,position:"topRight",timeout:3e3,progressBar:!0,close:!0})}function we(e="Сталася помилка. Спробуйте ще раз."){iziToast.error({title:"Error!",message:e,position:"topRight",timeout:3e3,progressBar:!0,close:!0})}const O=async e=>{var m;e.preventDefault();const t=e.currentTarget instanceof HTMLFormElement?e.currentTarget:document.querySelector(".order-form");if(!t)return;const s=t.elements.dessertId||t.querySelector('[name="dessertId"]');[t.elements.name,t.elements.phone,t.elements.comment].forEach(f=>F(f));let o=!0;t.elements.name.value.trim()||(g(t.elements.name,"Поле обов'язкове"),o=!1);const i=t.elements.phone.value.trim();if(i?/^\+?[\d\s\-\(\)]{7,12}$/.test(i)||(g(t.elements.phone,"Введіть коректний номер телефону"),o=!1):(g(t.elements.phone,"Поле обов'язкове"),o=!1),t.elements.comment.value.trim()||(g(t.elements.comment,"Поле обов'язкове"),o=!1),!o)return;const b={name:t.elements.name.value.trim(),phone:t.elements.phone.value.trim(),comment:t.elements.comment.value.trim(),dessertId:s==null?void 0:s.value.trim()};try{await X(b),ke("Ваше замовлення успішно відправлено!"),t.reset(),v()}catch(f){console.error("Order submission failed:",((m=f.response)==null?void 0:m.data)||f),we("Сталася помилка при створенні замовлення.")}};new D(".faq-list",{elementClass:"faq-list-item",triggerClass:"faq-list-item-thumb",panelClass:"faq-accordion"});document.addEventListener("DOMContentLoaded",()=>{fe(),le()});r.burgerBtn.addEventListener("click",z);r.burgerBtnClose.addEventListener("click",B);r.burgerMenuLink.forEach(e=>e.addEventListener("click",B));r.burgerMenuBtn.forEach(e=>e.addEventListener("click",B));const Ee=async()=>{try{return await Q()}catch(e){return console.error("Помилка запиту:",e),[]}},Se=()=>{new E(".popular-swiper",{modules:[S,C],slidesPerView:1,spaceBetween:20,pagination:{el:".popular-pagination",clickable:!0,dynamicBullets:!0},navigation:{nextEl:".popular-swiper-button-next",prevEl:".popular-swiper-button-prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:3,spaceBetween:24}},watchOverflow:!0})},Ce=async()=>{try{const e=await Ee();if(!e||!e.desserts||e.desserts.length===0){r.popularList.innerHTML="<p>На жаль, популярні товари зараз недоступні.</p>";return}const t=e.desserts.map(ae).join("");r.popularList.innerHTML=t,Se()}catch(e){console.error("Помилка рендерингу секції:",e),r.popularList.innerHTML="<p>Сталася помилка при завантаженні даних.</p>"}};Ce();let L=null;const Be=async()=>{try{const{feedbacks:e}=await W(),t=e.map(s=>J(s)).join("");r.feedbackList.innerHTML=t,Me()}catch(e){console.error("Помилка рендерингу секції:",e),r.popularList.innerHTML="<p>Сталася помилка при завантаженні даних.</p>"}};Be();const Me=()=>{L&&L.destroy(!0,!0),L=new E(".feedback-swiper",{modules:[S,C],direction:"horizontal",loop:!1,spaceBetween:24,pagination:{el:".feedback-swiper-control .swiper-pagination",clickable:!0,dynamicBullets:!0},navigation:{nextEl:".feedback-swiper-btn-next",prevEl:".feedback-swiper-btn-prev"},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:3}},a11y:{prevSlideMessage:"Попередній слайд",nextSlideMessage:"Наступний слайд"},keyboard:{enabled:!0,onlyInViewport:!1}})},w=window.matchMedia("(min-width: 768px)");let l=null;const R=()=>{w.matches&&!l?l=new E(".about-us-slider .swiper",{modules:[S,C],slidesPerView:2,spaceBetween:24,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".about-us-pagination",clickable:!0}}):!w.matches&&l&&(l.destroy(!0,!0),l=null)};R();w.addEventListener("change",R);r.orderForm?r.orderForm.addEventListener("submit",O):r.submitBtn&&r.submitBtn.addEventListener("click",O);
//# sourceMappingURL=index.js.map
