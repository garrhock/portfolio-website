function Projects() {
  const projects = [
    {
      title: "Full Stack X.com Clone",
      description: "Recreation of X.com to teach myself the basics of full stack development.",
      tech: ["React", "JavaScript", "Tailwind CSS", "Supabase"],
      link: "#",
      image: "https://placehold.co/600x400/1a2e23/10b981?text=X.com+Clone"
    },
    {
      title: "Paws VS Claws",
      description: "Survival-action roguelite game like Vampire Survivors but with cats and dogs.",
      tech: ["Java","Greenfoot"],
      link: "#",
      image: "https://placehold.co/600x400/1a2e23/10b981?text=Paws+VS+Claws"
    },
  ]

  return (
    <div className="mb-16">
      <p className="text-text-primary/80">Featured</p>
      <h2 className="text-2xl font-bold text-text-primary">Projects</h2>
      <div className="flex flex-row justify-between gap-4 py-5">
        {projects.map((project, index) => (
          <a href={project.link} key={index} className="cursor-pointer w-[50%] border border-primary/30 rounded-lg overflow-hidden hover:border-primary transition-all bg-bg-card/30">
            <div className="w-full h-48 bg-bg-card overflow-hidden">
              <img 
                src={project.image} 
                alt={`${project.title} preview`}
                className="w-full h-full object-cover"
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
