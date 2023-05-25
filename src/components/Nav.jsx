import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

function Nav() {
  return (
    <header className="sticky top-0 p-5 flex justify-between max-w-7xl mx-auto z-20 items-center bg-[#0f0f0f] md:bg-transparent">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        transition={{
          duration: 1,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
      >
        <Link href="/">
          <Image
            className="text-center text-3xl font-bold tracking-widest align-middle cursor-pointer"
            src="/IMG_1542.png"
            width={60}
            height={60}
            alt="Home"
          />
        </Link>
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        transition={{
          duration: 1,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        className="flex flex-row items-center cursor-pointer"
      >
        <Link
          href="/hire-me"
          className="inline-flex ml-4 text-lg capitalize tracking-wider text-white"
        >
          get in touch
        </Link>
      </motion.div>
    </header>
  );
}

export default Nav;
