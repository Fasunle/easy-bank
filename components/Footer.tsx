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
import { btnWithGradientStyle, mobileFooterContainerStyle } from "./Footer.styles";


const SocialLink = ({href, alt}: {href: string, alt?: string}): JSX.Element => (
    <Link isExternal>
        <Image src={href} width={30} height={30} alt={alt} />
    </Link>
);

const Invite = () => (
    <VStack gap={'1rem'} p={{sm: '1rem 0 2rem', md: "0"}}>
        <Box
            as="button"
            sx={btnWithGradientStyle}
            >
            Request Invite
        </Box>

        <Text>© Easybank. All Rights Reserved</Text>
    </VStack>
);

const SocialLinks = () => (
    <HStack spacing={'1rem'} >
        <SocialLink href="/images/icon-facebook.svg" alt="Facebook Icon" />
        <SocialLink href="/images/icon-youtube.svg" alt="Youtube Icon" />
        <SocialLink href="/images/icon-twitter.svg" alt="Facebook Icon" />
        <SocialLink href="/images/icon-pinterest.svg" alt="Facebook Icon" />
        <SocialLink href="/images/icon-instagram.svg" alt="Instagram Icon" />
    </HStack>
);

{/* TODO: Justify the text */}
const  AppLinks = () => (
    <VStack sx={{textAlign: "end"}}>
        <EasyLink href="/#about" label="About US"/>
        <EasyLink href="/#contact" label="Contact"/>
        <EasyLink href="/#blog" label="Blog"/>
    </VStack>
);

const  SupportLinks = () => (
    <VStack>
        <EasyLink href="/#careers" label="Careers"/>
        <EasyLink href="/#support" label="Support"/>
        <EasyLink href="/#policy" label="Privacy Policy"/>
    </VStack>
);


const Footer = () => (
   <>
        <VStack as="footer" sx={mobileFooterContainerStyle}>
            <VStack sx={{justifyContent: "space-around", h: '8rem'}}>
                <Box bgColor={'white'}>
                    {<Logo /> || <Heading as="h2">EasyBank</Heading>}
                </Box>
                <SocialLinks />
            </VStack>

            <AppLinks/>
            <SupportLinks/>
            <Invite />
        </VStack>

        <Grid as="footer" templateColumns='repeat(15, 1fr)' gap={6} h={'10rem'} sx={{bg: "primary_1", color: "gray.300", display: {
            sm: 'none',
            lg: 'grid'
        }}}>
            <GridItem w='100%' colStart={2} colSpan={3} h='100%' sx={{display: 'flex'}}>

                <VStack sx={{justifyContent: "space-around"}}>
                    <Box bgColor={'white'}>
                        {<Logo /> || <Heading as="h2">EasyBank</Heading>}
                    </Box>
                        
                    <SocialLinks/>
                </VStack>

            </GridItem>

            <GridItem w='100%' colStart={5} colSpan={3} h='100%' sx={{display: 'flex', justifyContent: "start", alignItems: "center"}}>
                <AppLinks/>
            </GridItem>

            <GridItem w='100%' colStart={8} colSpan={3} h='100%' sx={{display: 'flex', justifyContent: "start", alignItems: "center"}}>
                <SupportLinks/>
            </GridItem>


            <GridItem w='100%' colStart={11} colSpan={4} h='100%' sx={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
                <Invite />
            </GridItem>
        </Grid>
   </>
);

export default Footer;
