console.log("[SRH] Hi! Thanks for using SpigotReviewHider! :)");

var toRemove = [];

chrome.storage.sync.get({
    latestReviews: true,
    reviewTab: true,
    rating: true
}, function (items) {
    if (items.reviewTab) toRemove.push("li.resourceTabReviews");
    if (items.latestReviews) toRemove.push("div.reviews");
    if (items.rating) toRemove.push("div.rating");

    toRemove.forEach(function (r) {
        console.debug("[SRH] Removing " + r);
        var elements = document.querySelectorAll(r);
        if (elements && elements.length > 0) {
            elements.forEach(function (element) {
                element.parentElement.removeChild(element);
            });
        }
    });
    console.log("Removed all those reviews!");
});

