console.log("Witaj nieznany przybyszu!");

let image = document.querySelector(".js-image");
let imageButton = document.querySelector(".js-imageButton");

imageButton.addEventListener("click", () => {
    image.classList.toggle("section__image--small");
    image.classList.toggle("section__image");
    imageButton.remove();
});

let interestsButton = document.querySelector(".js-interestsButton");
let interests = document.querySelector(".js-interests");

interestsButton.addEventListener("click", () => {
    interests.classList.toggle("hidden");
    interestsButton.innerText === "Wyświetl" ? interestsButton.innerText = "Schowaj" :
        interestsButton.innerText = "Wyświetl"
});

let interestsNav = document.querySelector(".js-interestsNav");

interestsNav.addEventListener("click", () => {
    if (interests.classList.contains("hidden")) {
        interests.classList.toggle("hidden")
        interestsButton.innerText === "Wyświetl" ? interestsButton.innerText = "Schowaj" :
            interestsButton.innerText = "Wyświetl"
    }
});

let instrumentsNav = document.querySelector(".js-instrumentsNav");

instrumentsNav.addEventListener("click", () => {
    if (interests.classList.contains("hidden")) {
        interests.classList.toggle("hidden")
        interestsButton.innerText === "Wyświetl" ? interestsButton.innerText = "Schowaj" :
            interestsButton.innerText = "Wyświetl"
    }
});