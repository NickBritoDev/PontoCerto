import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';

const config = { initialColorMode: 'light', useSystemColorMode: false, }
const theme = extendTheme({ config })

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);