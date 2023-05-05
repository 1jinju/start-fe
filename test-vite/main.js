import Button from './Button.js'
import { setupCounter } from './counter.js'

function plus() {
  console.log('plus');
}

const $plusButton = Button({ text: 'plus', onClick: plus });

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`
document.querySelector('#app').append($plusButton);

setupCounter(document.querySelector('#counter'))
