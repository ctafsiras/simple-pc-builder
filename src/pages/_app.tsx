import NavMenu from "@/components/NavMenu";
import "@/styles/globals.css";
import theme from "@/styles/theme";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Footer from "@/components/Footer";
import { BuilderContextProvider } from "@/context/builderContext";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <BuilderContextProvider>
      <SessionProvider session={session}>
        <ConfigProvider theme={theme}>
          <NavMenu />
          <Component {...pageProps} />
          <Footer />
        </ConfigProvider>
      </SessionProvider>
    </BuilderContextProvider>
  );
}
