{
    welcome = () => {
        console.log("Witaj nieznany przybyszu!");
    };

    const imageButton = document.querySelector(".js-imageButton");
    const imageButtonClick = () => {
        const image = document.querySelector(".js-image");
        image.classList.toggle("section__image--small");
        image.classList.toggle("section__image");
        imageButton.remove();
    };

    const toggleButtonClass = () => {
        interests.classList.toggle("hidden");
        interestsButton.innerText === "Wyświetl" ? interestsButton.innerText = "Schowaj" : interestsButton.innerText = "Wyświetl";
    };

    const interests = document.querySelector(".js-interests");
    const interestsButton = document.querySelector(".js-interestsButton");
    interestsButton.addEventListener("click", toggleButtonClass);
    
    const isInterestsHidden = () => {
        if (interests.classList.contains("hidden")) {
            toggleButtonClass();
        }
    };

    const baindEventListeners = () => {
        const interestsNav = document.querySelector(".js-interestsNav");
        interestsNav.addEventListener("click", isInterestsHidden);

        const instrumentsNav = document.querySelector(".js-instrumentsNav");
        instrumentsNav.addEventListener("click", isInterestsHidden);

        imageButton.addEventListener("click", imageButtonClick);
    };

    
    const init = () => {
        
        baindEventListeners();
        welcome();
    };

    init();
}