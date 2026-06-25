import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removetodo } from '../featurs/todo/todosSice';

function Todos() {
    
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <div>
            <div className="mb-4 flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-lg font-semibold text-white">Todos List</h3>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300">
                    {todos.length} {todos.length === 1 ? 'task' : 'tasks'}
                </span>
            </div>

            <ul className="space-y-3">
                {todos.map((todo) => (
                    <li
                        className="flex items-center justify-between gap-4 rounded-lg border border-slate-800 bg-slate-950/60 px-4 py-3 text-left text-white shadow-sm transition duration-200 hover:border-slate-700 hover:bg-slate-900"
                        key={todo.id}
                    >
                        <div className="min-w-0 flex-1 break-words text-sm leading-6 text-slate-200 sm:text-base">
                            {todo.text}
                        </div>
                        <button
                            onClick={() => dispatch(removetodo(todo.id))}
                            className="shrink-0 rounded-md border border-red-400/20 bg-red-500/10 px-3 py-2 text-sm font-medium text-red-300 transition duration-200 hover:border-red-400/40 hover:bg-red-500/20 hover:text-red-200 focus:outline-none focus:ring-4 focus:ring-red-500/10"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todos;
