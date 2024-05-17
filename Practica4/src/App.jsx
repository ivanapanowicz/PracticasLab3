import { useState } from "react";
import "./App.css";
import AddTask from "./components/addTask/AddTask";
import ListTasks from "./components/listTasks/ListTasks";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    setTasks(
      tasks.concat({
        id: crypto.randomUUID(),
        title: title,
        complete: false,
      })
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, complete: !task.complete } : task
      )
    );
  };

  return (
    <div>
      <header>
        <h1>Lista de tareas:</h1>
        <AddTask addTask={addTask} />
      </header>
      <main>
        <ListTasks
          tasks={tasks}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      </main>
    </div>
  );
}

export default App;
