import { useEffect, useRef } from "react";
import Image from "next/image"

export default function AboutMe() {

    const projects = [
        {
            _id: 1,
            title: "NextJS Blog Website",
            description: "I created this blog website for a friend and I wanted to make it opensource.",
            image:
                "https://i.ibb.co/dgQ8ZcL/image.png",
            demoLink: "https://blog-leyi.vercel.app",
            githubLink: "https://github.com/yigitbozyaka/blog",
        },
        {
            _id: 2,
            title: "Atatürk Quotes Website",
            description:
                "This project for when I was learning react and it can be useful for newbies.",
            image:
                "https://i.ibb.co/grNBpWH/image.png",
            demoLink: "https://github.com/yigitbozyaka/ataturk-quotes",
            githubLink: "https://github.com/yigitbozyaka/ataturk-quotes",
        },
        {
            _id: 3,
            title: "MERN Todo App/Website",
            description:
                "A simple todo app with mongodb, express.js, react.js and node.js",
            image:
                "https://i.ibb.co/VJ2jSvz/image.png",
            githubLink: "https://github.com/yigitbozyaka/mern-todo-app",
        },
    ];

    const scrollToRef = useRef(null);

    useEffect(() => {
        scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }, []);

    return (
        <div ref={scrollToRef} className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="absolute top-36 md:top-28 uppercase tracking-[20px] text-gray-500 text-2xl">
                projects
            </h3>

            <div className="relative w-full flex oimgverflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-thumb-purple-900 scrollbar-transparent">
                {projects.map((project) => (
                    <div className="w-screen flex-shrink-0 snap-start flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen" key={project._id}>
                            <Image
                                className="w-[300px] object-cover hover:w-[450px] duration-500"
                                width={300}
                                height={300}
                                src={project.image}
                                alt={project.title + " showcase"}
                            />
                        <div
                            className="space-y-10 px-0 md:px-10 max-w-6xl text-center"
                        >
                            <h4 className="font-bold text-white text-xl">{project.title}</h4>
                            <p className="text-gray-400 my-8">{project.description}</p>
                        </div>
                        <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                            {project.demoLink ? (<a className="bg-[#2c8dab] hover:bg-[#2c8dab] duration-500 text-white font-bold py-2 px-4 rounded-full" href={project.demoLink} target="_">
                                View Demo
                            </a>) : ""}
                            <a className="bg-[#2c8dab] hover:bg-[#2c8dab] duration-500 text-white font-bold py-2 px-4 rounded-full" href={project.githubLink} target="_">
                                View Code
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full absolute top-[30%] bg-[#2c8dab]/10 left-0 h-[500px] -skew-y-12"></div>
        </div>
    )
}