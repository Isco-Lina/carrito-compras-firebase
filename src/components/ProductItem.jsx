export default function ProductItem({ product, onAdd }) {
  return (
    <div className="product-row">
      <div>
        <strong>{product.name}</strong>
        <br />
        <small className="text-muted">{product.desc}</small>
      </div>

      <div className="d-flex align-items-center gap-3">
        <span className="fw-bold">
          ${product.price.toLocaleString("es-CL")}
        </span>
        <button
          className="btn btn-warning btn-sm"
          onClick={() => onAdd(product)}
        >
          Agregar
        </button>
      </div>
    </div>
  );
}
