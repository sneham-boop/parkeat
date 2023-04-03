import Main from "@component/src/components/Main";
import "@component/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Main>
        <Component {...pageProps} />
      </Main>
      ;
    </>
  );
}
