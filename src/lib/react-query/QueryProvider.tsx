import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const queryClint = new QueryClient();

function QueryProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClint}>{children}</QueryClientProvider>
  );
}

export { QueryProvider };
