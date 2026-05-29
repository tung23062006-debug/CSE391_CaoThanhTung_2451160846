Câu A1:
1. DOM tree:
                  Document
                     |
               <div id="app">
                 /        \
         <header>          <main>
          /    \           /    \
       <h1>   <nav>  <form>      <ul id="todoList">
        |     / | \   #todoForm    /          \
     Text  <a> <a> <a>   /   \   <li>         <li>
           (All) (Active) (Completed) .todo-item .todo-item.completed
                         /     \     |            |
                  <input>   <button> Text        Text
                 #todoInput  (Add) (Learn HTML) (Learn CSS)

2. Các câu lệnh querySelector tương ứng:
// 1. Chọn thẻ <h1>
const heading = document.querySelector("h1");

// 2. Chọn input trong form 
const todoInput = document.querySelector("#todoForm input");
// Hoặc ngắn gọn qua ID: document.querySelector("#todoInput");

// 3. Chọn tất cả .todo-item
const allTodoItems = document.querySelectorAll(".todo-item");

// 4. Chọn link đang active
const activeLink = document.querySelector("nav a.active");

// 5. Chọn <li> đầu tiên trong #todoList
const firstTodo = document.querySelector("#todoList li");

// 6. Chọn tất cả <a> bên trong <nav>
const navLinks = document.querySelectorAll("nav a");
