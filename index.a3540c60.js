const e=document.querySelector(".breed-select"),t=document.querySelector(".cat-info"),n=document.querySelector(".loader");n.style.display="none",fetch("https://api.thecatapi.com/v1/breeds?api-key=live_gQ9d6291XE7YOO6cVkJSOajXrnsBkKtbEtDhuAYPvUIQwhBSvevy0efyFS2cix4J").then((e=>(e.ok||notifyFailure(" Oops! Something went wrong! Try reloading the page!"),e.json()))).then((t=>{const n=document.createElement("option");n.value="",n.textContent="select a cat",e.appendChild(n),t.forEach((t=>{const n=document.createElement("option");n.value=t.id,n.textContent=t.name,n.placeholder="Select breed",e.appendChild(n)}))})).catch((e=>{console.log(e)})),e.addEventListener("change",(function(){n.classList.remove("invisible");const o=e.options[e.selectedIndex].value;e.options[e.selectedIndex].text;var c;(c=o,fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${c}&api_key=live_gQ9d6291XE7YOO6cVkJSOajXrnsBkKtbEtDhuAYPvUIQwhBSvevy0efyFS2cix4J`).then((e=>(e.ok||notifyFailure("Oops! Something went wrong! Try reloading the page!"),e.json()))).catch((e=>console.log(e)))).then((function(e){n.classList.add("invisible"),function(e,o){const{url:c,breeds:i}=e[0],a=i.reduce(((e,t)=>`<img class="breed-image" alt="${t.name}" src="${c}" width="500px">\n            <div class="breed-container">\n              <h2 class="breed-name">${t.name}</h2>\n              <p class="breed-temperament">${t.temperament}</p>\n              <p class="breed-description">${t.description}</p>\n            </div>`),"");t.innerHTML=a,n.style.display="none"}(e)})).catch((function(){n.classList.add("invisible"),Notiflix.Notify.failure("Oops! An error occurred! Try reloading the page!")}))}));
//# sourceMappingURL=index.a3540c60.js.map