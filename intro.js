const startButton = document.getElementById('startButton');
const restartButton = document.getElementById('restartButton');

const loadingAnimation = document.getElementById('loadingAnimation');
const taskDisplay = document.getElementById('taskDisplay');
const tasks = [
    "Impersonate a famous politician or historical figure.",
    "Showcase a DIY craft or artwork you've made.",
    "Perform a short improvisational skit with a partner.",
    "Present a 60-second commercial for a random object.",
    "Share a heartwarming or inspiring personal story.",
    "Engage the audience in a quick interactive game or quiz.",
    "Teach the audience something new in five minutes.",
    "Perform a dramatic monologue from a play or literature.",
    "Describe a fictional superpower you wish you had and demonstrate its use.",
    "Recreate a famous sports moment or victory celebration.",
    "Share a favorite recipe and explain its significance to you.",
    "Perform a short stand-up comedy routine without using words (mime).",
    "Share a surprising fact about yourself that nobody would guess.",
    // Your tasks array here...
];

let animation;

function hideTaskDisplay() {
    taskDisplay.style.display = 'none';
}

function performTask() {
    if (animation) {
        animation.destroy();
    }

    loadingAnimation.style.display = 'block';
    animation = lottie.loadAnimation({
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'loadinganii.json',
    });

    hideTaskDisplay(); // Hide the previous task display

    setTimeout(() => {
        loadingAnimation.style.display = 'none';
        const randomIndex = Math.floor(Math.random() * tasks.length);
        const randomTask = tasks[randomIndex];
        animateTaskDisplay(randomTask); // Display the random task with animation
    }, 2000);
}

function animateTaskDisplay(task) {
    let currentWord = '';
    let currentIndex = 0;
    taskDisplay.style.display = 'block';

    const animationInterval = setInterval(() => {
        currentWord += task[currentIndex];
        taskDisplay.textContent = currentWord;

        currentIndex++;

        if (currentIndex >= task.length) {
            clearInterval(animationInterval);
        }
    }, 40); // Change the interval speed for desired animation speed
}

startButton.addEventListener('click', performTask);

restartButton.addEventListener('click', () => {
    hideTaskDisplay();
});

document.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) { // Enter key
        performTask();
    }
});
