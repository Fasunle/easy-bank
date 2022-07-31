import { Box } from '@chakra-ui/react';

import { Hero, WhyUs } from '../components/contact';

import type { NextPage } from 'next';

const Contact: NextPage = () => {
    return (
        <Box as="main" mt={'1rem'}>
            <Hero />
            <WhyUs />
        </Box>
    );
}


export default Contact;