// Toggle-button

let toggleBar = document.getElementById("toggle-bar");

let navLinks = document.querySelector(".nav-links");

let toggleMenu = () => {
    navLinks.classList.toggle("active");
}

toggleBar.addEventListener("click", toggleMenu);

// visit github

let toGithub = () =>{
    location.href = "https://github.com/ismailichuu";
}

// To Contact

let toContact = () =>{
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
}

//To linkdn

document.getElementById('linkdn').onclick = function(){
    location.href = "https://www.linkedin.com/in/mohammed-ismail-c-n-016571227/";
}

// About-menu
let tabLinks = document.getElementsByClassName("tab-links");

let tabContents = document.getElementsByClassName("tab-contents");

let openTab = (tabName) => {

    for (tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }

    for (tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

//Form link

const scriptURL = 'https://script.google.com/macros/s/AKfycbyfzvyXMxCtlFXqC_XFZ_4zrnu1fSLMT08XQE7Zhjv_pyS5d5mHJu8-aJQrXU2f6BuT/exec'
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Submitted Successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },50000);
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
});

//form validation
document.getElementById("name").addEventListener("keydown", function(event) {
    if (event.key >= "0" && event.key <= "9") {
        event.preventDefault();
    }
});

//project starbucks

document.getElementById("starbucks-demo").onclick = () => location.href = "https://ismailichuu.github.io/Starbucks-Clone/"
document.getElementById("starbucks-repo").onclick = () => location.href = "https://github.com/ismailichuu/Starbucks-Clone.git"

// ""  Tesla

document.getElementById("tesla-demo").onclick = () => location.href = "https://ismailichuu.github.io/TeslaClone/"
document.getElementById("tesla-repo").onclick = () => location.href = "https://github.com/ismailichuu/TeslaClone.git"

// "" MC-donalds

document.getElementById("mc-demo").onclick = () => location.href = "https://ismailichuu.github.io/McDonald-sClone/"
document.getElementById("mc-repo").onclick = () => location.href = "https://github.com/ismailichuu/McDonald-sClone.git"
