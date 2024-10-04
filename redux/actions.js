export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK_STATUS = 'TOGGLE_TASK_STATUS';
export const DELETE_TASK = 'DELETE_TASK';

export const addTask = (title) => ({
  type: ADD_TASK,
  payload: { title }
});

export const toggleTaskStatus = (id) => ({
  type: TOGGLE_TASK_STATUS,
  payload: { id }
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: { id }
});