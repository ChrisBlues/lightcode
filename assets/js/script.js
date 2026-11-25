// scroll menu
const navbar = document.querySelector('header');

window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('bg-primary-dark');
        navbar.classList.add('border-b');
        navbar.classList.add('bg-gray');
    } else {
        navbar.classList.remove('bg-primary-dark');
        navbar.classList.remove('border-b');
        navbar.classList.remove('bg-gray');
    }
}


// Mobile menu
const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const hLink = document.querySelectorAll('#menu a');
const faSolid = document.querySelector('.fa-solid');

hamburger.addEventListener("click", () => {
    menu.classList.toggle('hidden');
    faSolid.classList.toggle('fa-xmark');
})

hLink.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        faSolid.classList.toggle('fa-xmark')

    })
})

// testimonial
const userTexts = document.getElementsByClassName("user-text");
const userPics = document.getElementsByClassName("user-pic");

function showReview(event) {
    for (let userPic of userPics) {
        userPic.classList.remove("active-pic")
    }

    for (let userText of userTexts) {
        userText.classList.remove("active-text")
    }

    let i = Array.from(userPics).indexOf(event.target);

    userPics[i].classList.add('active-pic');
    userTexts[i].classList.add('active-text');
}

for (let userPic of userPics) {
    userPic.onclick = showReview;
}


// Pricing
const toggleBtn = document.getElementById("toggleBtn");

const price1 = document.getElementById("price1");
const period1 = document.getElementById("period1");
const price2 = document.getElementById("price2");
const period2 = document.getElementById("period2");
const price3 = document.getElementById("price3");
const period3 = document.getElementById("period3");


toggleBtn.addEventListener("change", () => {

    if (toggleBtn.checked) {
        price1.textContent = "200";
        period1.textContent = "/year";
        price2.textContent = "500";
        period2.textContent = "/year";
        price3.textContent = "1000";
        period3.textContent = "/year";

    } else {
        price1.textContent = "20";
        period1.textContent = "/month";
        price2.textContent = "50";
        period2.textContent = "/month";
        price3.textContent = "100";
        period3.textContent = "/month";
    }

});


