import { motion } from "framer-motion";
import DevIcon from "devicon-react-svg";
import { TbBrandCpp, TbBrandNextjs } from "react-icons/tb"; 
import { SiExpress, SiTailwindcss, SiSupabase } from "react-icons/si";

export default function AboutMe() {

    const languages = [
        {
            name: "HTML5",
            icon: "html5",
            color: "#e34f26"
        },
        {
            name: "CSS3",
            icon: "css3",
            color: "#1572b6"
        },
        {
            name: "JavaScript",
            icon: "javascript",
            color: "#f7df1e"
        },
        {
            name: "Python",
            icon: "python",
            color: "#3776ab"
        },
        {
            name: "Java",
            icon: "java",
            color: "#007396"
        },
        {
            name: "C++",
            icon: "cplusplus",
            color: "#00599c"
        }
    ];

    const frameworks = [
        {
            name: "React",
            icon: "react",
            color: "#61dafb"
        },
        {
            name: "Next.js",
            icon: "nextjs",
            color: "#fafafa"
        },
        {
            name: "Node.js",
            icon: "nodejs",
            color: "#339933"
        },
        {
            name: "Discord.js",
            icon: "javascript",
            color: "#7289da"
        },
        {
            name: "Discord.py",
            icon: "python",
            color: "#7289da"  
        },
        {
            name: "Express.js",
            icon: "express",
            color: "#fafafa"
        },
        {
            name: "Tailwind CSS",
            icon: "tailwindcss",
            color: "#38b2ac"
        },
        {
            name: "Bootstrap",
            icon: "bootstrap",
            color: "#7952b3"
        },
        {
            name: "SaSS",
            icon: "sass",
            color: "#cc6699"
        }
    ];

    const databases = [
        {
            name: "MongoDB",
            icon: "mongodb",
            color: "#47a248"
        },
        {
            name: "Supabase",
            icon: "supabase",
            color: "#3ecf8e"
        },
    ]

    return (
        <div className="mx-4 md:container md:mx-auto space-y-16 flex flex-col items-center justify-center max-w-full text-white">

            <motion.div 
                className="mt-10 flex flex-col space-y-8 items-center"
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
                whileInView={{ opacity: 1 }}
            >
                <h3 className="uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
                    languages
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {languages.map((lang, index) => (
                        <div key={index} className="flex flex-col items-center justify-center space-y-2">
                            {lang.icon === "cplusplus" ? (
                                <TbBrandCpp style={{ width: "4.5rem", height: "4.5rem", color: lang.color }} />
                            ) : (
                                <DevIcon icon={lang.icon} style={{ width: "4.5rem", height: "4.5rem", fill: lang.color }} />
                            )}
                            <h1 className="text-xl font-bold">{lang.name}</h1>
                        </div>
                    ))}
                </div>
            </motion.div>

            <motion.div 
                className="flex flex-col space-y-8 items-center"
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
                whileInView={{ opacity: 1 }}
            >
                <h3 className="text-center uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
                    frameworks & libraries
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {frameworks.map((framework, index) => (
                        <div key={index} className="flex flex-col items-center justify-center space-y-2">
                            {framework.icon === "nextjs" ? (
                                <TbBrandNextjs style={{ width: "4.5rem", height: "4.5rem", color: framework.color }} />
                            ) : framework.icon === "express" ? (
                                <SiExpress style={{ width: "4.5rem", height: "4.5rem", color: framework.color }} />
                            ) : framework.icon === "tailwindcss" ? (
                                <SiTailwindcss style={{ width: "4.5rem", height: "4.5rem", color: framework.color }} />
                            ) : (
                                <DevIcon icon={framework.icon} style={{ width: "4.5rem", height: "4.5rem", fill: framework.color }} />
                            )}
                            <h1 className="text-xl font-bold">{framework.name}</h1>
                        </div>
                    ))}
                </div>
            </motion.div>

            <motion.div 
                className="pb-10 flex flex-col space-y-8 items-center"
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
                whileInView={{ opacity: 1 }}
            >
                <h3 className="uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
                    databases
                </h3>
                <div className="flex flex-row items-center gap-4">
                    {databases.map((db, index) => (
                        <div key={index} className="flex flex-col items-center justify-center space-y-2">
                            {db.icon === "supabase" ? (
                                <SiSupabase style={{ width: "4.5rem", height: "4.5rem", color: db.color }} />
                            ) : (
                                <DevIcon icon={db.icon} style={{ width: "4.5rem", height: "4.5rem", fill: db.color }} />
                            )}
                            <h1 className="text-xl font-bold">{db.name}</h1>
                        </div>
                    ))}
                </div>
            </motion.div>

        </div>
    )
}