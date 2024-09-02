document.getElementById('tossButton').addEventListener('click', tossCoin);

function tossCoin() {
    const coinImage = document.getElementById('coinImage');
    const tossSound = document.getElementById('tossSound');
    
    // Reset and play the sound
    tossSound.currentTime = 0; // Rewind to start
    tossSound.loop = true; // Enable looping
    tossSound.play();
    
    coinImage.classList.add('spin');

    setTimeout(() => {
        const outcome = Math.random() < 0.5 ? 'head.png' : 'tail.png';
        coinImage.src = outcome;
        coinImage.classList.remove('spin');
        tossSound.loop = false; // Disable looping
        tossSound.pause(); // Stop the sound
        tossSound.currentTime = 0; // Rewind to start
    }, 5000); // Duration should match the spinning animation
}
