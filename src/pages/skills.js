import Head from 'next/head'
import Nav from '../components/Nav'
import SkillsHero from '../components/SkillsHero'

function Skills() {
    return (
        <>
            <Head>
                <title>Skills | Yiğit Bozyaka</title>
                <meta property="og:title" content="Skills | Yiğit Bozyaka" />
                <meta property="og:description" content="As a skilled coder, I specialize in web development and have expertise in React.js and Next.js. From crafting responsive designs to building interactive websites. Visit my skills page to see how my coding expertise can help bring your ideas to life." />
                <meta name="description" content="As a skilled coder, I specialize in web development and have expertise in React.js and Next.js. From crafting responsive designs to building interactive websites. Visit my skills page to see how my coding expertise can help bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <SkillsHero />
        </>
    )
}

export default Skills;