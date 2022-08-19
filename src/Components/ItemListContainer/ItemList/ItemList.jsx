import React from "react";
import Item from "./Item/Item";

export default function ItemList({ data }) {
  console.log(data);
  return (
    <div>
      {data.map((resp) => (
        <Item key={resp.id} obj={resp} />
      ))}
    </div>
  );
}
