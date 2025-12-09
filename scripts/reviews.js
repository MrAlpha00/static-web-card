// Initialize Firebase (with guard to prevent duplicate initialization)
if (!firebase.apps || !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

// Star Rating Functionality
const starRating = document.getElementById('starRating');
const ratingInput = document.getElementById('ratingValue');
let currentRating = 5;

if (starRating) {
    const stars = starRating.querySelectorAll('.star-input');
    
    // Set initial state (5 stars)
    updateStars(5);
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            currentRating = parseInt(this.dataset.value);
            ratingInput.value = currentRating;
            updateStars(currentRating);
        });
        
        star.addEventListener('mouseover', function() {
            const hoverValue = parseInt(this.dataset.value);
            highlightStars(hoverValue);
        });
        
        star.addEventListener('mouseout', function() {
            updateStars(currentRating);
        });
    });
}

function updateStars(rating) {
    const stars = starRating.querySelectorAll('.star-input');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.style.color = 'var(--brand-orange)';
        } else {
            star.style.color = 'var(--muted)';
        }
    });
}

function highlightStars(rating) {
    const stars = starRating.querySelectorAll('.star-input');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.style.color = 'var(--brand-orange)';
        } else {
            star.style.color = 'var(--muted)';
        }
    });
}

// Form Submission
const reviewForm = document.getElementById('reviewForm');
const formMessage = document.getElementById('formMessage');

if (reviewForm) {
    reviewForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Submitting...';
        submitBtn.disabled = true;
        
        const reviewData = {
            name: document.getElementById('reviewerName').value.trim(),
            location: document.getElementById('reviewLocation').value.trim() || 'Not specified',
            service: document.getElementById('reviewService').value || 'General',
            rating: parseInt(ratingInput.value),
            review: document.getElementById('reviewText').value.trim(),
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            createdAt: new Date().toISOString()
        };
        
        try {
            await db.collection('reviews').add(reviewData);
            
            formMessage.style.display = 'block';
            formMessage.style.color = '#25D366';
            formMessage.innerHTML = '<strong>Thank you!</strong> Your review has been submitted successfully.';
            
            reviewForm.reset();
            currentRating = 5;
            ratingInput.value = 5;
            updateStars(5);
            
            // Reload reviews to show the new one
            loadReviews();
            
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
            
        } catch (error) {
            console.error('Error submitting review:', error);
            formMessage.style.display = 'block';
            formMessage.style.color = 'var(--brand-red)';
            formMessage.innerHTML = 'Sorry, there was an error submitting your review. Please try again.';
        }
        
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
}

// Load Reviews from Firebase
async function loadReviews() {
    const reviewsContainer = document.getElementById('firebaseReviews');
    if (!reviewsContainer) return;
    
    try {
        const snapshot = await db.collection('reviews')
            .orderBy('createdAt', 'desc')
            .limit(10)
            .get();
        
        if (snapshot.empty) {
            reviewsContainer.innerHTML = '';
            return;
        }
        
        let html = '<div class="grid grid-cols-3">';
        
        snapshot.forEach(doc => {
            const data = doc.data();
            const stars = '★'.repeat(data.rating) + '☆'.repeat(5 - data.rating);
            const isNew = isRecentReview(data.createdAt);
            
            html += `
                <div class="card firebase-review-card scale-in visible">
                    <div class="review-header">
                        <div class="stars">
                            ${stars.split('').map(s => `<span class="star">${s}</span>`).join('')}
                        </div>
                        ${isNew ? '<span class="new-badge">NEW</span>' : ''}
                    </div>
                    <h3>${escapeHtml(data.name)}</h3>
                    <p style="font-size: 0.875rem; color: var(--muted-foreground); margin-bottom: 1rem;">
                        ${escapeHtml(data.location)} • ${escapeHtml(data.service)}
                    </p>
                    <p style="font-style: italic; color: var(--muted-foreground);">
                        "${escapeHtml(data.review)}"
                    </p>
                </div>
            `;
        });
        
        html += '</div>';
        reviewsContainer.innerHTML = html;
        
    } catch (error) {
        console.error('Error loading reviews:', error);
        reviewsContainer.innerHTML = '';
    }
}

function isRecentReview(createdAt) {
    if (!createdAt) return false;
    const reviewDate = new Date(createdAt);
    const now = new Date();
    const diffDays = (now - reviewDate) / (1000 * 60 * 60 * 24);
    return diffDays <= 7;
}

function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Load reviews on page load
document.addEventListener('DOMContentLoaded', loadReviews);
