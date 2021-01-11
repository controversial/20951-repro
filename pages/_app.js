import { useEffect } from 'react';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
