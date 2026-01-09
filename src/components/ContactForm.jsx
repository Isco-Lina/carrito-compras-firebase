import { useRef, useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [, forceUpdate] = useState();
  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "Este campo es obligatorio.",
        email: "Debe ingresar un correo electrónico válido.",
        min: "Debe ingresar al menos :min caracteres.",
        alpha_space: "Solo se permiten letras y espacios.",
      },
    })
  );

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validator.current.allValid()) {
      await addDoc(collection(db, "contactos"), {
        ...form,
        fecha: new Date(),
      });

      alert("Mensaje enviado correctamente");

      setForm({
        nombre: "",
        email: "",
        mensaje: "",
      });

      validator.current.hideMessages();
    } else {
      validator.current.showMessages();
      forceUpdate(1);
    }
  };

  return (
    <div id="contacto" className="bg-white border rounded p-4 mt-4">
      <h4 className="mb-3"> Contacto</h4>

      <form onSubmit={handleSubmit}>
        {/* Nombre */}
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            value={form.nombre}
            onChange={handleChange}
            onBlur={() => validator.current.showMessageFor("nombre")}
          />

          <div className="text-danger">
            {validator.current.message(
              "nombre",
              form.nombre,
              "required|alpha_space"
            )}
          </div>
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={form.email}
            onChange={handleChange}
            onBlur={() => validator.current.showMessageFor("email")}
          />
          <div className="text-danger">
            {validator.current.message("email", form.email, "required|email")}
          </div>
        </div>

        {/* Mensaje */}
        <div className="mb-3">
          <label className="form-label">Mensaje</label>
          <textarea
            name="mensaje"
            className="form-control"
            rows="3"
            value={form.mensaje}
            onChange={handleChange}
            onBlur={() => validator.current.showMessageFor("mensaje")}
          />
          <div className="text-danger">
            {validator.current.message(
              "mensaje",
              form.mensaje,
              "required|min:10"
            )}
          </div>
        </div>

        <button className="btn btn-success w-100">Enviar</button>
      </form>
    </div>
  );
}
