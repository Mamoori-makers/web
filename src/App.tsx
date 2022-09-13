import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import { Layout } from '@/layout';
import { Home, My, NotFound } from '@/pages';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { theme } from '@/styles/theme';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RecoilRoot>
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="my" element={<My />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </RecoilRoot>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
