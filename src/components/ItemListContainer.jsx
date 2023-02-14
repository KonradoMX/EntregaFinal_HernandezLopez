import React from 'react'
import { useParams } from 'react-router-dom';
import { Heading, Center } from "@chakra-ui/react";
import Data from "../datos.json"
import ItemList from './ItemList';

const ItemListContainer = () => {
  const { categoria } = useParams();

  const catFilter = Data.filter((pixel) => pixel.categoria === categoria);
  return (
    <div>
      <Center bg="#D6EAF8" h="100px" color="black">
        <Heading as="h2" size="2xl">
          Pixeles por {categoria}
        </Heading>
      </Center>
      {categoria ? <ItemList pixeles={catFilter} /> : <ItemList pixeles={Data} />}
    </div>
  );
}

export default ItemListContainer

/*

*/