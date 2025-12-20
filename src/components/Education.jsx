function Education() {
  const education = [
    {
      school: "The University of Texas at Dallas",
      degree: "Bachelor of Science in Computer Science",
      period: "Fall 2023 - Present",
      location: "Richardson, TX",
      logo: "/public/images/utdlogo.png"
    },
    {
      school: "Collin Community College",
      degree: "Associate Degree",
      period: "Fall 2021 - Spring 2023",
      location: "Melissa, TX",
      logo: "/public/images/collinlogo.png"
    },
    {
      school: "Melissa High School",
      degree: "High School Diploma",
      period: "Fall 2019 - Spring 2023",
      location: "Melissa, TX",
      logo: "/public/images/melissalogo.png"
    }
  ]

  return (
    <div className="mb-16">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-6">
        <div>
          <p className="text-text-primary/80">So Far</p>
          <h2 className="text-2xl font-bold text-text-primary">Education</h2>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          <p className="text-xs text-text-primary/80">Need a copy?</p>
          <a 
            href="https://www.dropbox.com/scl/fi/bxsejsk0d4x93tkcqab6f/Resume.pdf?rlkey=kccnmbauol92jgrleiua1zoxo&st=cz2uinut&dl=0"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary/50 px-1 py-1 rounded hover:bg-primary/10 transition-colors text-text-primary flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Resume
          </a>
        </div>
      </div>
      <div className="space-y-6 border-l-2 border-primary pl-6">
        {education.map((edu, index) => (
          <div key={index} className="flex flex-col sm:flex-row gap-4">
            <div className="w-20 h-20 shrink-0 border border-primary/30 rounded-lg overflow-hidden bg-white/5 p-2 flex items-center justify-center">
              <img 
                src={edu.logo} 
                alt={`${edu.school} logo`}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="flex-1 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
              <div>
                <h3 className="text-xl font-bold text-text-primary">{edu.school}</h3>
                <p className="text-text-secondary">{edu.degree}</p>
              </div>
              <div className="text-sm text-text-secondary/70 font-medium sm:whitespace-nowrap sm:ml-4 sm:text-right">
                <p>{edu.period}</p>
                <p className="font-bold">{edu.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education
