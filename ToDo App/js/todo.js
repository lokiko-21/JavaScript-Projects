//GETS TASK FROM INPUT
function get_todos() {
    //CREATIONG NEW ARRAY OF TASKS THAT ARE INPUTED
    var todos = new Array;
    //PULLS TASK SAVED FROM WEB BROWSER MEMORY
    var todos_str = localStorage.getItem('todo');
    //IF INPUT NOT NOT IT'LL MAKE TASK AN OBJECT
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

//THIS ADDS TASK TO get_todos FUNCTION ARRAY
function add() {
    //TAKES TASK AND CREATED VARIABLE OF IT
    var task = document.getElementById('task').value;

    var todos = get_todos();
    //ADDS NEW TASK AT THE END OF THE ARRAY
    todos.push(task);
    //CONVERTS TASK INTO A JSON string
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

//KEEPS TASKS PERMANENTLY DISPLAYED ON SCREEN
function show() {
    //SETS TASK RETRIEVED AS VARIABLE
    var todos = get_todos();
    //SETS EACH TASK AS AN UNORDERED LIST
    var html = '<ul>';
    //DISPLAYS TASK TO LIST AS IT'S INPUTED
    for (var i = 0; i < todos.length; i++) {
        //ALSO DISPLAYS TASK AS A LIST AND CEATES BUTTON WITH THE "x"
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';

    };
    html += '</ul>';
    //DISPLAYS TASK
    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    }
}
//DISPLAYS INPUTED TASK WHEN 'Add Item' BUTTON IS CLICKED
document.getElementById('add').addEventListener('click', add);
//KEEPS INPUTS DISPLAYED PERMANENTLY
show();

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();

    return false;
}

var buttons = document.getElementsByClassName('remove');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', remove);
}