// Saves options to chrome.storage
function save_options() {
    var latestReviews = document.getElementById('latestReviews').checked;
    var reviewTab = document.getElementById('reviewTab').checked;
    var rating = document.getElementById('rating').checked;
    chrome.storage.sync.set({
        latestReviews: latestReviews,
        reviewTab: reviewTab,
        rating: rating
    }, function () {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    chrome.storage.sync.get({
        latestReviews: true,
        reviewTab: true,
        rating: true
    }, function (items) {
        document.getElementById('latestReviews').checked = items.latestReviews;
        document.getElementById('reviewTab').checked = items.reviewTab;
        document.getElementById('rating').checked = items.rating;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);