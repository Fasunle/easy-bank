import { 
    Box, 
    Heading, 
    VStack, 
    Text, 
    Grid,
    GridItem,
    HStack
} from "@chakra-ui/react";
import { btnWithGradientStyle } from "./contact.styles";


export const HeroText = () => (
    <VStack sx={{h: '100%', alignItems: 'start', placeContent: 'center', p: '5'}}>

        <Heading as="h1">Next generation digital banking</Heading>
        <Text py={'1rem'}>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</Text>

        <Box
            as="button"
            sx={btnWithGradientStyle}
            >
            Request Invite
        </Box>

    </VStack>
);


// HERO SECTION
export const HeroSection = () => (
    <Grid as="section" templateColumns='repeat(12, 1fr)' gap={6}>
        <GridItem w='100%' h='400' colStart={2} colSpan={4}>
            <HeroText />
        </GridItem>
        <GridItem w='100%' h='400' bg='blue.500' colStart={6} colSpan={7}>
            {/* TODO: PLACE TO IMAGES AND MAKE OVERLAP */}
            {/* image content goes here */}
        </GridItem>
    </Grid>
);

const whyUs = [
    {
        "title": "Online Banking",
        "description": "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
        "id": 1
    },
    {
        "title": "Simple Budgeting",
        "description": "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
        "id": 2
    },
    {
        "title": "Fast Onboarding",
        "description": "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
        "id": 3
    },
    {
        "title": "Open API",
        "description": "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
        "id": 4
    }
]

type InfoType = {
    id: string | number;
    title: string;
    description: string;

}

const Info = ({title, id, description}: InfoType) => (
    <Box key={id}>
        <Box>
            {/* Image */}
        </Box>
        
        <Box>
            <Heading as="h4">{title}</Heading>
            <Text>{description}</Text>
        </Box>
    </Box>
);

const whyUsConatinerStyle = {
    
}

// Why would you choose Us?
export const WhyUsSection = () => (
    <Box>
        <Grid as="section" templateColumns='repeat(12, 1fr)' gap={6}>
            <GridItem w='100%' colStart={2} colSpan={8}>
                <Heading as="h2">Why choose Easybank?</Heading>
                <Text>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</Text>
            </GridItem>
        </Grid>
        <Grid as="section" templateColumns='repeat(12, 1fr)' gap={6}>
            <GridItem w='100%' h='400' colStart={2} colSpan={10}>
                
                <VStack bg="yellow.400" gap="2rem">
                    
                    {
                        whyUs.map( info => (
                            <Info {...info}/>
                        )
                        )
                    }

                </VStack>

            </GridItem>
        </Grid>
    </Box>
);

