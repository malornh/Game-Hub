import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/game-hub.webp'
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props{
  onSearch: (searchText: string)=>void;
}

const NavBar = ({onSearch}: Props) => <HStack padding='10px'>
  <Image src={logo} boxSize='70px' />
  <SearchInput onSearch={onSearch}/>
  <ColorModeSwitch />
</HStack>

export default NavBar