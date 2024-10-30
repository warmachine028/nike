import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from 'next-themes';
import { MenuProvider } from './contexts/MenuContext';
import './assets/styles/base.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider
      attribute="class"
      enableSystem={true}
      defaultTheme="system"
      themes={['light', 'dark']}
      transitionDuration={300}
      disableTransitionOnChange
    >
      <MenuProvider>
        <App />
      </MenuProvider>
    </ThemeProvider>
  </StrictMode>
);
