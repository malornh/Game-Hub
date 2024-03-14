import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/game-hub.webp'
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => <HStack padding='10px'>
  <Image src={logo} boxSize='100px' />
  <SearchInput />
  <ColorModeSwitch />
</HStack>

export default NavBar