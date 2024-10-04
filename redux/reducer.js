import { ADD_TASK, TOGGLE_TASK_STATUS, DELETE_TASK } from './actions';

const initialState = {
  tasks: []
};

let nextId = 1;

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: nextId++,
            title: action.payload.title,
            status: false // false means 'due', true means 'done'
          }
        ]
      };
    case TOGGLE_TASK_STATUS:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? { ...task, status: !task.status } : task
        )
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload.id)
      };
    default:
      return state;
  }
};

export default rootReducer;