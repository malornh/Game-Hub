import { Button } from '@chakra-ui/button'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'
import { BsChevronDown } from 'react-icons/bs'
import usePlaforms, { Platform } from '../hooks/usePlatforms'
import { useState } from 'react';

interface Props {
  onSelectPlatform: (platform: Platform | null) => void;
}

const PlatformSelector = ({ onSelectPlatform }: Props) => {
  const { data, error } = usePlaforms();
  const [platform, setPlatform] = useState<Platform>();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        <div>{platform?.name || 'Platforms'}</div>
      </MenuButton>
      <MenuList>
        {data.map((p) => (
          <MenuItem onClick={() => {onSelectPlatform(p); setPlatform(p)}} key={p.id}>{p.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
