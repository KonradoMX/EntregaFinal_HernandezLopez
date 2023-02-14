import Item from "./Item";
import { Container } from "@chakra-ui/react";
const ItemList = ({ pixeles }) => {
  return (
    <>
      <Container maxW="container.sm" className="main-catalogue">
        {pixeles?.map((pixel) => (
          <Item
            key={pixel.id}
            id={pixel.id}
            nombre={pixel.nombre}
            descripcion={pixel.descripcion}
            precio={pixel.precio}
            stock={pixel.stock}
            categoria={pixel.categoria}
            subcategoria={pixel.subcategoria}
            imagen={pixel.imagen}
          />
        ))}
      </Container>
    </>
  );
};

export default ItemList;
