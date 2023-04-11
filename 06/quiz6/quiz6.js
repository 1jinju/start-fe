const $num = document.querySelector('#num');
const $btn = document.querySelector('#btn');
const $result = document.querySelector('#result');

$btn.addEventListener('click', () => {
    let temp = parseInt($num.value);
    let result = '';
    if (isNaN(temp)) {
        alert('숫자를 입력하세요');
    } 
    else {
        for (let i = 1; i < 10; i++) {
            result += `${temp} x ${i} = ${temp * i}<br>`;
        }
        $result.innerHTML = result;
    }
});