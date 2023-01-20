const updateBackpack = (update) => {
    let main = document.querySelector("main");
    main.innerHTML = markup(backpack);
    console.info(update);
};

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


export default backpack;