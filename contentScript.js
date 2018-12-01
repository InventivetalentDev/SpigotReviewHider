console.log("[SRH] Hi! Thanks for using SpigotReviewHider! :)");

var toRemove = [
    "li.resourceTabReviews",
    "div.reviews",
    "div.rating"
];

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