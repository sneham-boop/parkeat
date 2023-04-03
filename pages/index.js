import Head from "next/head";
import { Inter } from "next/font/google";
import Homepage from "@component/src/components/Homepage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Park&Eat</title>
        <meta
          name="description"
          content="Google maps project created with NextJS."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homepage/>
    </>
  );
}
