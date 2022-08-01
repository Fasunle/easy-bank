import { Box } from '@chakra-ui/react';

import { Articles, Hero, WhyUs } from '../components/contact';

import type { NextPage } from 'next';

const Contact: NextPage = () => {

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

    return (
        <Box as="main" mt={'1rem'}>
            <Hero />
            <WhyUs />
            <Articles articles={articles}/>
        </Box>
    );
}


export default Contact;