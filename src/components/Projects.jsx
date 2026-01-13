import { useEffect, useState } from "react"

function Projects() {
  const baseUrl = import.meta.env.BASE_URL
  const projects = [
    {
      title: "Full Stack X.com Clone",
      description: "Recreation of X.com to teach myself the basics of full stack development.",
      tech: ["React", "JavaScript", "Tailwind CSS", "Supabase" , "Node.js"],
      link: "https://github.com/garrhock/x-clone",
      image: `${baseUrl}images/XCLONE.png`
    },
    {
      title: "Paws VS Claws",
      description: "Survival-action roguelite game like Vampire Survivors but with cats and dogs.",
      tech: ["Java","Greenfoot"],
      link: "https://github.com/garrhock/Paws-VS-Claws",
      image: `${baseUrl}images/PVC.png`
    },
  ]

  const [activeProject, setActiveProject] = useState(null)

  useEffect(() => {
    if (!activeProject) {
      return
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveProject(null)
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [activeProject])

  const openProject = (project) => {
    setActiveProject(project)
  }

  const closeProject = () => {
    setActiveProject(null)
  }

  return (
    <div className="mb-16">
      <p className="text-text-primary/80">Featured</p>
      <h2 className="text-2xl font-bold text-text-primary">Projects</h2>
      <div className="flex flex-col md:flex-row gap-4 py-5">
        {projects.map((project, index) => (
          <button
            type="button"
            key={index}
            onClick={() => openProject(project)}
            className="text-left cursor-pointer w-full md:w-1/2 border border-primary/30 rounded-lg overflow-hidden hover:border-primary transition-all bg-bg-card/30"
          >
            <div className="w-full h-48 sm:h-60 bg-bg-card overflow-hidden">
              <img 
                src={project.image} 
                alt={`${project.title} preview`}
                className="w-full h-full object-cover border-2 border-primary rounded-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-text-primary">{project.title}</h3>
              <p className="text-text-secondary mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs text-text-secondary/70 bg-primary/10 px-2 py-1 rounded">{tech}</span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={closeProject}
          role="dialog"
          aria-modal="true"
          aria-label={`${activeProject.title} details`}
        >
          <div
            className="w-full max-w-3xl overflow-hidden rounded-xl border border-primary/40 bg-bg-card/95 shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-primary/20 p-6">
              <div>
                <p className="text-text-primary/70 text-sm">Featured Project</p>
                <h3 className="text-2xl font-bold text-text-primary">{activeProject.title}</h3>
              </div>
              <button
                type="button"
                onClick={closeProject}
                className="text-text-secondary hover:text-text-primary transition-colors"
                aria-label="Close project details"
              >
                Close
              </button>
            </div>
            <div className="grid gap-6 p-6 md:grid-cols-2">
              <div className="w-full h-48 md:h-full bg-bg-card/80 overflow-hidden rounded-lg">
                <img
                  src={activeProject.image}
                  alt={`${activeProject.title} preview`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-text-secondary">{activeProject.description}</p>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs text-text-secondary/70 bg-primary/10 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {activeProject.link && activeProject.link !== "#" ? (
                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-primary/50 px-4 py-2 text-sm font-semibold text-text-primary transition hover:border-primary hover:bg-primary/10"
                  >
                    View project
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects
