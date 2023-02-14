import React from 'react'
import { useParams } from 'react-router-dom';
import { Heading, Center } from "@chakra-ui/react";
import Data from "../datosSub.json"
import SubList from './SubList';

const ItemListContainer = () => {
  const { subcategoria } = useParams();

  const catFilter = Data.filter((pixel) => pixel.subcategoria === subcategoria);
  return (
    <div>
      <Center bg="#D6EAF8" h="100px" color="black">
        <Heading as="h2" size="2xl">
          Pixeles por {subcategoria}
        </Heading>
      </Center>
      {subcategoria ? <SubList pixeles={catFilter} /> : <SubList pixeles={Data} />}
    </div>
  );
}

export default ItemListContainer

/*

*/