import { motion } from "framer-motion";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md"

export default function AboutMe() {
    const scrollDown = () => {
        window.scrollTo({
            top: 1000,
            behavior: "smooth",
        });
    };
    return (
        <div className="h-[80vh] mx-4 md:container md:mx-auto space-y-8 flex flex-col items-center justify-center max-w-full text-white">
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
                className="text-3xl font-bold text-center">
                Hello there! I'm <h2 className="inline-block underline">Yiğit Bozyaka</h2>
            </motion.div>
            <motion.div
                initial={{
                    y: 500,
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
                className="text-xl text-gray-300 flex flex-col items-center space-y-8">
                <p>let me talk about myself a little bit.</p>
                <MdOutlineKeyboardDoubleArrowDown
                    onClick={scrollDown}
                    className="text-5xl animate-bounce cursor-pointer"
                />
            </motion.div>
        </div>
    )
}