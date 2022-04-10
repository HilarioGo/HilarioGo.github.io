function makeSelection() {
    var card = document.getElementById("card");
    var ratings = document.getElementsByName("rating");
    var ratingValue = document.getElementById("selection-value");

    for(i = 0; i < ratings.length; ++i) {
        var rating = ratings[i];
        if (rating.checked) {
            ratingValue.innerHTML = rating.value;

            card.classList.add("card__active");
        }
    }
}