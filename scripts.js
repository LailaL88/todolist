

function onPageLoaded() {
    const input = document.querySelector("input[type='text']");
    const ul = document.querySelector("ul");
    const saveButton = document.querySelector("button.save");

    function createTodo() {
        
        const li = document.createElement("li");
        li.classList.add("listitem");
        const textSpan = document.createElement("span");
        
        const newTodo = input.value;
        textSpan.append(newTodo);

   
        const deleteBtn = document.createElement("span");
        deleteBtn.classList.add("todo-trash");
        const icon = document.createElement("i");
        icon.classList.add("fas", "fa-eraser");
        deleteBtn.appendChild(icon);

        ul.appendChild(li).append(textSpan, deleteBtn);
        input.value = "";
        deleteButton(deleteBtn);
        
        let lis = document.querySelectorAll("li.listitem");

        for (const item of lis) {
            clickLi(item);
        }

        function clickLi(element) {
            element.addEventListener("click", () => {
                element.classList.add("lineThrough");
            })
        }
    }

    saveButton.addEventListener("click", () => {
            localStorage.setItem("todos", ul.innerHTML);
       });

     function loadTodos() {
        const data = localStorage.getItem("todos");
        if (data) {
            ul.innerHTML = data;
           }
        const deleteButtons = document.querySelectorAll("span.todo-trash");
            for (const button of deleteButtons) {
                deleteButton(button);
            }
        }

    loadTodos();

     function deleteButton(element) {
        element.addEventListener("click", (event) => {
            element.parentElement.remove();
            event.stopPropagation();
        });
    }

    input.addEventListener("keypress", (keyPressed) => {
        const keyEnter = 13;
        if (keyPressed.which == keyEnter) {
            createTodo();
        }
    });
}

document.addEventListener("DOMContentLoaded", onPageLoaded);

function showTips(){
        document.getElementById("tip").style.display = "block";
    }

function hideTips(){
    document.getElementById("tip").style.display = "none";
}

function clearList(){
    var clear = document.getElementById("list");
    clear.innerHTML="";
}



