import React, { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import fume1 from "./../../Assets/fume vape/fume1.jpg";
import fume2 from "./../../Assets/fume vape/fume2.jpg";
import fume3 from "./../../Assets/fume vape/fume3.jpg";

const fakeArray = [
  { id: 1, title: "blue razz", price: 20 },
  { id: 2, title: "purple rain", price: 40 },
  { id: 3, title: "melon ice", price: 50 },
];

export default function ItemListContainer({ greeting }) {
  const [data, setData] = useState([]);

  // const fakeArrayPromises = async () => {
  //   const resp = await fetch(fakeArray);
  //   const data1 = await resp.json();

  //   data1.map((e) => setData(e));
  //   console.log(data);
  // };

  // useEffect(() => {
  //   fakeArrayPromises().then((resolve) => {
  //     setData(resolve);
  //     console.log(data);
  //   });
  // }, []);

  const promiseClothes = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fakeArray);
    }, 2000);
  });

  useEffect(() => {
    promiseClothes.then((resolve) => {
      setData(resolve);
    });
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
