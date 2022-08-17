import React, { useState } from "react";

export default function ItemCount({ stock, intial, onAdd }) {
  intial = 0;
  const [cant, setCant] = useState(intial);
  stock = 2;

  const incrementCounter = () => {
    if (cant < stock) {
      setCant((currentValue) => currentValue + 1);
    } else {
      alert("no puede agregar mas cantidad");
    }
  };

  const decrementCounter = () => {
    if (cant > 1) {
      setCant((currentValue) => currentValue - 1);
    } else {
      alert("no puede agregar mas cantidad");
    }
  };
  return (
    <div>
      <div className="contenedor">
        <h2>stock disponible: {stock}</h2>
        <button onClick={decrementCounter}>-</button>
        <span>{cant}</span>
        <button onClick={incrementCounter}>+</button>
        <button>agregar al carrito</button>
      </div>
    </div>
  );
}
