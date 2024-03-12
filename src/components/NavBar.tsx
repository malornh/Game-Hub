import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/GameHub_logo.webp'

const NavBar = () => {
  return <HStack>
    <Image src={logo} boxSize='100px' />
    <Text>NavBar</Text>
  </HStack>;
}

export default NavBar