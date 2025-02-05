let binderData = [];
let currentPageIndex = 0;
let isMobile = window.innerWidth <= 768; // Check if it's mobile
let isShowingRightPage = false; // Track if we are showing the right page on mobile

document.addEventListener("DOMContentLoaded", function () {
    fetch("../../json/binder/illustrationsBinder-3x3NoGaps.json")
        .then(response => response.json())
        .then(data => {
            binderData = data.pages; // Store the full pages array
            renderPage(currentPageIndex); // Display the first page
        })
        .catch(error => console.error("Error loading binder data:", error));

    // Listen for window resize to check if we are on mobile
    window.addEventListener('resize', () => {
        isMobile = window.innerWidth <= 768;
        renderPage(currentPageIndex); // Re-render the current page when resizing
    });

    // Add event listeners for tapping on left and right parts of the screen
    document.getElementById("left-side").addEventListener("click", prevPage);
    document.getElementById("right-side").addEventListener("click", nextPage);
});

function renderPage(pageIndex) {
    if (pageIndex < 0 || pageIndex >= binderData.length) return;

    const leftGrid = document.getElementById("left-grid");
    const rightGrid = document.getElementById("right-grid");

    leftGrid.innerHTML = "";
    rightGrid.innerHTML = "";

    // If the device is mobile, alternate between left and right pages
    if (isMobile) {
        if (isShowingRightPage) {
            populateBinder(rightGrid, binderData[pageIndex].rightPage);
            document.querySelector('.binder-page.right').style.display = 'block';
            document.querySelector('.binder-page.left').style.display = 'none';
        } else {
            populateBinder(leftGrid, binderData[pageIndex].leftPage);
            document.querySelector('.binder-page.right').style.display = 'none';
            document.querySelector('.binder-page.left').style.display = 'block';
        }
    } else {
        // Desktop: Show left page first, then right page
        populateBinder(leftGrid, binderData[pageIndex].leftPage);
        populateBinder(rightGrid, binderData[pageIndex].rightPage);
    }

    // Disable interaction when at the first or last page (depending on mobile or desktop)
    if (isMobile) {
        if (isShowingRightPage && pageIndex == binderData.length - 1){
            document.getElementById("right-side").style.pointerEvents = 'none';
        } else {
            document.getElementById("right-side").style.pointerEvents = 'auto';
        }
        if (!isShowingRightPage && pageIndex == 0){
            document.getElementById("left-side").style.pointerEvents = 'none';
        } else {
            document.getElementById("left-side").style.pointerEvents = 'auto';
        }
    } else {
        document.getElementById("left-side").style.pointerEvents = pageIndex === 0 ? 'none' : 'auto';
        document.getElementById("right-side").style.pointerEvents = pageIndex === binderData.length - 1 ? 'none' : 'auto';
    }
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
    if (isMobile) { // if on mobile
        if (isShowingRightPage) { // if showing right page show left
            currentPageIndex++;
            isShowingRightPage = false;
        } else {
            isShowingRightPage = true; // Show right page
        }
    } else if (!isMobile) {
        if (currentPageIndex < binderData.length - 1) {
            currentPageIndex++;
        }
    }

    renderPage(currentPageIndex);
}

function prevPage() {
    if (isMobile) {
        if (isShowingRightPage) {
            isShowingRightPage = false;
        } else if (currentPageIndex > 0){
            isShowingRightPage = true;
            currentPageIndex--;
        }
    }
    else {
        if (currentPageIndex > 0) {
            currentPageIndex--;
        }
    }
    renderPage(currentPageIndex);
}
