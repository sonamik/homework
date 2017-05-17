// var ID = 0;
// var todos = [];

function ToDoItem(id, title, completed) {
    this.$id = id;
    this.$title = title;
    this.$completed = completed;
}

function ToDoList(todos) {
    this.$todos = todos || [];
}

renderList(this.$todos);

ToDoList.prototype.renderList = function(items) {
    var listHTML = '';

    items.forEach(function (item) {
        listHTML += ('<li><input type="checkbox" onclick = "markAsComplete("' + item.id + ')"' // name="vehicle" value="Bike"'
         + (item.completed ? 'checked' : '')   +'>'
         + (item.completed ? '<s>'+item.title+'</s>' : item.title)
         + ' <a href="#" onclick="deleteItem('+ item.id +')">X</a></li>');
    });

    document.getElementById("todo-list").innerHTML = listHTML;
}

ToDoList.ID = 0;

ToDoList.prototype.getCount = function() {
    var count = this.$todos.length;
    document.getElementById("all-tasks").innerHTML = count;
    return count;
}

ToDoList.prototype.getCompletedCount = function() {
    var completedCount = this.$todos.length;
    for(var c = 0; c < completedCount; c++){
        if(!this.$todos[c].completed) {
            completedCount--;
        }
    }
    return completedCount;
}

ToDoList.prototype.addItem = function() {
    var elNewTask = document.getElementById('new-task');
    var title = elNewTask.value.trim();
    elNewTask.focus();
    if (!title) {
        alert("Please input valid title");
        return;
    }

    this.$todos.push({
        id: ++ID,
        title: title,
        completed: false
    });

    elNewTask.value = '';

    renderList(this.$todos);
    elNewTask.focus(); //put the cursor back inside the input field
}

ToDoList.prototype.deleteItem = function(id) {
    var item = this.$todos.indexOf(this.$todos.find(function(v) {
        return v.id == id;
    }));
    this.$todos.splice(item, 1);
    --ID;
    renderList(this.$todos);
    document.getElementById('new-task').focus(); //put the cursor back inside the input field
}

ToDoList.prototype.markAsComplete = function(id) {  ////////////////////////////
    var itemComplete = this.$todos.indexOf(this.$todos.find(function(v) {
        return v.id == id;
    }));
    itemComplete.completed = true;
    <s>...</s> //"strike through" formatting
    listHTML += ('<li><input type="checkbox" onclick = "markAsComplete("' + item.id + ')"' // name="vehicle" value="Bike"'
     + (item.completed ? 'checked' : '')   +'>'
     + item.title + ' <a href="#" onclick="deleteItem('+ item.id +')">X</a></li>');
}

ToDoList.prototype.filter = function(){
    var selectedArray = [];
    var count = 0;
    if(document.getElementById('selectAll').checked) {
        selectedArray = this.$todos;
    } else if(document.getElementById('selectCompleted').checked) {
        for(var compl = 0; compl < this.$todos.length; compl++) {
            if(this.$todos[compl].$completed) {
                selectedArray[count++] = this.$todos[compl];
            }
        }
    } else if(document.getElementById('selectNonCompleted').checked) {
        for(var ncompl = 0; ncompl < this.$todos.length; ncompl++) {
            if(!this.$todos[ncompl].$completed) {
                selectedArray[count++] = this.$todos[ncompl];
            }
        }
    }
    renderList(selectedArray);
    return selectedArray;
}

ToDoList.prototype.search = function() {
    var searchArray = filter();
    var elNewTask = document.getElementById('search');
    var title = elNewTask.value.trim();
    // elNewTask.focus();
    if (!title) {
        alert("Please input valid title");
        return;
    }
    for(var i = 0; i < searchArray.length; i++){
        if(title.toLowerCase() == searchArray[i].$title.toLowerCase()) {
            document.getElementById("search").innerHTML = searchArray[i].$title;
            return;
        }
    }
}
//{
//    id:
//    completed: true/false,
//    title: string,
//}
