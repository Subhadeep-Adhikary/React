import AddTodo from './components/Addtodo'
import Todos from './components/todos'

function App() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100 sm:px-6">
      <section className="mx-auto flex w-full max-w-2xl flex-col gap-8 rounded-lg border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/40 sm:p-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Redux Toolkit
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Todo Manager
          </h1>
          <p className="mt-3 text-sm text-slate-400">
            Add your next task and keep the list tidy.
          </p>
        </div>

        <AddTodo />
        <Todos />
      </section>
    </main>
  )
}

export default App
