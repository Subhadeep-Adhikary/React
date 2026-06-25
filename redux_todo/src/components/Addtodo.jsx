import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtodo } from '../featurs/todo/todosSice';

function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

      
        dispatch(addtodo(input)); 
        setInput(''); 
    };

    return (
        <form onSubmit={addTodoHandler} className="flex flex-col gap-3 sm:flex-row">
            <input
                type="text"
                className="min-h-12 flex-1 rounded-lg border border-slate-700 bg-slate-950/70 px-4 text-base text-slate-100 shadow-inner shadow-slate-950/30 outline-none transition duration-200 placeholder:text-slate-500 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="min-h-12 rounded-lg bg-cyan-400 px-6 font-semibold text-slate-950 shadow-lg shadow-cyan-950/30 transition duration-200 hover:bg-cyan-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/25 active:scale-[0.98]"
            >
                Add Todo
            </button>
        </form>
    );
}

export default AddTodo;
