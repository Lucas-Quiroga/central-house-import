import React, { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import fakeArray from "./mook.json";
import ItemList from "./ItemList/ItemList";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";

export default function ItemListContainer({ greeting }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { categoryId } = useParams();

  // useEffect(() => {

  // }, [])

  //separar la promesa - cart view - 42:34

  useEffect(() => {
    setLoading(true);
    const products = new Promise((resolve, reject) => {
      setTimeout(() => {
        setLoading(false);
        resolve(products);
      }, 2000);
    });
    categoryId
      ? products.then((response) =>
          setData(response.filter((prod) => prod.category === categoryId))
        )
      : products.then((resolve) => {
          setData(resolve);
        });
  }, [categoryId]);

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
