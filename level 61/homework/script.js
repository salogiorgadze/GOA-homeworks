// Get elements
const ratingButtons = document.querySelectorAll('.num');
const submitButton = document.getElementById('submitbtn');
const rateCard = document.getElementById('rate');
const thankYouCard = document.getElementById('thank-you');
const ratingValue = document.getElementById('rating-value');

let selectedRating = 0;

ratingButtons.forEach(button => {
    button.addEventListener('click', () => {
        ratingButtons.forEach(btn => btn.classList.remove('selected'));
        
        // Add selected class to clicked button
        button.classList.add('selected');
        
        // Store the selected rating
        selectedRating = button.getAttribute('data-rating');
    });
});

// Handle submit
submitButton.addEventListener('click', () => {
    if (selectedRating > 0) {
        ratingValue.textContent = selectedRating;
        rateCard.style.display = 'none';
        thankYouCard.style.display = 'block';
    } else {
        alert('Please select a rating before submitting!');
    }
});