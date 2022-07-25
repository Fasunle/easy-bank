import NextLink from "next/link";
import Image from "next/image";
import {Link} from "@chakra-ui/react"


type EasyLinkType = {
    label: string, 
    href: string
}

export const Logo = () => (
    <NextLink href="/" passHref>
        <Link>
            <Image src="/images/logo.svg" height={'30'} width={'130'}/>
        </Link>
    </NextLink>
);

export const EasyLink = ({label, href}: EasyLinkType): JSX.Element => (
    <NextLink href={`${href}`} passHref>
        <Link>{label}</Link>
    </NextLink>
);