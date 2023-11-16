const gameContainer = document.querySelector('.container'),
    userResult = document.querySelector('.user_result img'),
    cpuResult = document.querySelector('.cpu_result img'),
    result = document.querySelector('.result'),
    optionImages = document.querySelectorAll('.picker div');

optionImages.forEach((image, index) => {
    image.addEventListener('click', (e) => {
        image.classList.add('active');
        userResult.src = cpuResult.src = "/images/rock.svg";
        result.innerHTML = 'Waiting...';
        optionImages.forEach((image2, index2) => {
            index !== index2 && image2.classList.remove('active');
        });

        gameContainer.classList.add('start');
        let time = setTimeout(() => {
            gameContainer.classList.remove('start');
            clearTimeout(time);
            let imageSrc = e.target.closest("div").querySelector("img").src;
            userResult.src = imageSrc;
            let random = Math.floor(Math.random() * 3);
            cpuResult.src = optionImages[random].querySelector("img").src;
            let userChoice = e.target.closest("div").getAttribute("data-choice");
            let cpuChoice = optionImages[random].getAttribute("data-choice");
            result.textContent = determineWinner(userChoice, cpuChoice);
        }, 1500);
    });
});

function determineWinner(userChoice, cpuChoice) {
    if (userChoice === cpuChoice) {
        return 'Draw';
    } else if ((userChoice === "rock" && cpuChoice === "scissors") ||
        (userChoice === "paper" && cpuChoice === "rock") ||
        (userChoice === "scissors" && cpuChoice === "paper")) {
        return 'You Win!';
    } else {
        return 'CPU Wins!'
    }
}