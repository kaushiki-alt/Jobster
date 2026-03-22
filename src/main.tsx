import { createRoot } from 'react-dom/client'
import 'normalize.css'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import App from './App.tsx'
import { StrictMode } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserProvider } from './context/UserContext.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <App />
        </UserProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
)
