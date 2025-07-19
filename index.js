import{a as l,S as c,i as n}from"./assets/vendor-Dy2ZTtfi.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const d="51351460-d09ee3e74dd8fd887a0b133cf",f="https://pixabay.com/api/";async function u(r){const e={key:d,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await l.get(f,{params:e})).data}catch{throw new Error("Failed to fetch images")}}const p=new c(".gallery a",{captionsData:"alt",captionDelay:250});function m(r){return r.map(e=>`
    <li class="gallery-item">
        <a class="gallery-item-photo" href="${e.largeImageURL}">
        <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
        </a>
        <div class="info">
            <div class="info-part">
                <h3 class="info-description">Likes</h3>
                <p class="info-number">${e.likes}</p>
            </div>
            <div class="info-part">
                <h3 class="info-description">Views</h3>
                <p class="info-number">${e.views}</p>
        </div>
            <div class="info-part">
                <h3 class="info-description">Comments</h3>
                <p class="info-number">${e.comments}</p>
        </div>
            <div class="info-part">
                <h3 class="info-description">Downloads</h3>
                <p class="info-number">${e.downloads}</p>
        </div>
        </div>
    </li>
    `).join("")}function h(r){const e=document.querySelector(".gallery");e.innerHTML=m(r),p.refresh()}function y(){const r=document.querySelector(".gallery");r.innerHTML=""}function g(){document.getElementById("loader").classList.remove("hidden")}function v(){document.getElementById("loader").classList.add("hidden")}const L=document.querySelector(".form");document.querySelector(".gallery");L.addEventListener("submit",async r=>{r.preventDefault();const e=r.target.elements["search-text"].value.trim();if(!e){n.error({title:"Error",message:"Please enter a search term",position:"topRight"});return}y(),g();try{const s=await u(e);if(s.hits.length===0){n.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(s.hits)}catch{n.error({title:"Error",message:"Something went wrong while fetching data.",position:"topRight"})}finally{v()}});
//# sourceMappingURL=index.js.map
