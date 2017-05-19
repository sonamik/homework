function ToDoItem(id, title, completed) {
    this.$id = id;
    this.$title = title;
    this.$completed = completed || false;
}

function ToDoList(todos) {
    this.$todos = todos || [];
}

ToDoList.prototype.renderList = function() {
    var items = this.$todos;
    if(!items) {
        return;
    }
    var listHTML = '';

    items.forEach(function (item) {
        listHTML += ('<li>' +
        '<input type="checkbox" onclick = "markAsComplete("' + item.id + ')"'
         + (item.$completed ? 'checked' : '')   +'>'
         + (item.$completed ? ('<s>'+item.$title+'</s>') : item.$title)
         + ' <a href="#" onclick="deleteItem('+ item.id +')">X</a></li>');
    });

    // listHTML += ('<li>' +
    //     '<input type="checkbox" onclick = "markAsComplete("' + item.id + ')"'
    //      + (item.$completed ? 'checked' : '')   +'>'
    //      + (item.$completed ? '<s>'+item.title+'</s>' : item.title)
    //      + ' <a href="#" onclick="deleteItem('+ item.id +')">X</a></li>');

    document.getElementById("todo-list").innerHTML = listHTML;
};

// ToDoList.prototype.renderList(this.$todos);

ToDoList.prototype.getCount = function() {
    var count = this.$todos.length;
    document.getElementById("all-tasks").innerHTML = count;
    return count;
};

ToDoList.prototype.getCompletedCount = function() {
    var completedCount = this.$todos.length;
    for(var c = 0; c < completedCount; c++){
        if(!this.$todos[c].completed) {
            completedCount--;
        }
    }
    return completedCount;
};

ToDoList.prototype.addItem = function(title) {
    title = title.trim();
    if (!title) {
        alert("Please input valid title");
        return;
    }

    this.$todos.push({
        id: ToDoList.ID++,
        title: title,
        completed: false
    });

    this.renderList();
};

ToDoList.prototype.deleteItem = function(id) {
    var item = this.$todos.indexOf(this.$todos.find(function(v) {
        return v.id == id;
    }));
    this.$todos.splice(item, 1);
    --ID;
    this.renderList();
    document.getElementById('new-task').focus(); //put the cursor back inside the input field
};

// ToDoList.prototype.markAsComplete = function(id) {  ////////////////////////////
//     var itemComplete = this.$todos.indexOf(this.$todos.find(function(v) {
//         return v.id == id;
//     }));
//     itemComplete.completed = true;
//     // <s>...</s> //"strike through" formatting
//     listHTML += ('<li><input type="checkbox" onclick = "markAsComplete("' + item.id + ')"' // name="vehicle" value="Bike"'
//      + (item.completed ? 'checked' : '')   +'>'
//      + item.title + ' <a href="#" onclick="deleteItem('+ item.id +')">X</a></li>');
// }

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
    this.renderList();
    return selectedArray;
};

ToDoList.prototype.search = function() {
    var searchArray = filter();
    var elNewTask = document.getElementById('search');
    var title = elNewTask.value.trim();
    // elNewTask.focus();
    if (!title) {
        alert("Please input valid title");
        return;
    }
    for(var i = 0; i < searchArray.length; i++) {
        if(title.toLowerCase() == searchArray[i].$title.toLowerCase()) {
            document.getElementById("search").innerHTML = searchArray[i].$title;
            return;
        }
    }
};

var myList = new ToDoList();
ToDoList.ID = 0;

function addNewItem() {
    var input = document.getElementById('new-task');
    myList.addItem(input.value);
    input.value = '';
    input.focus();
}

//{
//    id:
//    completed: true/false,
//    title: string,
//}
