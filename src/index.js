import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import Normalize from 'react-normalize';
import { ThemeProvider } from 'styled-components';
import { store } from './app/store';
import { GlobalStyle } from './app/GlobalStyle';
import { theme } from './app/theme';
import reportWebVitals from './reportWebVitals';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Normalize />
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
