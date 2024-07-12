document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        jump();
    }
});

function jump() {
    const mario = document.getElementById('mario');
    if (!mario.classList.contains('jump')) {
        mario.classList.add('jump');
        setTimeout(function() {
            mario.classList.remove('jump');
        }, 300);
    }
}

function checkCollision() {
    const mario = document.getElementById('mario');
    const obstacle = document.getElementById('obstacle');

    const marioRect = mario.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();

    if (marioRect.right > obstacleRect.left &&
        marioRect.left < obstacleRect.right &&
        marioRect.bottom > obstacleRect.top) {
        alert('Game Over');
        location.reload();
    }
}

setInterval(checkCollision, 10);
