let isPress = false;

function startDrag($el) {
    isPress = true;
};

function stopDrag($el) {
    isPress = false;
};

function drag($el) {
    if (!isPress) return;

    let x = event.clientX;
    let y = event.clientY;

    $el.style.left = `${x - 50}px`;
    $el.style.top = `${y - 50}px`;
};

function addEvent($el) {
    $el.addEventListener('mousedown', () => {
        startDrag($el);
    });
    $el.addEventListener('mousemove', () => {
        drag($el);
    });
    $el.addEventListener('mouseup', () => {
        stopDrag($el);
    });
}

function init() {
    const $box = document.querySelector('.box');
    const $box1 = document.querySelector('.box1');

    addEvent($box);
    addEvent($box1);
}

init();