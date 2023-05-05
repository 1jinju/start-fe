import Button from './Button.js';
import Wrapper from './Wrapper.js';

const $root = document.querySelector('#root');

let count = 0;
function plus() {
    console.log('plus');
    setCount(++count);
}

function minus() {
    console.log('minus');
    setCount(--count);
}

const $plusButton = Button({ text: 'plus', onClick: plus });
const $minusButton = Button({ text: 'minus', onClick: minus });

const { $wrapper: $countWrapper, setText: setCount } = Wrapper({
    text: 0,
    className: 'count',
});

$root.append($countWrapper, $plusButton, $minusButton);


// const countEl = document.querySelector('.count');
// const plusBtn = document.querySelector('#plusBtn');
// const minusBtn = document.querySelector('#minusBtn');

// let count = parseInt(countEl.textContent);

// function plus() {
//     count++;
//     countEl.textContent = count.toString();
// }

// function minus() {
//     count--;
//     countEl.textContent = count.toString();
// }

// plusBtn.addEventListener('click', plus);
// minusBtn.addEventListener('click', minus);