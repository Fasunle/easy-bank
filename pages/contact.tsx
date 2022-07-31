import { Box } from '@chakra-ui/react';

import { Hero } from '../components/contact/Hero';

import type { NextPage } from 'next';


const Contact: NextPage = () => {
    return (
        <Box as="main" mt={'1rem'}>
            <Hero />
        </Box>
    );
}


export default Contact;