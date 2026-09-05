function Student() {
    window.open("student-panel/studentpanel.html", "_blank");
}





// Our Top student







// Review Section

const review = [
    {
        id: 1,
        image: "./image/home/review.png",
        stars: 5,
        text: "There is nothing to do"
    },
    {
        id: 2,
        image: "./image/home/review.png",
        stars: 5,
        text: "There is nothing to do"
    },
    {
        id: 3,
        image: "./image/home/review.png",
        stars: 5,
        text: "There is nothing to do"
    },
    {
        id: 4,
        image: "./image/home/review.png",
        stars: 5,
        text: "There is nothing to do"
    },
    {
        id: 5,
        image: "./image/home/review.png",
        stars: 5,
        text: "There is nothing to do"
    },
    {
        id: 6,
        image: "./image/home/review.png",
        stars: 5,
        text: "There is nothing to do"
    },
    {
        id: 7,
        image: "./image/home/review.png",
        stars: 5,
        text: "There is nothing to do"
    },
    {
        id: 8,
        image: "./image/home/review.png",
        stars: 5,
        text: "There is nothing to do"
    },
    {
        id: 9,
        image: "./image/home/review.png",
        stars: 5,
        text: "There is nothing to do"
    },

]

const content = document.getElementById('review-content');
let reviewhtml = "";

for (let i = 0; i < review.length; i++) {
    
    reviewhtml += `
        <div class="main-review-div-reviews">
                <div class="main-review-div-reviews-image">
                    <img src="${review[i].image}" alt="Review-Image" />
                </div>
                <p>${review[i].stars}</p>
                <div class="main-review-div-reviews-review">
                <p>${review[i].text}</p>
                </div>
            </div>
    `;
}

content.innerHTML = reviewhtml;

