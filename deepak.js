const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click",function(){
    const input = taskInput.value;

    if (input.trim() === "") {
        return;
   
    }
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = input;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.appendChild(checkbox);
    li.appendChild(span);

    checkbox.addEventListener("change", function(){
        if(checkbox.checked === true) {
            span.classList.add("completed");
        } 
        else {
            span.classList.remove("completed");
        }
    });

    taskList.appendChild(li);
    taskInput.value = "";

    const btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.classList.add("delete-btn");
    li.appendChild(btn);

    btn.addEventListener("click", function() {
        li.remove();
    })
});
