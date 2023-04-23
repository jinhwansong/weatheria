import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient,QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <QueryClientProvider client={new QueryClient()}>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </QueryClientProvider>
);
