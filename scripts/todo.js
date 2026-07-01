    const todoList = [{
        name : "Happy Life",
        DueDate : '19/08/2005'
    },{ 
        name : "Play Football",
        DueDate : '31/08/2005'
    }];
    renderTodoList();
    function renderTodoList() {
        let todoListHTML = '';
        for(let i = 0;i < todoList.length; i++){
            const todoObject = todoList[i];
            // const name = todoObject.name;
            // const DueDate = todoObject.DueDate;
            const {name,DueDate} = todoObject;
            const html = `
            <div>${name}</div>
            <div>${DueDate}</div>
            <button onclick = "
            todoList.splice(${i}, 1);
            renderTodoList();
            "class="delete-todo-button">Delete</button>
            `;
            todoListHTML += html;
    }
        console.log(todoListHTML);

        document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
    }
    const todolist = [];

    function addtodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-due-date-input');
    
    // Rename variable to DueDate to match the object shorthand below
    const DueDate = dateInputElement.value; 

    todolist.push({
        name,
        DueDate
    });

    console.log(todolist);
    inputElement.value = '';
    renderTodoList();
}
