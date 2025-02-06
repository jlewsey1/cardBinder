document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', function() {
      document.querySelectorAll('.box').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
  
      setTimeout(() => {
        this.classList.remove('active');
      }, 1500);
    });
  });
  