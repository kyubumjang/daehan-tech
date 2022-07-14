import { Routes, Route } from 'react-router-dom';
import HomePage from '@pages/HomePage';
import NotFoundPage from '@pages/NotFound';
import Layout from '@layouts/layout';
import './styles/App.less';
import GlobalStyle from '@styles/GlobalStyle';
import { ThemeProvider } from '@emotion/react';
import theme from '@themes/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
