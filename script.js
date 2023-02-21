const arrows = document.querySelectorAll(".arrows")
const movieLists = document.querySelectorAll(".movie-list")


arrows.forEach((arrow, i) => {
    const widtRatio = Math.floor(window.innerWidth / 300)
    let clickCounter = 0
    const imageItem = movieLists[i].querySelectorAll("img").length;
    arrow.addEventListener("click", function () {
        clickCounter++;
        if (imageItem - (4 + clickCounter) + (4 - widtRatio) >= 0) {
            movieLists[i].style.transform = `translateX(${movieLists[i].
                computedStyleMap().get("transform")[0].x.value - 300 }px)`;
        } else {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });

});





/*    night mode  */

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.navbar,.movie-list-title,.sidebar,sidebar i,.toggle,.toggle-ball,.movie-list-filter select");

ball.addEventListener("click", function(){
    items.forEach((items) => items.classList.toggle("active"));
});


