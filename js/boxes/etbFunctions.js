window.addEventListener('DOMContentLoaded', function () {
  const prismBack = document.querySelectorAll('.right');
  const images = [
      '../../images/cards/IR/bsIR/BS01.jpeg',
      '../../images/cards/IR/bsIR/BS02.jpeg',
      '../../images/cards/IR/bsIR/BS03.jpeg',
      '../../images/cards/IR/bsIR/BS04.jpeg',
      '../../images/cards/IR/bsIR/BS05.jpeg',
      '../../images/cards/IR/bsIR/BS06.jpeg',
      '../../images/cards/IR/bsIR/BS07.jpeg',
      '../../images/cards/IR/bsIR/BS08.jpeg',
      '../../images/cards/IR/bsIR/BS09.jpeg',
      '../../images/cards/IR/bsIR/BS10.jpeg',
      '../../images/cards/IR/bsIR/BS11.jpeg',
      '../../images/cards/IR/bsIR/BS12.jpeg',
      '../../images/cards/IR/bsIR/BS18.jpeg',
      '../../images/cards/IR/bsIR/BS19.jpeg',
      '../../images/cards/IR/bsIR/BS20.jpeg',
  ];
  prismBack.forEach((container, index) => {
    if (images[index]) {
        container.style.backgroundImage = `url(${images[index]})`;
        container.style.backgroundSize = 'cover';
        container.style.backgroundPosition = 'center';
        container.style.backgroundRepeat = 'no-repeat';
    }
  });
  /*const displayPrisms = document.querySelectorAll('.display-prism');
  let frontRight = 267;
  let rightRight = 10;
  for (let i = 1; i < displayPrisms.length; i++){
      frontRight -= 10;
      rightRight -= 10;
      displayFront = displayPrisms[i].querySelector('.display-front');
      displayRight = displayPrisms[i].querySelector('.display-right');
      displayFront.style.right = frontRight + "px";
      displayRight.style.right = rightRight + "px";
  }*/

});


document.addEventListener("DOMContentLoaded", function () {
  const prismWrapper = document.getElementById("prism-wrapper");
  const totalPrisms = 15; // Change this number as needed
  const screenSize = window.innerWidth;
  const prismsPerGroup = screenSize >= 768 ? 5 : 2; // 5 for desktop, 2 for mobile

  // Function to create a single prism element
  function createPrism() {
      const prismContainer = document.createElement("div");
      prismContainer.classList.add("prism-container");

      prismContainer.innerHTML = `
          <div class="scene">
              <div class="prism">
                  <div class="face front"></div>
                  <div class="face back"></div>
                  <div class="face left"></div>
                  <div class="face right"></div>
                  <div class="face top"></div>
                  <div class="face bottom"></div>
              </div>
          </div>
      `;
      return prismContainer;
  }

  // Create and group prisms dynamically
  for (let i = 0; i < totalPrisms; i += prismsPerGroup) {
      const displayPrismContainer = document.createElement("div");
      displayPrismContainer.classList.add("display-prism-container");

      const displayPrism = document.createElement("div");
      displayPrism.classList.add("display-prism");

      displayPrism.innerHTML = `
          <div class="display-face display-front"></div>
          <div class="display-face display-back"></div>
          <div class="display-face display-left"></div>
          <div class="display-face display-right"></div>
          <div class="display-face display-top"></div>
          <div class="display-face display-bottom"></div>
          <div class="prism-grid"></div>
      `;

      const prismGrid = displayPrism.querySelector(".prism-grid");

      // Add the correct number of prisms to this display-prism container
      for (let j = 0; j < prismsPerGroup && i + j < totalPrisms; j++) {
          prismGrid.appendChild(createPrism());
      }

      displayPrismContainer.appendChild(displayPrism);
      const spacer2 = document.createElement("div");
      spacer2.classList.add("spacer2");
      prismWrapper.appendChild(spacer2);
      prismWrapper.appendChild(displayPrismContainer);
  }
});