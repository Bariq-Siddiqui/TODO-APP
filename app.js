var lsit = document.getElementById("list");
function addTodo(){
    var todo_item=document.getElementById("todo-item");
    var li=document.createElement("li");
    var liText=document.createTextNode(todo_item.value)
    li.appendChild(liText);

    var delBtn =document.createElement("button");
    var delText =document.createTextNode("DELETE");
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick","deleteItem(this)");
    delBtn.appendChild(delText);
    li.appendChild(delBtn);
    
    var editBtn =document.createElement("button");
    var editText=document.createTextNode("EDIT");
    editBtn.appendChild(editText);
    editBtn.setAttribute("class","btn");
    li.appendChild(editBtn);
    lsit.appendChild(li);
    editBtn.setAttribute("onclick","editItem(this)");
    todo_item.value=""
}
function deleteItem(e){
    e.parentNode.remove();
}
function deleteAll(){
    lsit.innerHTML="";
}
function editItem(e){
    var val =prompt("Enter update value",e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue=val;
}