// This is the working code for the description and reviews tab

function descriptionTab() {
    const descriptionContainer = document.getElementById('description-container');
    const reviewsContainer = document.getElementById('reviews-container');
    const reviewsTab = document.getElementById('reviews-tab');
    const descriptionTab = document.getElementById('description-tab');

    descriptionTab.classList.add('active');
    reviewsTab.classList.remove('active');
    descriptionContainer.classList.add('active');
    reviewsContainer.classList.remove('active');
};

function reviewsTab() {
    const descriptionContainer = document.getElementById('description-container');
    const reviewsContainer = document.getElementById('reviews-container');
    const reviewsTab = document.getElementById('reviews-tab');
    const descriptionTab = document.getElementById('description-tab');


    reviewsTab.classList.add('active');
    descriptionTab.classList.remove('active');
    reviewsContainer.classList.add('active');
    descriptionContainer.classList.remove('active');
}