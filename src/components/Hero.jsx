import { MdEmail } from "react-icons/md";
import { SocialIcon } from "react-social-icons";
import Link from 'next/link'
import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function Hero() {
  const [text] = useTypewriter({
    words: ["MERN Dev.", "Next.js Dev.", "Discord Bot Dev."],
    loop: true,
    delaySpeed: 3600,
  });

  return (
    <div className="flex flex-col text-white">

      <div className="relative top-24 z-10 space-y-2 text-center">
        <h1 className="text-2xl font-bold capitalize">yiğit bozyaka</h1>
        <h2 className="text-xl font-semibold text-gray-400">
          {text}
          <Cursor cursorColor="#fff" />
        </h2>
      </div>

      <div className="flex justify-center relative z-10 top-32">
        <Link href="/hire-me" className="border-2 border-gray-600 px-8 py-2 rounded-lg flex flex-row items-center gap-2">
          <MdEmail className="text-lg" /> Contact
        </Link>
      </div>
      <div className="flex flex-row space-x-4 justify-center relative z-10 top-44">
        <SocialIcon url="https://github.com/yigitbozyaka" bgColor="white" />
        <SocialIcon url="https://instagram.com/yigitbozyaka" bgColor="white" />
        <SocialIcon url="https://twitter.com/yigitbozyaka" bgColor="white" />
        <SocialIcon
          url="https://linkedin.com/in/yi%C4%9Fit-bozyaka-0768bb193/"
          bgColor="white"
        />
      </div>
      <div className="relative z-10 top-80 container mx-auto w-7/12 sm:w-9/12 md:w-7/12">
        <h2 className="text-left text-2xl text-gray-500 uppercase">Pages</h2>
        <div className="grid gap-6 md:grid-cols-2 my-4">
          <Link href="/about-me">
            <h3 className="text-xl capitalize">about me</h3>
            <p className="text-lg text-gray-500">Talking about myself check here if you want to know me.</p>
          </Link>
          <Link href="/projects">
            <h3 className="text-xl capitalize">projects</h3>
            <p className="text-lg text-gray-500">My fancy projects are here!</p>
          </Link>
          <Link href="/skills">
            <h3 className="text-xl capitalize">skills</h3>
            <p className="text-lg text-gray-500">Which languages and frameworks do I know?</p>
          </Link>
          <Link href="/hire-me">
            <h3 className="text-xl capitalize">hire me</h3>
            <p className="text-lg text-gray-500">Did you check all pages and satisfied then click here!</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
