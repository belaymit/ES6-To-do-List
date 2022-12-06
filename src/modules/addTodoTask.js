import { Todo, toDoObject } from './toDoObject.js';
import createTodoList from './displayTask.js';

const addTask = document.querySelector('#add-todo');
const task = document.querySelector('#todo');

const addTasks = () => {
  addTask.addEventListener('click', () => {
    if (task.value === '') {
      // isError();
    } else {
      const todo = new Todo(task.value);
      toDoObject.push(todo);
      createTodoList();
      task.value = '';
    }
  });
};

export default addTasks;
