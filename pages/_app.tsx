import type { AppProps } from "next/app";

import Navbar from "../components /Navbar/Navbar";
import { AuthContextProvider } from "../context/AutContext";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Navbar>
        <div className="hs" />
        <Component {...pageProps} />
      </Navbar>
    </AuthContextProvider>
  );
}
