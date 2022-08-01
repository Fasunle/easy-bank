import NextLink from "next/link";
import Image from "next/image";
import {Link} from "@chakra-ui/react"



export const Logo = () => (
    <NextLink href="/" passHref>
        <Link>
            <Image src="/images/logo.svg" height={'30'} width={'130'} alt="Easy Bank Logo"/>
        </Link>
    </NextLink>
);

export const EasyLink = ({label, href}: EasyLinkType): JSX.Element => (
    <NextLink href={`${href}`} passHref>
        <Link>{label}</Link>
    </NextLink>
);
