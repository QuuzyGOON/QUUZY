// Annoying alert
document.getElementById('alertButton').addEventListener('click', function() {
    for (let i = 0; i < 5; i++) {
        alert('Spam ok bitch ass nigga');
    }
});

// Console spammer
document.getElementById('consoleSpamButton').addEventListener('click', function() {
    for (let i = 0; i < 100; i++) {
        console.log('Spam ' + i);
    }
});

// Random background color changer
let backgroundColorInterval = setInterval(function() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}, 500); // Change every 500ms

// Text flipper
document.getElementById('textFlipperButton').addEventListener('click', function() {
    const textInput = document.getElementById('textInput');
    const text = textInput.value;
    const flippedText = text.split('').reverse().join('');
    textInput.value = flippedText;
});

// Annoying message mover
const annoyingMessage = document.getElementById('annoyingMessage');
let messageMoverInterval = setInterval(function() {
    const randomTop = Math.floor(Math.random() * (window.innerHeight - 50)) + 'px';
    const randomLeft = Math.floor(Math.random() * (window.innerWidth - 200)) + 'px';
    annoyingMessage.style.top = randomTop;
    annoyingMessage.style.left = randomLeft;
}, 50);

// Make text input shake
let textInputShakeInterval = setInterval(function() {
    const textInput = document.getElementById('textInput');
    textInput.classList.add('shake');
    setTimeout(function() {
        textInput.classList.remove('shake');
    }, 500);
}, 1000); // Shake every 1 second

// Play annoying audio
const audioElement = document.getElementById('annoyingAudio');
window.onload = function() {
    audioElement.play();
};

// Pause and Play audio controls
document.getElementById('pauseButton').addEventListener('click', function() {
    audioElement.pause();
});

document.getElementById('playButton').addEventListener('click', function() {
    audioElement.play();
});

// Play sound buttons
document.getElementById('soundButton1').addEventListener('click', function() {
    new Audio('gay-echo.mp3').play();
});

document.getElementById('soundButton2').addEventListener('click', function() {
    new Audio('meow.mp3').play();
});

document.getElementById('soundButton3').addEventListener('click', function() {
    new Audio('English.mp3').play();
    startTimer();
});

document.getElementById('soundButton4').addEventListener('click', function() {
    new Audio('sadron.mp3').play();
    showRainEffect();
});

document.getElementById('soundButton5').addEventListener('click', function() {
    new Audio('thanos.mp3').play();
});

function showRainEffect() {
    const rainContainer = document.createElement('div');
    rainContainer.classList.add('rain-container');
    document.body.appendChild(rainContainer);

    // Change background to black
    document.body.classList.add('black-background');

    // Create raindrops
    for (let i = 0; i < 100; i++) {
        const rainDrop = document.createElement('div');
        rainDrop.classList.add('rain');
        rainDrop.style.left = Math.random() * 100 + 'vw';
        rainDrop.style.animationDuration = 0.5 + Math.random() * 0.5 + 's';
        rainDrop.style.animationDelay = Math.random() * 13 + 's';
        rainContainer.appendChild(rainDrop);
    }

    // Remove rain effect and revert background after 13 seconds
    setTimeout(function() {
        document.body.removeChild(rainContainer);
        document.body.classList.remove('black-background');
    }, 13000);
}

// Timer for sound 3
let timerInterval;
let cursorMoveListener;

function startTimer() {
    const timerElement = document.getElementById('timer');
    let timeLeft = 60; // 60 seconds

    timerElement.innerText = `${timeLeft} seconds remaining`;
    timerElement.style.display = 'block';

    // Stop all intervals and remove animations
    clearInterval(backgroundColorInterval);
    clearInterval(messageMoverInterval);
    clearInterval(textInputShakeInterval);
    document.body.classList.add('stop-movement');
    annoyingMessage.classList.add('stop-movement');
    document.getElementById('textInput').classList.add('stop-movement');

    timerInterval = setInterval(function() {
        timeLeft -= 1;
        timerElement.innerText = `${timeLeft} seconds remaining`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerElement.style.display = 'none';
            document.removeEventListener('mousemove', cursorMoveListener);
            // Restart all intervals and animations
            backgroundColorInterval = setInterval(function() {
                const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                document.body.style.backgroundColor = randomColor;
            }, 500);
            messageMoverInterval = setInterval(function() {
                const randomTop = Math.floor(Math.random() * (window.innerHeight - 50)) + 'px';
                const randomLeft = Math.floor(Math.random() * (window.innerWidth - 200)) + 'px';
                annoyingMessage.style.top = randomTop;
                annoyingMessage.style.left = randomLeft;
            }, 500);
            textInputShakeInterval = setInterval(function() {
                const textInput = document.getElementById('textInput');
                textInput.classList.add('shake');
                setTimeout(function() {
                    textInput.classList.remove('shake');
                }, 500);
            }, 1000); // Shake every 1 second
            document.body.classList.remove('stop-movement');
            annoyingMessage.classList.remove('stop-movement');
            document.getElementById('textInput').classList.remove('stop-movement');
        }
    }, 1000);

    // Play sound 1 when the cursor moves during the countdown
    cursorMoveListener = function() {
        if (timerInterval) {
            new Audio('gay-echo.mp3').play();
        }
    };
    document.addEventListener('mousemove', cursorMoveListener);
}

document.getElementById('soundButton5').addEventListener('click', function() {
    new Audio('thanos.mp3').play();
    startDisappearingEffect();
});

function startDisappearingEffect() {
    const elements = document.body.children;

    // Add the disappear class to each element in the body
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add('disappear');
    }

    // Remove elements from the DOM after 33 seconds
    setTimeout(function() {
        for (let i = elements.length - 1; i >= 0; i--) {
            elements[i].remove();
        }
    }, 33000);
}
