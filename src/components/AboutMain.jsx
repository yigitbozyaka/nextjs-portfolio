import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutMe() {

  const yearInUniversity = new Date().getFullYear() - 2023 + 1;

  function getAge(DOB) {
    var today = new Date();
    var birthDate = new Date(DOB);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age = age - 1;
    }

    return age;
  }

  return (
    <>
      <div className="h-screen mx-4 md:container md:mx-auto flex flex-col md:flex-row items-center justify-evenly max-w-full text-white" id="main">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          transition={{
            duration: .6,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          className="text-3xl font-bold text-center">
          <Image
            src="/IMG_1543.png"
            width={300}
            height={300}
          />
        </motion.div>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          transition={{
            duration: .6,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          className="text-xl text-gray-300 flex flex-col space-y-2 md:w-1/3">
          <p>
            I'm <span className="font-bold">{getAge("5/10/2003")} years old</span> developer who loves to code!
          </p>
          <p>
            I'm a <span className="font-bold">Software Developer Student</span> at <span className="font-bold">Istanbul Aydin University</span>.
          </p>
          <p>
            I'm currently in my <span className="font-bold">{yearInUniversity}. year</span>.
          </p>
          <p>
            I'm interested in <span className="font-bold">web development</span> and I'm trying to improve myself in this field.
          </p>
          <p className="font-bold">
            but besides that, I'm also interested in everything about coding!
          </p>

        </motion.div>


      </div>
    </>
  )
}