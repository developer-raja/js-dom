
const todoInput = document.querySelector("#todoInput");
const listTodos = document.querySelector("#listTodos");



todoInput.addEventListener('keypress', (e) => {
    let todo;
    if(e.code === "Enter") {
       todo = e.target.value;
       let todoElement = document.createElement('li');
       let todoId = new Date().getTime();
    todoElement.innerHTML = `
        <input id="${todoId}" type="checkbox">
        <label for="${todoId}">${todo}</label>
    `;
    listTodos.appendChild(todoElement);
    todoInput.value = "";
    }
   
});

listTodos.addEventListener('click', (e) => {
    if (e.target.checked) {
        document.getElementById(e.target.id).parentElement.classList.add('completed')
    } else 
    {
         document
           .getElementById(e.target.id)
           .parentElement.classList.remove("completed");
    }
})
