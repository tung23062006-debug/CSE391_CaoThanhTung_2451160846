let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "all"; 

const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const todoCount = document.getElementById("todoCount");
const filterBtns = document.querySelectorAll(".filter-btn");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

function saveAndRender() {
    localStorage.setItem("todos", JSON.stringify(todos));
    render();
}

function render() {
    todoList.innerHTML = ""; 

    const filteredTodos = todos.filter(todo => {
        if (currentFilter === "active") return !todo.completed;
        if (currentFilter === "completed") return todo.completed;
        return true; 
    });

    filteredTodos.forEach(todo => {
        const li = document.createElement("li");
        li.className = "todo-item";
        li.dataset.id = todo.id; 
        if (todo.completed) li.classList.add("completed");

        const span = document.createElement("span");
        span.className = "todo-text";
        span.textContent = todo.text;

        const btn = document.createElement("button");
        btn.className = "delete-btn";
        btn.textContent = "❌";

        li.appendChild(span);
        li.appendChild(btn);
        todoList.appendChild(li);
    });

    const activeCount = todos.filter(t => !t.completed).length;
    todoCount.textContent = `${activeCount} item${activeCount === 1 ? "" : "s"} left`;
}

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = todoInput.value.trim();
    if (!text) return;

    todos.push({
        id: Date.now().toString(), 
        text: text,
        completed: false
    });

    todoInput.value = ""; 
    saveAndRender();
});

todoList.addEventListener("click", (e) => {
    const li = e.target.closest(".todo-item");
    if (!li) return;
    const todoId = li.dataset.id;

    if (e.target.classList.contains("delete-btn")) {
        todos = todos.filter(t => t.id !== todoId);
        saveAndRender();
    }

    else if (e.target.classList.contains("todo-text")) {
        const todo = todos.find(t => t.id === todoId);
        if (todo) {
            todo.completed = !todo.completed;
            saveAndRender();
        }
    }
});

todoList.addEventListener("dblclick", (e) => {
    if (!e.target.classList.contains("todo-text")) return;

    const li = e.target.closest(".todo-item");
    const todoId = li.dataset.id;
    const todo = todos.find(t => t.id === todoId);

    if (todo.completed) return;

    const oldText = e.target.textContent;

    const input = document.createElement("input");
    input.type = "text";
    input.className = "edit-input";
    input.value = oldText;

    li.replaceChild(input, e.target);
    input.focus();

    const finishEdit = () => {
        const newText = input.value.trim();
        if (newText && newText !== oldText) {
            todo.text = newText;
            saveAndRender();
        } else {
            render(); 
        }
    };

    input.addEventListener("keydown", (evt) => {
        if (evt.key === "Enter") finishEdit();
    });

    input.addEventListener("blur", finishEdit);
});

document.querySelector(".filters").addEventListener("click", (e) => {
    if (!e.target.classList.contains("filter-btn")) return;
    filterBtns.forEach(btn => btn.classList.remove("active"));
    e.target.classList.add("active");
    currentFilter = e.target.dataset.filter;
    render();
});

clearCompletedBtn.addEventListener("click", () => {
    todos = todos.filter(t => !t.completed); 
    saveAndRender();
});

render();