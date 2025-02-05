let binderData = [];
let currentPageIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
    fetch("../../json/binder/illustrationsBinder-3x3Gaps.json")
        .then(response => response.json())
        .then(data => {
            binderData = data.pages; // Store the full pages array
            renderPage(currentPageIndex); // Display the first page
        })
        .catch(error => console.error("Error loading binder data:", error));

    // Add event listeners for navigation buttons
    document.getElementById("prev-page").addEventListener("click", prevPage);
    document.getElementById("next-page").addEventListener("click", nextPage);
});

function renderPage(pageIndex) {
    if (pageIndex < 0 || pageIndex >= binderData.length) return;

    const leftGrid = document.getElementById("left-grid");
    const rightGrid = document.getElementById("right-grid");

    leftGrid.innerHTML = "";
    rightGrid.innerHTML = "";

    populateBinder(leftGrid, binderData[pageIndex].leftPage);
    populateBinder(rightGrid, binderData[pageIndex].rightPage);

    // Disable buttons when at the first or last page
    document.getElementById("prev-page").disabled = pageIndex === 0;
    document.getElementById("next-page").disabled = pageIndex === binderData.length - 1;
}

function populateBinder(grid, items) {
    items.forEach(item => {
        const imageItem = document.createElement("div");
        imageItem.classList.add("image-item");

        if (item.image) {
            const img = document.createElement("img");
            img.src = item.image;
            img.alt = item.name;
            imageItem.appendChild(img);
        } else {
            const text = document.createElement("p");
            text.textContent = item.name;
            imageItem.appendChild(text);
        }

        grid.appendChild(imageItem);
    });
}

function nextPage() {
    if (currentPageIndex < binderData.length - 1) {
        currentPageIndex++;
        renderPage(currentPageIndex);
    }
}

function prevPage() {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        renderPage(currentPageIndex);
    }
}
