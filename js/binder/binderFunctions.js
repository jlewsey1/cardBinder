// Function to render the binder cards dynamically
function renderBinders() {
  const binderCardsContainer = document.querySelector('.binder-cards');
  binderCardsContainer.innerHTML = ''; // Clear existing binder cards

  const binders = [
      { id: 'illustrationsBinder-3x3', name: '3x3 Illustrations Binder' },
      { id: 'binder-2x2', name: '2x2 Binder' }
  ];

  binders.forEach(binder => {
      const binderCard = document.createElement('a');
      binderCard.href = `binders/${binder.id}.html`;
      binderCard.classList.add('binder-card');
      binderCard.innerHTML = `<h2>${binder.name}</h2>`;

      binderCardsContainer.appendChild(binderCard);
  });
}

// Initial render of binders
renderBinders();
