const card = document.querySelector('.card');

const flipBtns = document.querySelectorAll('.flip-btn');
const cursor = document.querySelector('.cursor');
const box = document.querySelector('.box');


document.addEventListener('mousemove', e => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

document.addEventListener('mouseenter', () => {
    cursor.classList.add('expand');
});

document.addEventListener('mouseleave', () => {
    cursor.classList.remove('expand');
});

box.addEventListener('mouseenter', () => {
    cursor.classList.add('expand');
});

box.addEventListener('mouseleave', () => {
    cursor.classList.remove('expand');
});


flipBtns.forEach(btn => {
    
    btn.addEventListener('click', () => {
        if (btn.dataset.flip === 'flip-vertical') {
            card.classList.add('is-flipped-vertical');
            btn.dataset.flip = 'unflip-vertical';
            btn.textContent = 'Unflip Vertical';
        } else if (btn.dataset.flip === 'unflip-vertical') {
            card.classList.remove('is-flipped-vertical');
            btn.dataset.flip = 'flip-vertical';
            btn.textContent = 'Flip Vertical';
        } else if (btn.dataset.flip === 'flip-horizontal') {
            card.classList.add('is-flipped-horizontal');
            btn.dataset.flip = 'unflip-horizontal';
            btn.textContent = 'Unflip Horizontal';
        } else if (btn.dataset.flip === 'unflip-horizontal') {
            card.classList.remove('is-flipped-horizontal');
            btn.dataset.flip = 'flip-horizontal';
            btn.textContent = 'Flip Horizontal';
        } else if (btn.dataset.flip === 'flip-diagonal') {
            card.classList.add('is-flipped-diagonal');
            btn.dataset.flip = 'unflip-diagonal';
            btn.textContent = 'Unflip Diagonal';
        } else if (btn.dataset.flip === 'unflip-diagonal') {
            card.classList.remove('is-flipped-diagonal');
            btn.dataset.flip = 'flip-diagonal';
            btn.textContent = 'Flip Diagonal';
        } 

    });
});

const cube = document.querySelector('.cube');
// random position
let x = Math.floor(Math.random() * window.innerWidth - 200);
let y = Math.floor(Math.random() * window.innerHeight - 200);

// let speed random between -3 and 3
let speedX = Math.floor(Math.random() * 5) - 3;
let speedY = Math.floor(Math.random() * 5) - 3;
function moveCube() {
    x += speedX;
    y += speedY;



    // reverse direction on edge
    // check if cube on the top edge
    if (y < 112) {
        y = 112;
        speedY = -speedY;
    }
    // check if cube on the bottom edge
    if (y > window.innerHeight - 200) {
        y = window.innerHeight - 200;
        speedY = -speedY;
    }
    // check if cube on the left edge
    if (x < 0) {
        x = 0;
        speedX = -speedX;
    }
    // check if cube on the right edge
    if (x > window.innerWidth - 200) {
        x = window.innerWidth - 200;
        speedX = -speedX;
    }



    cube.style.left = x + 'px';
    cube.style.top = y + 'px';

    requestAnimationFrame(moveCube);
}

moveCube();