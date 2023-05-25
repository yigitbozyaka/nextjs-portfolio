import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Yiğit Bozyaka - Web Dev.</title>
        <meta property="og:title" content="Yiğit Bozyaka - Web Dev." />
        <meta property="og:description" content="Over 2.5+ year experience in web development. Expertise in 6 programming languages and have worked with over 6+ frameworks. From front-end development to back-end implementation." />
        <meta name="description" content="Over 2.5+ year experience in web development. Expertise in 6 programming languages and have worked with over 6+ frameworks. From front-end development to back-end implementation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <section id="hero">
          <Hero />
        </section>
      </main>
    </>
  )
}