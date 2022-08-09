import React, { useState } from "react";

export default function ItemCount({ stock, intial, onAdd }) {
  intial = 0;
  const [cant, setCant] = useState(intial);
  stock = 2;

  const sum = () => {
    return setCant(cant + 1);
  };

  const rest = () => {
    return setCant(cant - 1);
  };

  if (cant > stock) {
    alert("no puedas agregar estos productos");
  }
  return (
    <div>
      <div className="contenedor">
        <h2>stock disponible: {stock}</h2>
        <button onClick={rest}>-</button>
        <span>{cant}</span>
        <button onClick={sum}>+</button>
        <button>agregar al carrito</button>
      </div>
    </div>
  );
}
