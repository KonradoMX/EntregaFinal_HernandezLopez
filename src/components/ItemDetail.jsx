import {Center, Card, CardBody, Image, Stack, Heading, Text, Button, CardFooter, Divider} from "@chakra-ui/react";
  import pixelImage from "../assets/x-blaze.png";
  import { useParams } from "react-router-dom";
  import ItemCount from "./ItemCount";
  
  const ItemDetail = ({ pixeles }) => {
    const { id } = useParams();
  
    const pixelFilter = pixeles.filter((pixel) => pixel.id == id);
    return (
      <>
        {pixelFilter.map((pixel) => (
          <div key={pixel.id}>
            <Center p="1rem">
              <Card className="card-main">
                <CardBody>
                  <Center>
                    <Image borderRadius="lg" src={pixel.imagen} />
                  </Center>
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{pixel.nombre}</Heading>
                    <Text color="blue.800" fontSize="l">
                      {pixel.d_corta}
                    </Text>
                    <Text color="blue.800" fontSize="l">
                      {pixel.d_larga}
                    </Text>
                    <Text color="red.600" fontSize="xl">
                      Stock: {pixel.stock}
                    </Text>
                    <Text color="green.600" fontSize="xl">
                      Precio: MXN$ {pixel.precio}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter className="card-footer">
                  <ItemCount stock={pixel.stock} />
                  <Center className="btn-center">
                    <Button variant="solid" colorScheme="blue">
                      Agregar al carrito
                    </Button>
                  </Center>
                </CardFooter>
              </Card>
            </Center>
          </div>
        ))}
      </>
    );
  };
  
  export default ItemDetail;
  