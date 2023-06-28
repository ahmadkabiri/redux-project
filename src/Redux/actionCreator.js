import {
  addTodo,
  removeTodo,
  doTodo,
  getAllTodos
} from "./actionTypes.js";

function addTodoAction(value) {
  return {
    type: addTodo,
    title: value,
  };
}

function removeTodoAction(id) {
  return {
    type: removeTodo,
    id,
  };
}

function doTodoAction(id) {
  return {
    type: doTodo,
    id,
  };
}

function getAllTodosAction () {
    return {
        type : getAllTodos
    }
}



export {
  addTodoAction,
  removeTodoAction,
  doTodoAction,
  getAllTodosAction
};
