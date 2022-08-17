import React, { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import fume1 from "./../../Assets/fume vape/fume1.jpg";
import fume2 from "./../../Assets/fume vape/fume2.jpg";
import fume3 from "./../../Assets/fume vape/fume3.jpg";
import fakeArray from "./mook.json";

export default function ItemListContainer({ greeting }) {
  const [data, setData] = useState([]);

  const products = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (resolve(fakeArray)) {
        console.log("se resolvio bien");
      } else {
        reject("error: " + reject);
      }
    }, 2000);
  });

  useEffect(() => {
    products.then((response) => {
      setData(response);
    });
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemCount />

      {data.map((e, i) => (
        <div key={e.id}>
          <li key={i}>{e.title}</li>
        </div>
      ))}
    </div>
  );
}
