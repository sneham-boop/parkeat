import "@component/styles/globals.css";
import Main from "@component/src/components/Main";
import { Literata } from "next/font/google";

const work = Literata({ weight: [ "200", "400", "500", "800", "900"], subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={work.className}>
        <Main>
          <Component {...pageProps} />
        </Main>
      </main>
    </>
  );
}
