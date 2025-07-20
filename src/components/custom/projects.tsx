import bookProjectImage from "@/assets/bookproject.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Library Project",
      description:
        "A responsive web application that allows users to explore books by category or author, read summaries, and rate them. Designed with a clean interface to enhance the reading experience and book discovery..",
      image: bookProjectImage,
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      githubLink: "https://github.com/Azvedo-06/techAcademy05",
    },
  ];

  return (
    <section className="bg-black px-4 py-16">
      <div className="container mx-auto max-w-screen-xl">
        <div className="mb-8 rounded-lg bg-zinc-900/50 p-6">
          <h2 className="mb-6 text-2xl font-bold text-white">My Projects</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group rounded-lg bg-zinc-800/50 p-4 transition-all hover:bg-zinc-800/80"
              >
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-gray-300">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="rounded-full bg-zinc-700 px-3 py-1 text-xs text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex gap-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/80 hover:text-white"
                    >
                      GitHub Repository
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
