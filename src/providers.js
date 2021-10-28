import React from "react";
import App from "./App";
import { ResetCSS } from "./global/resetcss";
import GithubProvider from "./components/providers/githubProviders";

const Providers = () => {
  return (
    <main>
      <GithubProvider>
        <ResetCSS />
        <App />
      </GithubProvider>
    </main>
  );
};

export default Providers;