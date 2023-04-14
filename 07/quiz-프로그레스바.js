const $progress = document.getElementById('progress');
const maxWidth = 100;
let width = 0;
let direction = 1;

function startProgress() {
    width += direction;
    if (width >= maxWidth) {
        direction = -1;
    } else if (width <= 0) {
        direction = 1;
    }
    $progress.style.width = `${width}%`;
    requestAnimationFrame(startProgress);

}
startProgress();