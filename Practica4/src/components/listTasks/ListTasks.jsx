const ListTasks = ({ tasks, completeTask, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <p className={task.complete ? "completed" : ""}>{task.title}</p>
          <button onClick={() => deleteTask(task.id)}>Eliminar</button>
          <button onClick={() => completeTask(task.id)}>
            {task.complete ? "Desmarcar Completado" : "Completado"}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ListTasks;
