import { ThemeProvider } from '@mui/material';
import '@styles/globals.css';
import type { AppProps } from 'next/app';
import Header from 'ui/components/surfaces/Header/Header';
import theme from 'ui/themes/light-theme';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
