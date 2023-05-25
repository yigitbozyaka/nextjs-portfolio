import Head from "next/head";
import Nav from "../components/Nav";
import AboutMain from "../components/AboutMain";
import AboutHero from "../components/AboutHero";

function AboutMe() {
  return (
    <>
      <Head>
        <title>About me | Yiğit Bozyaka</title>
        <meta property="og:title" content="About me | Yiğit Bozyaka" />
        <meta property="og:description" content="20-years-old passionate developer who loves to code. Explore my portfolio to learn more about me and my experiences..." />
        <meta name="description" content="20-years-old passionate developer who loves to code. Explore my portfolio to learn more about me and my experiences..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <AboutHero />
      <AboutMain />
    </>
  );
}

export default AboutMe;
