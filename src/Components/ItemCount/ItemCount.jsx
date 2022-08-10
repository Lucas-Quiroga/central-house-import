import React, { useState } from "react";

export default function ItemCount({ stock, intial, onAdd }) {
  intial = 0;
  const [cant, setCant] = useState(intial);
  stock = 2;

  const handdleValue = (assignment) => {
    const result = cant + assignment;
    if (result <= stock && result >= 1) {
      setCant(cant + assignment);
    } else {
      alert("you can't add/remove more products");
    }
  };

  return (
    <div>
      <div className="contenedor">
        <h2>stock disponible: {stock}</h2>
        <button onClick={() => handdleValue(-1)}>-</button>
        <span>{cant}</span>
        <button onClick={() => handdleValue(+1)}>+</button>
        <button>agregar al carrito</button>
      </div>
    </div>
  );
}
