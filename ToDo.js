const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const totalTasks = document.getElementById('totalTasks');

addButton.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    return;
  }

  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <input type="checkbox">
    <span>${taskText}</span>
    <span class="material-symbols-outlined">
delete
</span>
  `;
  taskList.appendChild(listItem);

  taskInput.value = '';
  updateTotalTasks();

  const deleteButton = listItem.querySelector('.material-symbols-outlined');
  deleteButton.addEventListener('click', deleteTask);

  const checkbox = listItem.querySelector('input[type="checkbox"]');
  checkbox.addEventListener('change', toggleTaskStatus);
}

function deleteTask(event) {
  const listItem = event.target.parentElement;
  listItem.remove();
  updateTotalTasks();
}

function toggleTaskStatus(event) {
  const listItem = event.target.parentElement;
  listItem.classList.toggle('completed');
}

function updateTotalTasks() {
  const total = taskList.children.length;
  totalTasks.textContent = total;
}
