
let todos = (JSON.parse(localStorage.getItem('todolist'))) || []

let submit = document.querySelector('#submitButton')
let todoForm = document.querySelector('#todoForm')
let ul = document.querySelector('#listTodo')
let titleInput = document.querySelector('#todoTitle')
let descriptionInput = document.querySelector('#todoDescription')
let todolength = document.querySelector('#todolength')
let isEditing = false
let editId = null 
let dragable = null
let dragableIb = null

function updateTodolocalstorage(){
    localStorage.setItem('todolist',JSON.stringify(todos))
    updateNumbers()
    RenderTodos()
}
function updateNumbers(){
    todolength.innerHTML = `Total todos are ${todos.length}`
}

    todoForm.addEventListener('submit',(e)=>{
        e.preventDefault()

        let title = titleInput.value
        let description = descriptionInput.value

        if(!title) return

        if(isEditing && editId){
            todos = todos.map((todo)=>{
                if(todo.id ===editId){
                    return {...todo,title, description}
                }
                return todo
            })
            isEditing = false
            editId = null
            submit.innerHTML = 'Add Todo'
        }else{

            
            let obj = {
                id:Date.now(),
                title,
                description,
                completed:false,
            }
            todos.push(obj)
        }
        updateNumbers()
        updateTodolocalstorage()
        titleInput.value = "";
        descriptionInput.value = "";
        RenderTodos()

    })


function RenderTodos(){
    ul.innerHTML = ''
    todos.forEach(todo => {
        const li = document.createElement('li')
        li.classList.add('flex','items-ceenter','justify-between','bg-white','p-4','mb-3','rounded','shadow-lg')
        li.dataset.id = todo.id
        
        // todo dragable

        const leftdiv = document.createElement('div')
        leftdiv.classList.add('flex','items-center','gap-3')
        const checkbox = document.createElement('input')
        checkbox.type='checkbox'
        checkbox.classList.add('h-4','w-4','accent-green-500')
        checkbox.checked=todo.completed;
        checkbox.addEventListener('change',()=>{
            todo.completed = checkbox.checked;

            updateTodolocalstorage()
            RenderTodos();
        })
        const titleEl = document.createElement("p");
        titleEl.classList.add("todo-title", "text-lg", "font-bold");
        titleEl.textContent = todo.title;
        if (todo.completed) {
            titleEl.classList.add("line-through", "text-gray-500");
        }
        leftdiv.appendChild(checkbox)
        leftdiv.appendChild(titleEl)
        const descriptionEl = document.createElement("p");
        descriptionEl.classList.add("todo-description", "text-gray-600", "mt-1");
        descriptionEl.textContent = todo.description;
        const rightDiv = document.createElement("div");
        rightDiv.classList.add("flex", "gap-2");
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("bg-blue-500", "text-white", "px-3", "py-1", "rounded", "hover:bg-blue-600", "transition-colors");
        editButton.addEventListener('click',()=>{
            isEditing = true
            editId = todo.id
            titleInput.value = todo.title;
            descriptionInput.value = todo.description;
            submitButton.value = "Save";
        }) 
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("bg-red-500", "text-white", "px-3", "py-1", "rounded", "hover:bg-red-600", "transition-colors");
        removeButton.addEventListener('click',()=>{
            todos = todos.filter(t => t.id!==todo.id)
            updateNumbers()
            updateTodolocalstorage()
            if(isEditing&& editId === todo.id){
                isEditing = false
                editId = null
                submitButton.value = "Add Todo";
                titleInput.value = "";
                descriptionInput.value = "";
                RenderTodos()
            }
        })
        rightDiv.appendChild(editButton);
        rightDiv.appendChild(removeButton);
        const infoDiv = document.createElement("div");
       infoDiv.classList.add("flex", "flex-col", "gap-1");

       infoDiv.appendChild(leftdiv);
       infoDiv.appendChild(descriptionEl)
       li.appendChild(infoDiv)
       li.appendChild(rightDiv)
       ul.appendChild(li)

       updateNumbers();
    });
}
RenderTodos()



