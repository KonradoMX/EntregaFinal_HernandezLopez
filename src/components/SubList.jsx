import SubItem from "./SubItem";
import { Container } from "@chakra-ui/react";

const SubList = ({ pixeles }) => {
  return (
    <>
      <Container maxW="container.sm" className="main-catalogue">
        {pixeles?.map((pixel) => (
          <SubItem
            key={pixel.id}
            id={pixel.id}
            nombre={pixel.nombre}
            precio={pixel.precio}
            corta={pixel.d_corta}
            larga={pixel.d_larga}
            stock={pixel.stock}
            subcategoria={pixel.subcategoria}
            imagenT={pixel.imagenT}
            imagen={pixel.imagen}
          />
        ))}
      </Container>
    </>
  );
};

export default SubList;
