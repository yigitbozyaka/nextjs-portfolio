import Head from 'next/head'
import Nav from '../components/Nav'
import ProjectsHero from '../components/ProjectsHero'

function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Yiğit Bozyaka</title>
        <meta property="og:title" content="Projects | Yiğit Bozyaka" />
        <meta property="og:description" content="From visually captivating websites to powerful web applications, each project showcases my expertise in web development." />
        <meta name="description" content="From visually captivating websites to powerful web applications, each project showcases my expertise in web development." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <ProjectsHero />
    </>
  )
}

export default Projects;