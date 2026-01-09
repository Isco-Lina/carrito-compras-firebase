import { useState } from "react";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase/firebase";

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      setMessage("Debe seleccionar un archivo");
      setIsError(true);
      return;
    }

    const fileRef = ref(storage, `archivos/${file.name}`);
    await uploadBytes(fileRef, file);

    setMessage("Archivo subido correctamente");
    setIsError(false);
    setFile(null);
  };

  return (
    <div className="bg-white border rounded p-4 mt-4">
      <h4 className="mb-3"> Subir Archivo</h4>

      <input
        type="file"
        className="form-control mb-3"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button className="btn btn-primary" onClick={handleUpload}>
        Subir archivo
      </button>

      {message && (
        <p className={`mt-3 ${isError ? "text-danger" : "text-success"}`}>
          {message}
        </p>
      )}
    </div>
  );
}
