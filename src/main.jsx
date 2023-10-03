import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from 'next-themes';
import { MenuProvider } from './contexts/MenuContext';

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
