import { motion } from "framer-motion";

export default function AboutMe() {
    return (
        <div className="h-[80vh] mx-4 md:container md:mx-auto space-y-8 flex flex-col items-center justify-center max-w-full text-white text-center">

            <motion.div
                initial={{
                    y: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                transition={{
                    duration: 1,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                    scale: 1,
                }}
            >
                <h3 className="uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
                    hire me
                </h3>
            </motion.div>

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
                className="flex flex-col items-center space-y-8"
            >
                <h1 className="text-4xl md:text-6xl font-bold">
                    Let's work together
                </h1>

                <p className="text-center text-gray-400 text-lg md:text-xl md:w-1/2">
                    If you want to hire me as a freelancer or you want to work with me in your company, you can contact me by sending an e-mail.
                </p>
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
            >
                <a href="mailto:yigitbozyaka4@gmail.com" className="bg-[#FF5A5F] text-white px-8 py-4 rounded-full text-lg md:text-xl">
                    Contact Me
                </a>
            </motion.div>


        </div>
    )
}