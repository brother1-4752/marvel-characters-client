import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import client from "./client";
import { ApolloProvider } from "@apollo/client";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <ApolloProvider client={client}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ApolloProvider>
    </RecoilRoot>
  </React.StrictMode>
);
