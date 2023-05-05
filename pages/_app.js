import "@component/styles/globals.css";
import Main from "@component/src/components/Main";
import { Literata, Roboto } from "next/font/google";

const roboto = Roboto({ weight: [ "100", "300", "400", "500", "700", "900"], subsets: ["latin"] });
const lit = Literata({ weight: [ "200", "300", "400", "500", "700", "900"], subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={lit.className}>
        <Main>
          <Component {...pageProps} />
        </Main>
      </main>
    </>
  );
}
