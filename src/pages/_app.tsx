import NavMenu from "@/components/NavMenu";
import "@/styles/globals.css";
import theme from "@/styles/theme";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={theme}>
      <NavMenu />
      <Component {...pageProps} />
    </ConfigProvider>
  );
}
