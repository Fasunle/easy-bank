import { Box, Grid, GridItem, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';

type ArticleType = {
    id: number;
    author: string;
    title: string;
    description: string;
    url: string;
}

const desktopSectionConatainer = {
    maxH: "max-content",
    "gridTemplateColumns": "repeat(12, 1fr)",
    "columnGap": "1em",
    "display": {
        "sm": "none",
        "lg": "grid"
    },
    bg: "neutral_3"
}

const articles: ArticleType[] = [
    {
        id: 1,
        author: "Claire Robinson",
        title: "Receive money in any currency with no fees",
        description: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single",
        url: "/images/image-currency.jpg"
    },
    {
        id: 2,
        author: "Wilson Hutton",
        title: "Treat yourself without worrying about money",
        description: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you",
        url: "/images/image-restaurant.jpg"
    },
    {
        id: 3,
        author: "Wilson Hutton",
        title: "Take your Easybank card wherever you go",
        description: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you",
        url: "/images/image-confetti.jpg"
    },
    {
        id: 4,
        author: "Claire Robinson",
        title: "Our invite-only Beta accounts are now live!",
        description: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site",
        url: "/images/image-plane.jpg"
    },

];

export const Article = () => (
    <>
        <Grid as="section" sx={desktopSectionConatainer}>
            <GridItem sx={{gridColumnStart: 2, gridColumnEnd: "12", py: '2rem'}} my="auto">
                <Heading as="h3" sx={{fontSize: '3xl', color: 'blackAlpha.800', fontWeight: 'medium'}}>Latest Articles</Heading>

                <HStack as="article" gap="1rem" mt="3rem">
                    {
                        articles.map( (article: ArticleType) => (
                            <VStack key={article.id} minH="100%">
                                <Box sx={{w: 'full', h: '12.5rem', pos: 'relative'}}>
                                    <Image 
                                        src={article.url} 
                                        layout="fill" 
                                        style={{'borderTopRightRadius': '3%', 'borderTopLeftRadius': '3%'}} 
                                        alt={article.title} 
                                    />
                                </Box>

                                <Box sx={{px: "1rem"}}>
                                    <Heading as="h5" sx={{fontSize: "sm", color: "blackAlpha.600"}}>By {article.author}</Heading>
                                    <Heading as="h2" sx={{fontSize: "lg", pt: "1rem", color: "blackAlpha.800", _hover: {color: "green.400"}}}>{article.title}</Heading>
                                    <Text sx={{py: "1rem"}}>{article.description}</Text>
                                </Box>
                            </VStack>
                        ))
                    }
                </HStack>
            </GridItem>
        </Grid>

    </>
);
