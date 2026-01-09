import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

export default function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Sesión cerrada correctamente");
    } catch (error) {
      alert("Error al cerrar sesión");
    }
  };

  return (
    <div className="bg-dark text-white p-4 rounded mb-4">
      {/* TÍTULO */}
      <h2 className="mb-1">Ferretería El Maestro</h2>
      <small className="d-block mb-3">
        Herramientas y materiales de construcción
      </small>

      {/* USUARIO */}
      {user && (
        <div className="border-top pt-3 mt-2">
          <div className="small mb-2 text-break">{user.email}</div>

          <button
            className="btn btn-danger btn-sm w-100"
            onClick={handleLogout}
          >
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  );
}
