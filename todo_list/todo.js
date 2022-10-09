const txt = document.querySelector(".txt");
const btn = document.querySelector(".btn");
const list_items = document.querySelector(".list_items");
const options = document.querySelector("#options");

//event listeners 
document.addEventListener("DOMContentLoaded",getTODOs);
btn.addEventListener("click", addEvent);
txt.addEventListener("keypress", addEvent);
list_items.addEventListener("click", delcheck);
options.addEventListener("click", filter);



function addEvent(e) {
    if (e.type == "keypress") {
        if (e.keyCode == 13) {  //enter key
            console.log("clicked");

            const todoDiv = document.createElement("div");
        //giving class name to this div

            todoDiv.classList.add("todo");

        //create li in this div
            const tdlitem = document.createElement("li");
            tdlitem.innerText = txt.value;
            todoDiv.classList.add("tdlitem");

            todoDiv.appendChild(tdlitem);

        //save to local storage
            saveTODO(txt.value);
        //completed button
            const completed = document.createElement("button");
            completed.innerHTML = `<i class="fa-solid fa-chefck"></i>`;
            completed.innerText = "Done";
            completed.classList.add("completed");
            todoDiv.appendChild(completed);

        //delete button
            const del = document.createElement("button");
            del.innerHTML = '<i class="fa-solid fa-trash"></i>';
            del.innerText = "Delete";

            del.classList.add("del");
            todoDiv.appendChild(del);

            list_items.appendChild(todoDiv);

        //clearing the text area
            txt.value = "";
        }
    }
        else {
            console.log("clicked");

            const todoDiv = document.createElement("div");
        //giving class name to this div

            todoDiv.classList.add("todo");

        //create li in this div
            const tdlitem = document.createElement("li");
            tdlitem.innerText = txt.value;
            todoDiv.classList.add("tdlitem");

            todoDiv.appendChild(tdlitem);

        //save to local storage
            saveTODO(txt.value);
        //completed button
            const completed = document.createElement("button");
            completed.innerHTML = `<i class="fa-solid fa-chefck"></i>`;
            completed.innerText = "Done";
            completed.classList.add("completed");
            todoDiv.appendChild(completed);

        //delete button
            const del = document.createElement("button");
            del.innerHTML = '<i class="fa-solid fa-trash"></i>';
            del.innerText = "Delete";

            del.classList.add("del");
            todoDiv.appendChild(del);

            list_items.appendChild(todoDiv);

        //clearing the text area
            txt.value = "";
        }
    }
    function delcheck(e) {
        const item = e.target;
        if (item.classList[0] == "del") {
            const delItem = item.parentElement;
            delItem.classList.add("fall");

            //removing from local storage
            removeFromlocal(delItem);

            delItem.addEventListener("transitionend", () => {
                delItem.remove();

            })
        }
        if (item.classList[0] == "completed") {
            const delItem = item.parentElement;
            delItem.classList.add('comp');
        }
    }
    function filter(e) {
        const items = list_items.childNodes;
        console.log(items);
        items.forEach((item) => {
            switch (e.target.value) {
                case "all":
                    item.style.display = "flex";
                    break;
                case "completed":
                    if (item.classList.contains("comp")) {
                        item.style.display = "flex";
                    } else {
                        item.style.display = "none";

                    }
                    break;
                case "pending":
                    if (item.classList.contains("comp")) {
                        item.style.display = "none";
                    } else {
                        item.style.display = "flex";

                    }
                    break;
            }
        });
    }

     function saveTODO(todo){
        //if todo list already has some stored elements
        let t;
        if(localStorage.getItem('t')==null){
            t=[];
        }else{
            t=JSON.parse(localStorage.getItem("t"));
        }
        t.push(todo);
        localStorage.setItem("t",JSON.stringify(t));
     }

     function getTODOs(){
        let t;
        if(localStorage.getItem('t')==null){
            t=[];
        }else{
            t=JSON.parse(localStorage.getItem("t"));
        }  
        t.forEach( (tasks)=>{
            const todoDiv = document.createElement("div");
        //giving class name to this div

            todoDiv.classList.add("todo");

        //create li in this div
            const tdlitem = document.createElement("li");
            tdlitem.innerText = tasks;
            todoDiv.classList.add("tdlitem");
            // tdlitem.classList.add("comp");
            todoDiv.appendChild(tdlitem);

        //completed button
            const completed = document.createElement("button");
            completed.innerHTML = `<i class="fa-solid fa-chefck"></i>`;
            completed.innerText = "Done";
            completed.classList.add("completed");
            todoDiv.appendChild(completed);

        //delete button
            const del = document.createElement("button");
            del.innerHTML = '<i class="fa-solid fa-trash"></i>';
            del.innerText = "Delete";

            del.classList.add("del");
            todoDiv.appendChild(del);

            list_items.appendChild(todoDiv);
        });
     }

     function removeFromlocal(todo){
        let t;
        if(localStorage.getItem('t')==null){
            t=[];
        }else{
            t=JSON.parse(localStorage.getItem("t"));
        }
        let todoIndex= todo.children[0].innerText;  //from the div element, the value of list item that is at the 0th index is being retrieved
        t.splice(t.indexOf(todoIndex), 1); //removing the corresponding value form the "t" array stored in the local storage containing the stored list
        localStorage.setItem("t", JSON.stringify(t));
     }