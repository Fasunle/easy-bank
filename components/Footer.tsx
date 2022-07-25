import Image from "next/image";
import { 
    Box, 
    Heading, 
    Link, 
    Text, 
    HStack, 
    VStack, 
    Grid, 
    GridItem
 } from "@chakra-ui/react";
import {Logo, EasyLink } from "./utils";


const btnWithGradientStyle = {
    textAlign: "center",
    padding: "1em 3em",
    transition: "0.3s",
    borderRadius: "100px",
    color: "white",
    fontWeight: "600",
    opacity: "0.8",
    bgGradient:"linear(to-br, hsl(136, 65%, 51%) 0, hsl(192, 70%, 51%) 100%)",
    _hover: {
        opacity: "1",
        transform: "scale(1.05)"
    }
}

const SocialLink = ({href, alt}: {href: string, alt?: string}): JSX.Element => (
    <Link isExternal>
        <Image src={href} width={30} height={30} alt={alt} />
    </Link>
);

const Footer = () => (
   <Grid templateColumns='repeat(15, 1fr)' gap={6} h={'10rem'} sx={{bg: "primary_1", color: "gray.300"}}>
        <GridItem w='100%' colStart={2} colSpan={3} h='100%' sx={{display: 'flex'}}>

            <VStack sx={{justifyContent: "space-around"}}>
                <Box bgColor={'white'}>
                    {<Logo /> || <Heading as="h2">EasyBank</Heading>}
                </Box>
                    
                <HStack spacing={'1rem'} >
                    <SocialLink href="/images/icon-facebook.svg" alt="Facebook Icon" />
                    <SocialLink href="/images/icon-youtube.svg" alt="Youtube Icon" />
                    <SocialLink href="/images/icon-twitter.svg" alt="Facebook Icon" />
                    <SocialLink href="/images/icon-pinterest.svg" alt="Facebook Icon" />
                    <SocialLink href="/images/icon-instagram.svg" alt="Instagram Icon" />
                </HStack>
            </VStack>

        </GridItem>

        <GridItem w='100%' colStart={5} colSpan={3} h='100%' sx={{display: 'flex', justifyContent: "start", alignItems: "center"}}>
            {/* TODO: Justify the text */}
            <VStack sx={{textAlign: "end"}}>
                <EasyLink href="/#about" label="About US"/>
                <EasyLink href="/#contact" label="Contact"/>
                <EasyLink href="/#blog" label="Blog"/>
            </VStack>
        </GridItem>

        <GridItem w='100%' colStart={8} colSpan={3} h='100%' sx={{display: 'flex', justifyContent: "start", alignItems: "center"}}>
            <VStack>
                <EasyLink href="/#careers" label="Careers"/>
                <EasyLink href="/#support" label="Support"/>
                <EasyLink href="/#policy" label="Privacy Policy"/>
            </VStack>
        </GridItem>


        <GridItem w='100%' colStart={11} colSpan={4} h='100%' sx={{display: 'flex', justifyContent: "center", alignItems: "center"}}>

            <VStack gap={'1rem'}>
                <Box
                    as="button"
                    sx={btnWithGradientStyle}
                    >
                    Request Invite
                </Box>

                <Text>© Easybank. All Rights Reserved</Text>
            </VStack>
        </GridItem>
    </Grid>
);

export default Footer;