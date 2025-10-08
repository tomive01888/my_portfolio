import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../../data/projects.mjs";

// --- Config Variables ---
const projectKeys = Object.keys(projects);

// 1. Variants for Image Sliding (directional)
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    opacity: 1,
  }),
};

// 2. Variants for Text Cross-Fading (simple opacity change)
const fadeVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
};

// --- Sub Component: ProjectImage (Only the image part) ---
const ProjectImage = ({ project, direction }) => (
  <motion.div
    key={project.id}
    custom={direction}
    variants={slideVariants}
    initial="enter"
    animate="center"
    exit="exit"
    transition={{
      x: { type: "spring", stiffness: 200, damping: 30 },
      opacity: { duration: 0.5 },
    }}
    className="absolute inset-0 w-full h-full"
  >
    <img
      src={project.media.src}
      alt={project.media.alt}
      className="w-full h-full object-cover transition-transform duration-500 bg-black select-none"
    />
  </motion.div>
);

// --- Main Component: WorkShowcase ---
export default function WorkShowcase() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setPage((prevPage) => {
      let newIndex = prevPage + newDirection;
      if (newIndex < 0) {
        newIndex = projectKeys.length - 1;
      } else if (newIndex >= projectKeys.length) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  const currentProjectKey = projectKeys[page];
  const currentProject = {
    id: currentProjectKey,
    ...projects[currentProjectKey],
  };

  const articleLink = `/article/index.html?id=${currentProjectKey}`;

  return (
    <section className="w-full flex flex-col justify-center p-4">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="w-full h-auto relative"
      >
        <h2 className=" text-5xl text-center my-6 select-none">My recent projects</h2>

        <motion.h3
          key={currentProjectKey + "-title"}
          variants={fadeVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className=" text-4xl text-teal-500 font-bold text-center my-4 select-none"
        >
          {currentProject.title}
        </motion.h3>

        <div className="relative w-auto max-w-5xl mx-auto">
          <div className="w-full h-full aspect-video max-w-5xl mx-auto relative overflow-hidden bg-black">
            <AnimatePresence initial={false} custom={direction}>
              <ProjectImage key={currentProjectKey} project={currentProject} direction={direction} />
            </AnimatePresence>
          </div>
          <button
            className="absolute top-1/2 -left-2 lg:-left-10 transform p-2 bg-teal-500/70 backdrop-blur-sm rounded-full shadow-lg z-10 hover:bg-teal-600 transition-colors"
            onClick={() => paginate(-1)}
            aria-label="Previous project"
          >
            <ChevronLeft size={30} className="text-white" />
          </button>
          <button
            className="absolute top-1/2 -right-2 lg:-right-10 transform p-2 bg-teal-500/70 backdrop-blur-sm rounded-full shadow-lg z-10 hover:bg-teal-600 transition-colors"
            onClick={() => paginate(1)}
            aria-label="Next project"
          >
            <ChevronRight size={30} className="text-white" />
          </button>
        </div>
      </motion.div>
      <div className="w-full max-w-xl mx-auto my-5">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentProjectKey + "-details"}
            variants={fadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <p className="text-lg text-start h-28 select-none">{currentProject.description}</p>

            <a
              href={articleLink}
              className="text-blue-400 hover:text-blue-600 text-xl font-semibold mt-4 inline-block transition-colors float-end select-none"
            >
              Read Article →
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
