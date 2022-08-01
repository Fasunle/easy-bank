import { Box, Grid, GridItem, Heading, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';

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

const ArticleTemplate = ({author, description, id, title, url}: ArticleType) => (
    <VStack key={id} minH="100%" bg='white'>
        <Box sx={{w: 'full', h: '12.5rem', pos: 'relative'}}>
            <Image 
                src={url} 
                layout="fill"  
                alt={title} 
            />
        </Box>

        <Box sx={{px: "1rem"}}>
            <Heading as="h5" sx={{fontSize: "sm", color: "blackAlpha.600", mt: '1rem'}}>By {author}</Heading>
            <Heading as="h2" sx={{fontSize: "lg", pt: "1rem", color: "blackAlpha.800", _hover: {color: "green.400"}}}>{title}</Heading>
            <Text sx={{py: "1rem"}}>{description}</Text>
        </Box>
    </VStack>
);

export const Articles = ({articles}: {articles: ArticleType[]}) => (
    <>
        
        <Box as='section' sx={{display: {lg: 'none'}}}>
            <Heading as="h3" sx={{fontSize: '3xl', color: 'blackAlpha.800', fontWeight: 'medium', textAlign: 'center', mt: '1rem'}}>Latest Articles</Heading>
            
            <VStack as="article" gap="1rem" mt="3rem"  flexDir={{lg: 'row', sm: 'column'}}>
                {
                    articles.map( (article: ArticleType) => <ArticleTemplate {...article}/>)
                }
            </VStack>
        </Box>

        <Grid as="section" sx={desktopSectionConatainer}>
            <GridItem sx={{gridColumnStart: 2, gridColumnEnd: "12", py: '2rem'}} my="auto">
                <Heading as="h3" sx={{fontSize: '3xl', color: 'blackAlpha.800', fontWeight: 'medium'}}>Latest Articles</Heading>
                
                <VStack as="article" gap="1rem" mt="3rem"  flexDir={{lg: 'row', sm: 'column'}}>
                    {
                        articles.map( (article: ArticleType) => <ArticleTemplate {...article}/>)
                    }
                </VStack>
            </GridItem>
        </Grid>

    </>
);
