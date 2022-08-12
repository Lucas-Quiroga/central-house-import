import React, { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import fume1 from "./../../Assets/fume vape/fume1.jpg";
import fume2 from "./../../Assets/fume vape/fume2.jpg";
import fume3 from "./../../Assets/fume vape/fume3.jpg";

const fakeArray = [
  { id: 1, title: "blue razz", price: 20, pictureUtl: { fume1 } },
  { id: 2, title: "purple rain", price: 40, pictureUtl: { fume2 } },
  { id: 3, title: "melon ice", price: 50, pictureUtl: { fume3 } },
];

export default function ItemListContainer({ greeting }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(fakeArray)
      .then((res) => res.json())
      .then((datA) => setData(datA));
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemCount />

      {data.map((e) => (
        <>
          <li>{e.title}</li>
          <li>{e.id}</li>
        </>
      ))}
    </div>
  );
}
