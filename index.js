const image = document.querySelector('.image');
const line = document.querySelector('.line');
const input = document.querySelector('input');
const value = document.querySelector('.value');
let count = 0;
let counter = 0;

// Crea e inserisce il container una sola volta
let container = document.querySelector('.todo-container');
if (!container) {
    container = document.createElement('div');
    container.className = 'todo-container';
    line.after(container);
}

function updateCounter() {
    value.innerHTML = 'Your remaining todos : ' + count;
}

function createTaskElement(taskText) {
    const child = document.createElement('div');
    child.className = 'child';
    child.id = counter++;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';

    const span = document.createElement('span');
    span.textContent = taskText;

    const remove = document.createElement('img');
    remove.src = 'img/cancel.png';
    remove.className = 'remove';
    remove.alt = 'Elimina';
    remove.value = child.id;

    // Azioni
    checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
            child.classList.add('completed');
            count--;
        } else {
            child.classList.remove('completed');
            count++;
        }
        updateCounter();
    });

    remove.addEventListener('click', () => {
        if (!checkbox.checked) {
            count--;
        }
        child.remove();
        updateCounter();
    });

    child.append(checkbox);
    child.append(span);
    child.append(remove);
    return child;
}

function addTask() {
    const taskText = input.value.trim();
    if (taskText) {
        const taskElement = createTaskElement(taskText);
        container.appendChild(taskElement);
        count++;
        updateCounter();
        input.value = '';
        input.placeholder = 'Add new task';
    } else {
        input.placeholder = 'Insert your task!!';
    }
}

image.addEventListener('click', addTask);
input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') addTask();
});
// Inizializza il contatore
updateCounter();
    

