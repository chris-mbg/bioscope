import React from "react";
import ReactDOM from "react-dom";
import "./App.scss";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ViewedContextProvider from "./contexts/ViewedContextProvider";
import { QueryParamProvider } from "use-query-params";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 10, // 10 min
      cacheTime: 1000 * 60 * 60, // 1h
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ViewedContextProvider>
        <BrowserRouter basename={'/bioscope'}>
          <QueryParamProvider ReactRouterRoute={Route}>
            <App />
          </QueryParamProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </BrowserRouter>
      </ViewedContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
