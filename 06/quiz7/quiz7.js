const $box = document.querySelector('.box');
const $bug = document.querySelector('#bug');
const $point = document.querySelector('#point');
const $life = document.querySelector('#life');

const boxBorder = $box.getBoundingClientRect();
let point = $point.innerText;
let life = $life.innerText;

// 빨간 타켓 클릭하면 점수 +1
function pointUp() {
  point++;
  $point.innerText = point;
}

// 빨간 타켓 클릭하지 못하면 생명 -1
function lifeDown() {
    if (life > 0){
        life--;
        $life.innerText = life;
    }
    else{
        alert("game over");
    }
}

function randomPos() {
    event.stopPropagation();
    pointUp();
    const x = Math.floor(Math.random() * (boxBorder.width + 1));
    const y = Math.floor(Math.random() * (boxBorder.height + 1));

    $bug.style.left = x + 'px';
    $bug.style.top = y + 'px';

  
}

function init() {
    $bug.addEventListener('click', randomPos);
    $box.addEventListener('click', lifeDown);
}

init();