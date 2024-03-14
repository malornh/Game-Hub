import { Button } from '@chakra-ui/button'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'
import { BsChevronDown } from 'react-icons/bs'
import usePlaforms from '../hooks/usePlatforms'

const PlatformSelector = () => {
const {data, error} = usePlaforms();

if(error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platforms
        <MenuList>
          {data.map((p) => (
            <MenuItem key={p.id}>{p.name}</MenuItem>
          ))}
        </MenuList>
      </MenuButton>
    </Menu>
  );
}

export default PlatformSelector