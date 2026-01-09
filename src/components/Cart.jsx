export default function Cart({ cart, onRemove }) {
  const total = cart.reduce((acc, p) => acc + p.price * p.qty, 0);

  return (
    <div className="bg-white border rounded p-3">
      <h5 className="border-bottom pb-2 mb-3"> Carrito</h5>

      {cart.length === 0 && <p className="text-muted">Carrito vacío</p>}

      {cart.map((p) => (
        <div
          key={p.id}
          className="d-flex justify-content-between align-items-center mb-2"
        >
          <div>
            <small>{p.name}</small>
            <br />
            <small className="text-muted">
              {p.qty} x ${p.price.toLocaleString("es-CL")}
            </small>
          </div>

          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => onRemove(p.id)}
            title="Eliminar producto"
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      ))}

      <hr />
      <strong>Total: ${total.toLocaleString("es-CL")}</strong>

      <button
        className="btn btn-success w-100 mt-3"
        onClick={() => {
          document.getElementById("contacto").scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        Agendar pedido
      </button>
    </div>
  );
}
