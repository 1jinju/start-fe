let x = 0;
let y = 0;
let offset = { x: 0, y: 0 };
let isPress = false;
let $dragEl = null;

const startDrag = event => {
  $dragEl = event.target;

  // offset 계산
  offset.x = $dragEl.offsetLeft - event.clientX;
  offset.y = $dragEl.offsetTop - event.clientY;

  isPress = true;
};

const stopDrag = event => {
  isPress = false;
};

const drag = event => {
  if (!isPress) return;

  // 현재 위치
  x = event.clientX;
  y = event.clientY;

  $dragEl.style.left = x + offset.x + 'px';
  $dragEl.style.top = y + offset.y + 'px';
};

function addEvent() {
  document.body.addEventListener('mouseup', stopDrag);
  document.body.addEventListener('mousemove', drag);
}

function init() {
  addEvent();

  // $box.addEventListener('mousedown', startDrag);
  // $box2.addEventListener('mousedown', startDrag);

  document.querySelectorAll('.drag').forEach($box => {
    $box.addEventListener('mousedown', startDrag);
  });
}

init();