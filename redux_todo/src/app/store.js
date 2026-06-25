import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../featurs/todo/todosSice'

const TODO_STORAGE_KEY = 'redux_todo_state';

const loadTodos = () => {
    try {
        const savedState = localStorage.getItem(TODO_STORAGE_KEY);
        return savedState ? JSON.parse(savedState) : undefined;
    } catch (error) {
        console.warn('Could not load todos from localStorage:', error);
        return undefined;
    }
};

const saveTodos = (state) => {
    try {
        localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
        console.warn('Could not save todos to localStorage:', error);
    }
};

export const store=configureStore({
    reducer: todoReducer,
    preloadedState: loadTodos()
})

store.subscribe(() => {
    saveTodos(store.getState());
});
