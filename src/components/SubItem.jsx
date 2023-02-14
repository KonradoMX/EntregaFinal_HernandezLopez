import React from "react";
import {ButtonGroup, Button, Text, Center, Flex, Badge, Avatar, Box} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const loadImage = imageName => (require(`../assets/${imageName}`).default);


const SubItem = ({ id, nombre, corta, precio, stock, categoria, subcategoria, imagenT }) => {
  return (
    <div>
      <div key={id}>
        <Center>
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Center p="1rem">
                <Flex>
                    <Avatar src={imagenT} />
                    <Box ml='3'>
                        <Text fontWeight='bold'>
                        {nombre}
                        <Badge ml='1' colorScheme='green'>
                            Nuevo
                        </Badge>
                        </Text>
                        <Text fontSize='sm'>{corta}</Text>
                    </Box>
                </Flex>
            </Center>
            <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                    <Link to={`/articulo/${id}`}>Detalles</Link>
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                    Agregar al carrito
                </Button>
            </ButtonGroup>
        </Box>
        </Center>
      </div>
    </div>
  );
};

export default SubItem;
