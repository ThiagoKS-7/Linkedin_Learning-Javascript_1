/**
 * Create a Backpack object, populate some HTML to display its properties.
 */

const backpack =  {
    name: "Mochila comum",
    volume: 30,
    color: "cinza",
    pocketNum: 15,
    strapLength: {
      left: 26,
      right: 26,
    },
    lidOpen: false,
    toggleLid: function () {
      this.lidOpen = !this.lidOpen;
      updateBackpack(`Lid status changed.`);
    },
    newStrapLength: function (lengthLeft, lengthRight) {
      this.strapLength.left = lengthLeft;
      this.strapLength.right = lengthRight;
      updateBackpack(`Strap lengths updated.`);
    },
  };


const template = (obj) => {
    return `
      <div style="display: flex; justify-content:center; align-items: center; height: 100vh;">
        <div class="card" style="width: 18rem;">
          <img src="https://img.elo7.com.br/product/600x380/378ACA7/mochila-origem-marcos-mochila-cinza.jpg" class="card-img-top" alt="backpack-img" style="height: 270px">
          <div class="card-body">
            <h5 class="card-title">${obj.name}</h5>
            <ul>
              <li class="card-text">Volume: ${obj.volume} L</li>
              <li class="card-text">Cor: ${obj.color}</li>
              <li class="card-text">Bolsos ${obj.pocketNum}</li>
              <li class="card-text">Alças: Esq: ${obj.strapLength.left}, Dir: ${obj.strapLength.right}</li>
              <li class="card-text">Tampa superior: ${obj.lidOpen ? "Aberta" : "Fechada"}</li>
            </ul>
        </div>
      </div>
      </div>
    `;
};

const updateBackpack = (update) => {
    let main = document.querySelector("main");
    main.innerHTML = markup(backpack);
    console.info(update);
};

// criando elemento pra colocar o JSON da mochila
  const main = document.createElement("main");
  main.innerHTML = template(backpack);
  document.body.appendChild(main);