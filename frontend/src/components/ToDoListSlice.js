import {createSlice} from '@reduxjs/toolkit';

export const toDoListSlice = createSlice(
    {
        name: 'toDoList',
        initialState : {
            toDos: []
        },
        reducers : {
            createToDo: (state, action) => {
                state.toDos.push({
                    id : action.payload.id,
                    text : action.payload.text,
                    completed : false
                })
            },
            toggleCompleted : (state, action) => {
                state.toDos.map((todo) => {
                    if(todo.id === action.payload) {
                        todo.completed = !todo.completed
                    }
                })
            },
        },
    },
);

export const { createToDo, syncToDos } = toDoListSlice.actions;

export const fetchAsync =  dispatch => {
    dispatch(syncToDos());
}
export const selectToDos = state => state.toDoList.toDos;

export default toDoListSlice.reducer;

