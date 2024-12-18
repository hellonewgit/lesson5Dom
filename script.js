const tasks = [
    { name: 'Провести урок', completed: false },
    { name: 'Пойти погулять', completed: false },
]

const listEl = document.getElementById('list');
const btnEl = document.getElementById('btn');
const inputEl = document.getElementById('input');

// Функция которая будет добавлять элемент в массив
function addTask(task) {
    if (task) {
        tasks.push({ name: task, completed: false })
    } else {
        console.log('Задача не может быть пустой')
    }
}

btnEl.addEventListener('click', function (e) {
    const task = inputEl.value;
    addTask(task);
    inputEl.value = '';
    showTasks();
});

function showTasks() {
    listEl.innerHTML = '';
    tasks.forEach((elem) => {
        listEl.innerHTML += `
            <li> 
                <span class="list-text">${elem.name}</span>
                <button class="done">Выполнить</button>
                <button class="del">Удалить</button>
            </li>`;
    });
}

showTasks();

const doneEls = document.querySelectorAll('.done');
const delEls = document.querySelectorAll('.del');

doneEls.forEach((elem) => {
    elem.addEventListener('click', function (e) {
        // Найти родительский элемент li
        const liEl = e.target.closest('li');
        liEl.classList.toggle('done-list');
        console.log(liEl);
    });
});

delEls.forEach((elem) => {
    elem.addEventListener('click', function (e) {
        // Найти родительский элемент li
        const liEl = e.target.closest('li');
        liEl.remove();
    });
});




// СОздать функцию которая проверяет есть ли задача в списке и completed tru

function checkTask(task) {
    tasks.forEach((elem, index) => {
        if (elem.name === task) {
            tasks[index].completed = true;
        }
    });
}

function mark(nameTask) {
    const task = tasks.find(elem => elem.name === nameTask && !elem.completed);
    if (task) {
        task.completed = true;
        console.log(`Задача ${task.name} выполнена`);
    } else {
        console.log('Задача не найдена');
    }
}

// Функция которая будет удалять задачу из списка
function deleteTask(task) {
    tasks.forEach((elem, index) => {
        if (elem.name === task) {
            tasks.splice(index, 1);
        }
    });
}



//Показать все задачи




