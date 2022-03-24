import "styles/global.css"
import PlausibleProvider from "next-plausible"
import type { AppProps } from "next/app"
import { ThemeProvider } from "next-themes"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="sindri.dk">
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </PlausibleProvider>
  )
}
