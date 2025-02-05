// Sample array of binders (you can replace this with actual dynamic data)
const binders = [
    { id: 1, name: 'Binder 1' },
    { id: 2, name: 'Binder 2' },
    { id: 3, name: 'Binder 3' }
  ];
  
  // Function to render the binder tiles
  function renderBinders() {
    const binderGrid = document.getElementById('binder-grid');
    binderGrid.innerHTML = ''; // Clear existing binder tiles
  
    binders.forEach(binder => {
      const binderTile = document.createElement('div');
      binderTile.classList.add('binder-tile');
      binderTile.textContent = binder.name;
  
      // Make the binder tile clickable to navigate to the specific binder's page
      binderTile.addEventListener('click', function() {
        window.location.href = `binder${binder.id}.html`; // Navigate to the binder's page
      });
  
      binderGrid.appendChild(binderTile);
    });
  }
  
  // Event listener for creating a new binder
  document.getElementById('new-binder-btn').addEventListener('click', function() {
    const binderName = prompt('Enter a name for the new binder:');
    if (binderName) {
      const newBinder = {
        id: binders.length + 1,
        name: binderName
      };
      binders.push(newBinder);
      renderBinders(); // Re-render the grid with the new binder
    }
  });
  
  // Initial render of binders
  renderBinders();
  