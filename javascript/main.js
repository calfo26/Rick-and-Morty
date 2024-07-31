
const wraper = document.querySelector(".wraper");
fetch("https://rickandmortyapi.com/api/character/")
.then((Response) => Response.json())
.then(json => {
        
     json.results.forEach(element => {
          const container = document.createElement("div");
          const img = document.createElement("img");
          const texto = document.createElement("p")
          texto.textContent = `Name ${element.name} Status ${element.status}`;

          img.setAttribute("src", element.image)
          container.appendChild(img);
          container.appendChild(texto);
      /*     document.body.appendChild(container); */

          wraper.appendChild(container);
          

     });
})
