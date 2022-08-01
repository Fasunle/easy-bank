// Navigation component

import { useState } from "react";
import { Link, Flex, List, Button, Box} from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";


import { 
    btnWithGradientStyle,
    hamburgerIconStyle, 
    inviteLinkStyles, 
    menuListItems, 
    navConatinerStyles, 
    navItemStyles 
} from "./navbar.styles";
import {Logo, EasyLink} from "./utils"; 



const Navbar = () => {

    const [open, setOpen] = useState(true);

    return (
        <Flex as="nav" sx={navConatinerStyles}>
            {/* EasyBank Logo */}
            <Box p='1em'><Logo/></Box>

            <List sx={navItemStyles}>
                <EasyLink href="/" label="Home"/>
                <EasyLink href="/#about" label="About"/>
                <EasyLink href="/contact" label="Contact"/>
                <EasyLink href="/#blog" label="Blog"/>
                <EasyLink href="/#careers" label="Careers"/>
            </List>

            <List sx={inviteLinkStyles}>
                <Box
                    as="button"
                    sx={btnWithGradientStyle}
                    >
                    Request Invite
                </Box>
            </List>

            <Button colorScheme="whiteAlpha" onClick={() => setOpen(!open)} sx={hamburgerIconStyle}>
                {
                    open ? 
                        <Image  src="/images/icon-hamburger.svg" width={32} height={32} alt=""/> :
                        <Image  src="/images/icon-close.svg" width={32} height={32} alt=""/>
                }
            </Button>

            {/* Display this navigation on small screens */}
            <List hidden={open} sx={menuListItems}>
                <EasyLink href="/" label="Home"/>
                <EasyLink href="/#about" label="About"/>
                <EasyLink href="/contact" label="Contact"/>
                <EasyLink href="/#blog" label="Blog"/>
                <EasyLink href="/#careers" label="Careers"/>
            </List>
        </Flex>
    );
}

export default Navbar;