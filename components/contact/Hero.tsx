import { Box, Grid, GridItem, Heading, Text, VStack } from '@chakra-ui/react';

import { btnWithGradientStyle, desktopSectionConatainer, mobileSectionConatainer } from './contact.styles';
import { heroMobileText } from './Hero.styles';


export const HeroText = () => (
    <VStack sx={heroMobileText}>
        <Heading as="h2">Next generation digital banking</Heading>
        <Text py={'1rem'}>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</Text>
        <Box
            as="button"
            sx={btnWithGradientStyle}
        >
            Request Invite
        </Box>
    </VStack>
);

export const Hero = () => (
    <>
        <VStack sx={mobileSectionConatainer}>
            
            <Box>
                {/* TODO */}
                {/* Place image here */}
            </Box>
            <HeroText />
        </VStack>

        <Grid as="section" sx={desktopSectionConatainer}>
            <GridItem colStart={2} colEnd={5} my="auto">
                <HeroText />
            </GridItem>
            <GridItem colStart={5} colEnd={13}>
                {/* TODO */}
                {/* IMAGE GOES HERE */}
            </GridItem>
        </Grid>
    </>
);