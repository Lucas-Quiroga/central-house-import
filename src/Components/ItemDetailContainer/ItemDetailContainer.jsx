import React, { useState, useEffect } from "react";
// import fakeArray from "./../ItemListContainer/mook.json";
import ItemDetail from "./ItemDetail/ItemDetail";

const fake = [
  {
    id: 1,
    title: "blue razz",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni explicabo ex quasi necessitatibus a. Veniam dolorum animi temporibus in voluptates.",
    price: 20,
    photo: "./fume vape/fume1.jpg",
  },
];

export default function ItemDetailContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getItem = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(fake);
      }, 2000);
    });

    getItem.then((response) => {
      setData(response);
    });
  }, []);

  return (
    <div>
      {data.map((e, i) => (
        <ItemDetail key={i} data={e} />
      ))}
    </div>
  );
}
