import { useState } from "react";

const AddTask = ({ addTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(title);
  };

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ingresar Tarea:
        <input type="text" value={title} onChange={handleInputChange} />
      </label>
      <button type="submit">Agregar tarea</button>
    </form>
  );
};

export default AddTask;
