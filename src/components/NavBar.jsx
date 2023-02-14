//El nombre del componente empieza con mayúsculas.
//Ver los snippets de la extensión de react para ahorrar escribir líneas de código cono rcc, rcp, etc. Más útil Rafce

import CartWidget from "./CartWidget";
import { Container, Flex, Spacer, Box, Heading } from '@chakra-ui/react'
import { Menu, MenuButton, MenuList, MenuItem, Avatar } from '@chakra-ui/react'
import { Link } from "react-router-dom"
const NavBar = () => {
  return(
    <>
      <Container maxW="150rem" bg="blue.100" color="#262626">
        <Flex alignContent="center" gap={"2"}>
            <Avatar
                size="xl"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbestanimations.com%2FAnimals%2FMammals%2FCats%2Fcats%2Fcute-kitty-animated-gif-2.gif&f=1&nofb=1&ipt=1f3df82d9e2e0f3d67d45df20a6a4a7728556ad7b7f755ffc1eeabd79d519d1a&ipo=images"
            />
            <Box p="8" color="white" >
                <Heading>
                    <Link to={"/"}>ADA MIAU PIXEL STORE</Link>
                </Heading>
            </Box>
            <Spacer />
        </Flex>
      </Container>
      <Container maxW="50rem" bg="white" color="#333333">
      <Flex alignContent="center" gap={"2"}>
          <Box p="2" color="black">
            <Menu>
                <Link to={`/categoria/${"Videojuegos"}`}> 
                    <MenuButton>Videojuegos</MenuButton>
                </Link>
              <MenuList>
                <MenuItem as='a' href='#'>Videojuego 1</MenuItem>
                <MenuItem as='a' href='#'>Videojuego 2</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Spacer />
          <Box p="2" color="black">
            <Menu>
            <Link to={`/categoria/${"Animes"}`}>
                    <MenuButton>Anime</MenuButton>
                </Link>
              <MenuList>
                <MenuItem as='a' href='#'>Anime 1</MenuItem>
                <MenuItem as='a' href='#'>Anime 2</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Spacer />
          <Box p="2" color="black">
            <Menu>
            <Link to={`/categoria/${"Caricaturas"}`}>
                    <MenuButton>Caricaturas</MenuButton>
                </Link>
              <MenuList>
                <MenuItem as='a' href='#'>Serie 1</MenuItem>
                <MenuItem as='a' href='#'>Serie 2</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Spacer />
          <Box p="2" color="black">
            <Menu>
            <Link to={`/categoria/${"3Ds"}`}>
                    <MenuButton>3D</MenuButton>
                </Link>
              <MenuList>
                <MenuItem as='a' href='#'>3D 1</MenuItem>
                <MenuItem as='a' href='#'>3D 2</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Spacer />
          <Box p="2" color="black">
            <Menu>
            <Link to={`/categoria/${"Cuadros"}`}>
                    <MenuButton>Cuadros</MenuButton>
                </Link>
              <MenuList>
                <MenuItem as='a' href='#'>Cuadro 1</MenuItem>
                <MenuItem as='a' href='#'>Cuadro 2</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Spacer />
          <Box p="2" color="black">
            <Link to={"/Carrito "}>
                <CartWidget />
            </Link>
          </Box>
        </Flex>
      </Container>
    </>
  )
};

export default NavBar