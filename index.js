import{a as l,S as c,i}from"./assets/vendor-Dy2ZTtfi.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const d="51351460-d09ee3e74dd8fd887a0b133cf",u="https://pixabay.com/api/";async function f(o){const e={key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await l.get(u,{params:e})).data}catch{throw new Error("Failed to fetch images")}}const p=new c(".gallery a",{captionsData:"alt",captionDelay:250});function m(o){return o.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${e.likes}</p>
          <p><b>Views:</b> ${e.views}</p>
          <p><b>Comments:</b> ${e.comments}</p>
          <p><b>Downloads:</b> ${e.downloads}</p>
        </div>
      </li>
    `).join("")}function h(o){const e=document.querySelector(".gallery");e.innerHTML=m(o),p.refresh()}function y(){document.getElementById("loader").classList.remove("hidden")}function g(){document.getElementById("loader").classList.add("hidden")}const b=document.querySelector(".form"),L=document.querySelector(".gallery");b.addEventListener("submit",async o=>{o.preventDefault();const e=o.target.elements["search-text"].value.trim();if(!e){i.error({title:"Error",message:"Please enter a search term",position:"topRight"});return}L.innerHTML="",y();try{const n=await f(e);if(n.hits.length===0){i.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(n.hits)}catch{i.error({title:"Error",message:"Something went wrong while fetching data.",position:"topRight"})}finally{g()}});
//# sourceMappingURL=index.js.map
