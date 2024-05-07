import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setUsername(value);
    if (value.toLowerCase().includes("o")) {
      alert("Por favor, ¡Nombres de usuario sin la letra o!");
    }
  };

  const register = (event) => {
    event.preventDefault();
    if (username === "" || username.toLowerCase().includes("o")) {
      alert("Usuario inválido para registrarse");
    } else {
      alert("¡Usuario registrado correctamente!");
    }
  };

  return (
    <form onSubmit={register}>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={handleInputChange}
        placeholder="Nombre de usuario"
      />
      <button>Registrarse</button>
      <p>{username}</p>
    </form>
  );
};

export default Login;
