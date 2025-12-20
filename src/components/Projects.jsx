function Projects() {
  const projects = [
    {
      title: "Full Stack X.com Clone",
      description: "Recreation of X.com to teach myself the basics of full stack development.",
      tech: ["React", "JavaScript", "Tailwind CSS", "Supabase"],
      link: "#",
      image: "/images/XCLONE.png"
    },
    {
      title: "Paws VS Claws",
      description: "Survival-action roguelite game like Vampire Survivors but with cats and dogs.",
      tech: ["Java","Greenfoot"],
      link: "#",
      image: "/images/PVC.png"
    },
  ]

  return (
    <div className="mb-16">
      <p className="text-text-primary/80">Featured</p>
      <h2 className="text-2xl font-bold text-text-primary">Projects</h2>
      <div className="flex flex-col md:flex-row gap-4 py-5">
        {projects.map((project, index) => (
          <a href={project.link} key={index} className="cursor-pointer w-full md:w-1/2 border border-primary/30 rounded-lg overflow-hidden hover:border-primary transition-all bg-bg-card/30">
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
                  <span key={i} className="text-xs text-text-secondary/70 bg-primary/10 px-1 py-1 rounded">{tech}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Projects
