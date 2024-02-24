var bodyData = document.getElementById("body");

window.onload = async function fetchBody() {
    try {
        let response = await fetch('body.html');
        if (!response.ok) {
            throw new Error(`HTTP error! status ${response.status}`);
        }
        let data = await response.text();
        bodyData.innerHTML = data;
        fetchCroatian();
        }
    catch (error) {
        console.log("Fetch error: " + error.message);
    }
}

ScrollReveal().reveal('.about');
ScrollReveal().reveal('.portfolio');
ScrollReveal().reveal('.cybershop');
ScrollReveal().reveal('.interiart');
ScrollReveal().reveal('.todolist');
ScrollReveal().reveal('.weatherapp');
ScrollReveal().reveal('.kontakt');

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        document.querySelector(".navbar").style.backgroundColor = "#809d86";
    } else {
        document.querySelector(".navbar").style.backgroundColor = "transparent";
    }
}

new WOW().init();