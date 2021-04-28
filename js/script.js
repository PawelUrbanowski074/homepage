{
    welcome = () => {
        console.log("Witaj nieznany przybyszu!");
    }

    const imageButton = document.querySelector(".js-imageButton");
    
    const imageButtonClick = () => {
        const image = document.querySelector(".js-image");
        image.classList.toggle("section__image--small");
        image.classList.toggle("section__image");
        imageButton.remove();
    }

    const interestsButton = document.querySelector(".js-interestsButton");
    const interests = document.querySelector(".js-interests");

    const toggleButton = () => {
        interests.classList.toggle("hidden");
        interestsButton.innerText === "Wyświetl" ? interestsButton.innerText = "Schowaj" : interestsButton.innerText = "Wyświetl"
    }

    const isInterestsHidden = () => {
        if (interests.classList.contains("hidden")) {
            toggleButton();
        }
    }

    const interestsButtonClick = () => {
        toggleButton();
    }

    const init = () => {
        const interestsNav = document.querySelector(".js-interestsNav");
        const instrumentsNav = document.querySelector(".js-instrumentsNav");

        imageButton.addEventListener("click", imageButtonClick);
        interestsButton.addEventListener("click", interestsButtonClick);
        interestsNav.addEventListener("click", isInterestsHidden);
        instrumentsNav.addEventListener("click", isInterestsHidden);
        welcome();
    }

    init();
}