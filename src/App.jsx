import { motion } from "framer-motion";
import WorkShowcase from "./components/WorkSpace3";
import TechContainer from "./components/TechContainer";

function App() {
  return (
    <>
      <main className="space-y-10 h-full backdrop-saturate-0 backdrop-invert z-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-[50px_1fr] sm:gap-2">
          <div className="col-start-2">
            <section
              id="top"
              className="bg-white flex flex-col items-start justify-center w-full min-h-[97vh] mx-auto p-8"
            >
              <h1 className="text-8xl font-condiment text-teal-500">Tom André Iversen</h1>
              <p className="italic font-extralight">Based in Oslo</p>
              <div className="flex justify-between w-full mt-8">
                <p className="w-full max-w-[70ch] text-start text-lg">
                  I'm a junior web developer who enjoys turning ideas into interactive, responsive websites. My studies
                  introduced me to the fundamentals of front-end development, and I've since focused on technologies
                  like React, TypeScript, and TailwindCSS. I'm always looking for opportunities to learn, collaborate,
                  and grow as a developer.
                </p>
                <div>
                  <p className="w-full text-2xl">Junior Frontend-Developer</p>
                  <p className="w-full text-2xl">React</p>
                  <p className="w-full text-2xl">TailwindCSS</p>
                  <p className="w-full text-2xl">Vite</p>
                  <p className="w-full text-2xl">TypeScript</p>
                </div>
              </div>
            </section>

            <section id="work" className="min-h-[80vh] scroll-mt-24 bg-white">
              <WorkShowcase />
            </section>

            <section
              id="skill"
              className="space-y-8 py-20 flex flex-col justify-center items-center min-h-[80vh] bg-white saturate-100"
            >
              <motion.section
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="mx-auto space-y-6 px-4"
              >
                <h3 className="font-condiment text-4xl text-center select-none">Skills</h3>
                <TechContainer />
                <h4 className="text-3xl font-rocksalt text-center wrap-pretty select-none mt-20">Get in touch!</h4>
                <p className="text-blue-500 select-none text-center">
                  <span className="text-black">Github:</span>{" "}
                  <a href="https://github.com/tomive01888" target="_blank" rel="noopener noreferrer">
                    Tom Andre Iversen
                  </a>
                </p>
                <p className="text-blue-500 text-center">
                  <span className="text-black select-none ">Email:</span> andre.iversen@live.com
                </p>
              </motion.section>
            </section>
          </div>
          <aside
            className="
            sticky bottom-6 w-[97vw]
            sm:bottom-1/2 sm:w-fit
            mt-20 h-fit bg-white p-3 drop-shadow-sm drop-shadow-black/20 rounded-full"
          >
            <div className="flex flex-row sm:flex-col items-center justify-center gap-6 h-fit w-full sm:w-fit">
              {" "}
              <a
                href="#top"
                className="select-none text-teal-500 font-bold rounded-full w-10 h-10 bg-gray-50 hover:bg-neutral-100 p-1 shadow grid place-items-center"
              >
                Me
              </a>
              <a
                href="#work"
                className="select-none text-teal-500 font-bold rounded-full w-10 h-10 bg-gray-50 hover:bg-neutral-100 p-1 shadow grid place-items-center"
              >
                Work
              </a>
              <a
                href="#skill"
                className="select-none text-teal-500 font-bold rounded-full w-10 h-10 bg-gray-50 hover:bg-neutral-100 p-1 shadow grid place-items-center"
              >
                Skill
              </a>
            </div>
          </aside>
        </div>
      </main>
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/90 -z-10" />
    </>
  );
}

export default App;
