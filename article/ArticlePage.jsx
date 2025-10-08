import { ClipboardCopy, MoveLeft, SquareArrowOutUpRight } from "lucide-react";
import { projects } from "../data/projects";

const ArticlePage = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get("id");
  const projectData = id ? projects[id] : undefined;

  document.title = `${projectData.title} project by`;

  if (!projectData) return <p>Project not found</p>;

  const getBadgeUrl = (tech) => {
    const map = {
      HTML: "https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white",
      CSS: "https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white",
      JavaScript: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
      TypeScript: "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white",
      React: "https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black",
      Vite: "https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white",
      "Tailwind CSS":
        "https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white",
      TailwindCSS:
        "https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white",
      "REST API": "https://img.shields.io/badge/REST_API-02569B?style=for-the-badge&logo=postman&logoColor=white",
      "Figma for design":
        "https://img.shields.io/badge/Figma_for_design-F24E1E?style=for-the-badge&logo=figma&logoColor=white",
      Figma: "https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white",
    };

    return map[tech] || `https://img.shields.io/badge/${encodeURIComponent(tech)}-gray?style=for-the-badge`;
  };

  return (
    <>
      <main className="w-full backdrop-saturate-0  backdrop-invert z-50 h-screen">
        <div className="min-h-full mx-auto px-4 py-20 max-w-4xl bg-white ">
          {/* Go Back Home Link */}
          <a href="/" className="flex items-center gap-2 my-10 text-blue-500">
            <MoveLeft /> Return home
          </a>

          {/* Title and Share/Copy Link */}
          <header className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-6">
            <h1 className="text-5xl font-bold text-condiment select-none">{projectData.title}</h1>
            <button
              onClick={() => navigator.clipboard.writeText(window.location.href)}
              className="mt-2 md:mt-0 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 select-none cursor-pointer flex items-center gap-2"
            >
              <ClipboardCopy size={18} /> Copy URL
            </button>
          </header>

          {/* Project Image with Caption */}
          <figure className="mb-14">
            <img
              src={projectData.media.src}
              alt={projectData.media.alt}
              className="w-full rounded shadow select-none"
              loading="lazy"
              width={800}
              height={450}
            />
            <figcaption className="text-sm text-gray-500 mt-2 float-end select-none">
              {projectData.media.alt}
            </figcaption>
          </figure>

          {/* Live Site & GitHub Links */}
          <div className="flex flex-wrap gap-4 mb-6">
            <a
              href={projectData.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 select-none flex items-center gap-2"
            >
              <SquareArrowOutUpRight size={14} /> Visit Live Site
            </a>
            <a
              href={projectData.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 select-none flex items-center gap-2"
            >
              <SquareArrowOutUpRight size={14} /> View GitHub Repo
            </a>
          </div>

          {/* Main Content */}
          <section>
            <p className="w-full max-w-[75ch] my-6 select-none">{projectData.long_description}</p>

            {projectData.tech && projectData.tech.length > 0 && (
              <>
                <h2 className="text-4xl mb-4 select-none">Technologies Used</h2>
                <ul className="flex flex-wrap gap-2">
                  {projectData.tech.map((tech) => {
                    const badgeUrl = getBadgeUrl(tech);
                    return (
                      <li key={tech}>
                        <img src={badgeUrl} alt={tech + " badge"} className="h-8 select-none" />
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </section>
        </div>
      </main>
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/90 -z-10" />
    </>
  );
};

export default ArticlePage;
