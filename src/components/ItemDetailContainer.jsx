import ItemDetail from "./ItemDetail";
import { useState } from "react";
import Data from "../datosSub.json";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [pixeles, setPixeles] = useState([]);
  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (Data.length === 0) {
        reject(new Error("No hay datos"));
      }
      setTimeout(() => {
        const pixelFilter = Data.filter((pixel) => pixel.id == id);
        resolve(pixelFilter);
      }, 2000);
    });
  };

  async function fetchingData() {
    try {
      const datosFetched = await getDatos();
      setPixeles(datosFetched);
    } catch (err) {
      console.log(err);
    }
  }

  fetchingData();
  return <ItemDetail pixeles={Data} />;
};

export default ItemDetailContainer;
