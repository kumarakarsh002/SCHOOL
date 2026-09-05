function Student() {
    window.open("student-panel/studentpanel.html", "_blank");
}





// Our Top student

const student = [
    {
        id: 1,
        image: "./image/home/topper.png",
        studentmarks: 95.6,
        studentname: "",
        studentclass: "",
    }
]





// Review Section

const review = [
    {
        id: 1,
        image: "https://thumbs.dreamstime.com/b/d-cartoon-happy-man-showing-thumbs-up-face-very-male-leader-carrying-backpack-confidently-both-hands-isolated-white-333857675.jpg",
        stars: 5,
        text: "There is nothing to do"
    },
    {
        id: 2,
        image: "https://thumbs.dreamstime.com/b/d-cartoon-happy-man-showing-thumbs-up-face-very-male-leader-carrying-backpack-confidently-both-hands-isolated-white-333857675.jpg",
        stars: 5,
        text: "There is nothing to do"
    },
    {
        id: 3,
        image: "https://thumbs.dreamstime.com/b/d-cartoon-happy-man-showing-thumbs-up-face-very-male-leader-carrying-backpack-confidently-both-hands-isolated-white-333857675.jpg",
        stars: 5,
        text: "There is nothing to do"
    },
    {
        id: 4,
        image: "https://thumbs.dreamstime.com/b/d-cartoon-happy-man-showing-thumbs-up-face-very-male-leader-carrying-backpack-confidently-both-hands-isolated-white-333857675.jpg",
        stars: 5,
        text: "There is nothing to do"
    },
    {
        id: 5,
        image: "https://thumbs.dreamstime.com/b/d-cartoon-happy-man-showing-thumbs-up-face-very-male-leader-carrying-backpack-confidently-both-hands-isolated-white-333857675.jpg",
        stars: 5,
        text: "There is nothing to do"
    },
    {
        id: 6,
        image: "https://thumbs.dreamstime.com/b/d-cartoon-happy-man-showing-thumbs-up-face-very-male-leader-carrying-backpack-confidently-both-hands-isolated-white-333857675.jpg",
        stars: 5,
        text: "There is nothing to do"
    },
    {
        id: 7,
        image: "https://thumbs.dreamstime.com/b/d-cartoon-happy-man-showing-thumbs-up-face-very-male-leader-carrying-backpack-confidently-both-hands-isolated-white-333857675.jpg",
        stars: 5,
        text: "There is nothing to do"
    },
    {
        id: 8,
        image: "https://thumbs.dreamstime.com/b/d-cartoon-happy-man-showing-thumbs-up-face-very-male-leader-carrying-backpack-confidently-both-hands-isolated-white-333857675.jpg",
        stars: 5,
        text: "There is nothing to do"
    },
    {
        id: 9,
        image: "https://thumbs.dreamstime.com/b/d-cartoon-happy-man-showing-thumbs-up-face-very-male-leader-carrying-backpack-confidently-both-hands-isolated-white-333857675.jpg",
        stars: 5,
        text: "There is nothing to do"
    },

]

const content = document.getElementById('review-content');

for (let i = 0; i < review.length; i++) {
    
    content.innerHTML += `
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


