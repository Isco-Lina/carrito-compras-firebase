import { useState } from "react";
import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const register = async () => {
    setError("");

    if (!isValidEmail(email)) {
      setError("Debe ingresar un correo electrónico válido.");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Usuario registrado correctamente");
    } catch (error) {
      setError(error.message);
    }
  };

  const login = async () => {
    setError("");

    if (!isValidEmail(email)) {
      setError("Debe ingresar un correo electrónico válido.");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Inicio de sesión exitoso");
    } catch (error) {
      setError("Correo o contraseña incorrectos.");
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Registro / Inicio de sesión</h3>

      {error && <div className="alert alert-danger">{error}</div>}

      <input
        className="form-control mb-2"
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="form-control mb-3"
        type="password"
        placeholder="Contraseña (mínimo 6 caracteres)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="btn btn-primary me-2" onClick={register}>
        Registrarse
      </button>

      <button className="btn btn-secondary" onClick={login}>
        Iniciar sesión
      </button>
    </div>
  );
}
