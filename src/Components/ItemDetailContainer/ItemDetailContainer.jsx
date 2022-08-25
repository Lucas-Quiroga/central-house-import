import React, { useState, useEffect } from "react";
// import fakeArray from "./../ItemListContainer/mook.json";
import ItemDetail from "./ItemDetail/ItemDetail";
import fakeArray from "./../ItemListContainer/mook.json";

export default function ItemDetailContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getItem = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(fakeArray);
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
