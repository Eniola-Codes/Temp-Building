import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Layout/Navbar";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <div className="!bg-Dark-theme">
      <Analytics />
      <Head>
        <title>Building you</title>
        <meta
          name="description"
          content="Building you : We are a software development agency focused on building solutions for brands and businesses looking to scale & automate the boring things.
          "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="font-['Inter'] text-white bg-Dark-theme ">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}
