import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

interface Props{
    onSelectSortOrder: (sortOrder: string) => void
}

const SortSelector = ({onSelectSortOrder}: Props) => {
const sortOrders = [
    {value: '', label: 'Relevance'},
    {value: 'name', label: 'Name'},
    {value: '-added', label: 'Date added'},
    {value: 'released', label: 'Newest released'},
    {value: '-released', label: 'Oldest released'},
    {value: 'metacritic', label: 'Popularity'}
];
const [selectedOrder, setSelectedOrder] = useState('Relevance');

    return (
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          <div>{'Order by: ' + selectedOrder}</div>
        </MenuButton>
        <MenuList>
          {sortOrders.map((order) => (
            <MenuItem onClick={()=>{onSelectSortOrder(order.value); setSelectedOrder(order.label)}} key={order.value} value={order.value}>{order.label}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    );
}

export default SortSelector