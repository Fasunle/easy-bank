// Navigation component

import { Link, Flex, List, Button} from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";


import { 
    hamburgerIconStyle, 
    inviteLinkStyles, 
    navConatinerStyles, 
    navItemStyles 
} from "./navbar.styles";

type EasyLinkType = {
    label: string, 
    href: string
}

const EasyLink = ({label, href}: EasyLinkType): JSX.Element => (
    <NextLink href={`${href}`} passHref>
        <Link>{label}</Link>
    </NextLink>
);


const Logo = () => (
    <NextLink href="/" passHref>
        <Link>
            <Image src="/images/logo.svg" height={'30'} width={'130'}/>
        </Link>
    </NextLink>
);


const Navbar = () => (
    <Flex as="nav" sx={navConatinerStyles}>
        {/* EasyBank Logo */}
        <Logo/>

        <List sx={navItemStyles}>
            <EasyLink href="/" label="Home"/>
            <EasyLink href="/#about" label="About"/>
            <EasyLink href="/#contact" label="Contact"/>
            <EasyLink href="/#blog" label="Blog"/>
            <EasyLink href="/#careers" label="Careers"/>
        </List>

        <List sx={inviteLinkStyles}>
            <EasyLink href="/#invite" label="Request Invite"/>
        </List>

        <Button colorScheme="whiteAlpha" sx={hamburgerIconStyle}>
            <Image  src="/images/icon-hamburger.svg" width={32} height={32}/>
        </Button>
    </Flex>
);

export default Navbar;