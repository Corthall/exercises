let todoList = []

function addToList(toDoItem) {
  if (typeof toDoItem === 'string' || toDoItem instanceof String) {
    todoList.push(toDoItem)
    return todoList
  }
  else
    console.error("toDoItem is not a string");

}

function addToTopOfList(toDoItem) {

}