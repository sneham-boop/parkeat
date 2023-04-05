import "@component/styles/globals.css";
import Main from "@component/src/components/Main";


export default function App({ Component, pageProps }) {
  return (
    <>
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  );
}
