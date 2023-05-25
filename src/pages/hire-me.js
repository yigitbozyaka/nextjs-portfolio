import Head from 'next/head'
import Nav from '../components/Nav'
import HireMeHero from '../components/HireMeHero'

function HireMe() {
    return (
        <>
            <Head>
                <title>Hire me | Yiğit Bozyaka</title>
                <meta property="og:title" content="Hire me | Yiğit Bozyaka" />
                <meta property="og:description" content="If you want to hire me as a freelancer or you want to work with me in your company check here!" />
                <meta name="description" content="If you want to hire me as a freelancer or you want to work with me in your company check here!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <HireMeHero />
        </>
    )
}

export default HireMe;