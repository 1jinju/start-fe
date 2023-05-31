const form = document.querySelector('.new-task');
const input = document.querySelector('input[name="text"]');
const ul = document.querySelector('ul');

function createTask(text) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    const checkbox = document.createElement('input');
    const taskText = document.createElement('span');
  
    deleteButton.className = 'delete';
    deleteButton.textContent = '×';
  
    checkbox.type = 'checkbox';
    checkbox.className = 'toggle-checked';
  
    taskText.className = 'text';
    taskText.textContent = text;
  
    li.appendChild(deleteButton);
    li.appendChild(checkbox);
    li.appendChild(taskText);
  
    ul.appendChild(li);
  
    saveTasks();
}

function deleteTask(event) {
  const li = event.target.closest('li');
  ul.removeChild(li);

  saveTasks();
}

// 할일 체크
function toggleTask(event) {
  const li = event.target.closest('li');
  li.classList.toggle('completed');

  saveTasks();
}

// 로컬 스토리지에서 할일 데이터 가져오기
function getSavedTasks() {
  const savedTasks = localStorage.getItem('tasks');
  return savedTasks ? savedTasks : '';
}


// 로컬 스토리지에 할일 데이터 저장
function saveTasks() {
  localStorage.setItem('tasks', ul.innerHTML);
}

function handleSubmit(event) {
  event.preventDefault();

  const text = input.value.trim();
  if (text !== '') {
    createTask(text);
    input.value = '';
  }
}

function handleClick(event) {
  if (event.target.matches('.delete')) {
    deleteTask(event);
  } else if (event.target.matches('.toggle-checked')) {
    toggleTask(event);
  }
}

function init() {
    const savedTasks = getSavedTasks();
    ul.innerHTML = savedTasks;

    form.addEventListener('submit', handleSubmit);
    ul.addEventListener('click', handleClick);
}

init();
