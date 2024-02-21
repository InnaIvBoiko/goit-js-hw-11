import{i as d,S as u}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const f="/goit-js-hw-11/assets/error-abf165dd.svg",c=document.querySelector(".keywords"),m="42438077-634a4b32cfcaa96ebaa8c4719",p="https://pixabay.com/api/";async function h(){const r=encodeURIComponent(c.value),s=`${p}?key=${m}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`;return await(await fetch(s)).json()}const y=()=>d.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",messageSize:"16",backgroundColor:"#EF4040",iconUrl:f,position:"topRight",close:!0,layout:2,timeout:2e3}),l=document.querySelector(".gallery");function g(r){const s=r.map(e=>`<li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
                <img
                    class="gallery-image"
                    src="${e.previewURL}" 
                    alt="${e.tags}"
                />
            </a>
            <div class="gallery-info">
                <div class="column">
                    <h2>likes</h2>
                    <p>${e.likes}</p>
                </div>
                <div class="column">
                    <h2>views</h2>
                    <p>${e.views}</p>
                </div>
                 <div class="column">
                    <h2>comments</h2>
                    <p>${e.comments}</p>
                </div>
                <div class="column">
                    <h2>downloads</h2>
                    <p>${e.downloads}</p>
                </div>
            </div>
        </li>`).join("");l.insertAdjacentHTML("beforeend",s),new u(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()}const a=document.querySelector(".form-search");a.addEventListener("submit",r=>{r.preventDefault();const s=document.querySelector(".loading");l.innerHTML="",c.value&&(s.classList.remove("visually-hidden"),setTimeout(()=>{s.classList.add("visually-hidden")},1e3),setTimeout(()=>{h().then(e=>{if(parseInt(e.totalHits)>0)return e.hits}).then(e=>{g(e)}).catch(()=>{y()}).finally(()=>{a.reset()})},1e3))});
//# sourceMappingURL=commonHelpers.js.map
