import { Grid, Icon } from '@chakra-ui/react'
import { IconType } from "react-icons"
import {
  FaWindows,
  FaApple,
  FaXbox,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe} from 'react-icons/bs'
import {
  SiPlaystation5,
  SiPlaystation4,
  SiPlaystation3,
  SiWii,
  SiNintendoswitch,
  SiStadia,
} from "react-icons/si"; 
import { RiXboxLine } from "react-icons/ri";
import { LiaXbox } from "react-icons/lia";
import { Platform } from '../hooks/usePlatforms';

interface Props {
  platforms: {platform: Platform}[]
}

const PlatformIconList = ({platforms}: Props) => {
    const iconMap: { [key: string]: IconType } = {
        "PC": FaWindows,
        "PlayStation 3": SiPlaystation3,
        "PlayStation 4": SiPlaystation4,
        "Xbox One": FaXbox,
        "Wii U": SiWii,
        "Nintendo Switch": SiNintendoswitch,
        "Google Stadia": SiStadia,
        "Linux": FaLinux,
        "macOS": FaApple,
        "PlayStation 5": SiPlaystation5,
        "Android": FaAndroid,
        "iOS": MdPhoneIphone,
        "Web": BsGlobe,
        "Xbox Series S/X": RiXboxLine,
        "Xbox 360": LiaXbox,
    };

  return (
    <Grid templateColumns='repeat(6, 1fr)' gap={1}>
      {platforms.map(({ platform }) => (
        <Icon key={platform.id} as={iconMap[platform.name]} color='gray.500' fontSize={25} />
      ))}
    </Grid>
  );
}

export default PlatformIconList