window.addEventListener('DOMContentLoaded', function () {
  const prismBack = document.querySelectorAll('.right');
  const prismFront = document.querySelectorAll('.left');
  const images = [
      '../../images/boxes/KoraidonETB.jpeg',
      '../../images/boxes/MiraidonETB.jpeg',
      '../../images/boxes/PaldeaEvolvedETB.jpeg',
      '../../images/boxes/ObsidianFlamesETB.jpeg',
      '../../images/boxes/PaldeanFatesETB.jpeg',
      '../../images/boxes/ParadoxRiftRoaringMoonETB.jpeg',

  ];
  const frontImages = [
    '../../images/boxes/KoraidonETB.jpeg',
    '../../images/boxes/MiraidonETB.jpeg',
    '../../images/boxes/PaldeaEvolvedETB.jpeg',
    '../../images/boxes/ObsidianFlamesETB.jpeg',
    '../../images/boxes/PaldeanFatesETB.jpeg',
    '../../images/boxes/ParadoxRiftRoaringMoonETB.jpeg',
  ];
  prismBack.forEach((container, index) => {
    if (images[index]) {
        container.style.backgroundImage = `url(${images[index]})`;
        container.style.backgroundSize = 'cover';
        container.style.backgroundPosition = 'center';
        container.style.backgroundRepeat = 'no-repeat';
    }
  });
  prismFront.forEach((container, index) => {
    if (images[index]) {
        container.style.backgroundImage = `url(${frontImages[index]})`;
        container.style.backgroundSize = 'cover';
        container.style.backgroundPosition = 'center';
        container.style.backgroundRepeat = 'no-repeat';
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const prismWrapper = document.getElementById("prism-wrapper");
  const totalPrisms = 6; // Change this number as needed
  const screenSize = window.innerWidth;
  const prismsPerGroup = screenSize >= 768 ? 3 : 1; // 5 for desktop, 2 for mobile

  // Function to create a single prism element
  function createPrism() {
      const prismContainer = document.createElement("div");
      prismContainer.classList.add("prism-container");

      prismContainer.innerHTML = `
            <div class="prism">
                <div class="face front"></div>
                <div class="face back"></div>
                <div class="face left"></div>
                <div class="face right"></div>
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

  const prisms = document.querySelectorAll(".prism");

  const pages = [
    "../../html/boxes/etbs/koraidonETB.html", "../../html/cards/IR/bsIR/bs02.html", "../../html/cards/IR/bsIR/bs03.html", 
    "../../html/cards/IR/bsIR/bs04.html", "../../html/cards/IR/bsIR/bs05.html", "../../html/cards/IR/bsIR/bs06.html", 
    "../../html/cards/IR/bsIR/bs07.html", "../../html/cards/IR/bsIR/bs08.html", "../../html/cards/IR/bsIR/bs09.html", 
    "../../html/cards/IR/bsIR/bs10.html", "../../html/cards/IR/bsIR/bs11.html", "../../html/cards/IR/bsIR/bs12.html", 
    "../../html/cards/IR/bsIR/bs18.html", "../../html/cards/IR/bsIR/bs19.html", "../../html/cards/IR/bsIR/bs20.html"
  ];

  prisms.forEach((prism, index) => {
    let isPaused = true;

    prism.addEventListener("click", function () {
        isPaused = !isPaused; // Toggle pause state
        prism.style.animationPlayState = isPaused ? "paused" : "running";
    });

    prism.addEventListener("mouseenter", function () {
        prism.style.animationPlayState = "running"; // Resume on hover
    });

    prism.addEventListener("mouseleave", function () {
        if (isPaused) {
            prism.style.animationPlayState = "paused"; // Re-pause if previously paused
        }
    });

    prism.addEventListener("dblclick", function () {
      window.location.href = pages[index]; // Navigate to the specific page based on index
    });
  });
});
