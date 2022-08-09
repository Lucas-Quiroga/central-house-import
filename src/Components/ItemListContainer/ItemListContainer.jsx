import React from "react";
import ItemCount from "../ItemCount/ItemCount";

export default function ItemListContainer({ greeting }) {
  return (
    <div>
      <h1>{greeting}</h1>
      <ItemCount />
    </div>
  );
}
