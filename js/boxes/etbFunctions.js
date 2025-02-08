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
  const displayPrisms = document.querySelectorAll('.display-prism');
  let frontRight = 267;
  let rightRight = 10;
  for (let i = 1; i < displayPrisms.length; i++){
      frontRight -= 10;
      rightRight -= 10;
      displayFront = displayPrisms[i].querySelector('.display-front');
      displayRight = displayPrisms[i].querySelector('.display-right');
      displayFront.style.right = frontRight + "px";
      displayRight.style.right = rightRight + "px";
  }

});
