import React, { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import fakeArray from "./mook.json";
import ItemList from "./ItemList/ItemList";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";

export default function ItemListContainer({ greeting }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const param = useParams();
  console.log(param.categoryId);

  useEffect(() => {
    setLoading(true);
    const products = new Promise((resolve, reject) => {
      setTimeout(() => {
        setLoading(false);
        if (resolve(fakeArray)) {
          console.log("se resolvio bien");
        } else {
          reject("error: " + reject);
        }
      }, 2000);
    });

    products.then((response) => {
      setData(response);
    });
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div>
          <h1>{greeting}</h1>
          <ItemCount />
          <ItemList data={data} />
        </div>
      )}
    </div>
  );
}
