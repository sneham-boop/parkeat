import "@component/styles/globals.css";
import Main from "@component/src/components/Main";
import { Work_Sans } from "next/font/google";

const work = Work_Sans({ weight: ["100", "200", "400", "500", "800", "900"], subsets: ["latin"] });

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
