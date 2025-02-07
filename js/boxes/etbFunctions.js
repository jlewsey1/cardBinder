window.addEventListener('DOMContentLoaded', function () {
  const prismFront = document.querySelectorAll('.left');
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
  /*prismFront.forEach((container, index) => {
      if (images[index]) {
          container.style.backgroundImage = `url(${images[index]})`;
          container.style.backgroundSize = 'cover';
          container.style.backgroundPosition = 'center';
          container.style.backgroundRepeat = 'no-repeat';
      }
  });*/
  prismBack.forEach((container, index) => {
    if (images[index]) {
        container.style.backgroundImage = `url(${images[index]})`;
        container.style.backgroundSize = 'cover';
        container.style.backgroundPosition = 'center';
        container.style.backgroundRepeat = 'no-repeat';
    }
  });
});
