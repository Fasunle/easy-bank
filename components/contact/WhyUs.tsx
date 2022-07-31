import { Box, Grid, GridItem, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import Image from "next/image";



type WhyUsType = {
    id: string | number;
    title: string;
    description: string;
    url: string;
}

const desktopSectionConatainer = {
    "gridTemplateColumns": "repeat(12, 1fr)",
    "columnGap": "1em",
    "my": "1em",
    "display": {
        "sm": "none",
        "lg": "grid"
    }
}

// placeholder data
const whyUs = [
    {
        "title": "Online Banking",
        "url": "/images/icon-online.svg",
        "description": "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
        "id": 1
    },
    {
        "title": "Simple Budgeting",
        "url": "/images/icon-budgeting.svg",
        "description": "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
        "id": 2
    },
    {
        "title": "Fast Onboarding",
        "url": "/images/icon-onboarding.svg",
        "description": "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
        "id": 3
    },
    {
        "title": "Open API",
        "url": "/images/icon-api.svg",
        "description": "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
        "id": 4
    }
]

const InformationHeader = () => (
    <VStack sx={{maxW:"60ch", alignItems:"flex-start", p: ".5rem 0 2rem 0"}}>
        <Heading as="h1" sx={{ color: "blackAlpha.700"}} >Why choose Easybank?</Heading>
        <Text sx={{ color: "neutral_1"}}>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</Text>
    </VStack>
);

const InformationBody = ({whyUs}: {whyUs: WhyUsType[]}) => (
    <HStack  sx={{height:'max-content', alignItems:"stretch", columnGap: "1rem"}}>
        {
            whyUs.map( ({id, title, url, description}) => (
                <Box flexGrow="1" maxW="max-content" key={id}>
                    <Box>
                        <Image src={url} width='50%' height='50%' />
                    </Box>

                    <Heading as="h2" sx={{fontSize:"2xl", my:".7em", color: "blackAlpha.700"}}>{title}</Heading>
                    <Text  sx={{fontSize:"lg", mb:"1em", color: "neutral_1"}}>{description}</Text>
                </Box>
            ))
        }
    </HStack>
);

export const WhyUs = () => (
    <>
        <Grid as="section" sx={desktopSectionConatainer}>
            <GridItem sx={{gridColumnStart: 2, gridColumnEnd: "12"}} my="auto">
                <InformationHeader/>
                <InformationBody whyUs={whyUs}/>
            </GridItem>
        </Grid>
    </>
);
