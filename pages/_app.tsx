import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from '../theme'

// font weights
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/700.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
        <Navbar/>
        <Component {...pageProps} />
        <Footer />
    </ChakraProvider>
  )
  
}

export default MyApp;
