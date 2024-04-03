let todoList=[];
displayTodo();
function addTodo(){
    let inputElement=document.querySelector("#task");
    let inputDate=document.querySelector("#taskDate");
    let text=inputElement.value;
    let date=inputDate.value;
    todoList.push(
        {item: text,dueDate: date}
    );
    // todoList.push(text);
    inputElement.value='';
    inputDate.value='';
    displayTodo();
}

function displayTodo(){
    let container=document.querySelector(".todo-container");
    let newHtml='';
    for(let i=0;i<todoList.length;i++){
        let {item,dueDate}=todoList[i];
        newHtml+=`
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class="btn2" onclick="todoList.splice(${i},1);displayTodo();">Delete</button>
        `;
    }
    container.innerHTML=newHtml;
}

