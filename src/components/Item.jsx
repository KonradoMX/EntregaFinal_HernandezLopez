import React from "react";
import {Center, Card, CardBody, Image, Heading, Text, Divider, Stack, CardFooter, Button} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const loadImage = imageName => (require(`../assets/${imageName}`).default);


const Item = ({ id, nombre, descripcion, categoria, subcategoria, imagen }) => {
  return (
    <div>
      <div key={id}>
        <Center p="1rem">
          <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden'    variant='outline'>
            <Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }}       src={imagen} alt='Logo'/>

            <Stack>
              <CardBody>
                <Heading size='md'>{nombre}</Heading>

                <Text py='2'>
                  Categoría: {categoria}
                </Text>
                <Text>{descripcion}</Text>
              </CardBody>

              <CardFooter>
                <Button variant='solid' colorScheme='blue'>
                  <Link to={`/sub/${subcategoria}`}>Catálogo</Link>
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        </Center>
      </div>
    </div>
  );
};

export default Item;
