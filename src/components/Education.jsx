function Education() {
  const education = [
    {
      school: "The University of Texas at Dallas",
      degree: "Bachelor of Science in Computer Science",
      period: "Fall 2023 - Present",
      location: "Richardson, TX",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/UT_Dallas_2_Color_Emblem_-_SVG_Brand_Identity_File.svg/512px-UT_Dallas_2_Color_Emblem_-_SVG_Brand_Identity_File.svg.png?20191002052426"
    },
    {
      school: "Collin Community College",
      degree: "Associate Degree",
      period: "Fall 2021 - Spring 2023",
      location: "Melissa, TX",
      logo: "https://play-lh.googleusercontent.com/jQZiYRLw29bZOBPhISv7hXOXKJdDis6BTJpggSxy4yBx9aXPxRhe1rPYqM9XvcUaa01e"
    },
    {
      school: "Melissa High School",
      degree: "High School Diploma",
      period: "Fall 2019 - Spring 2023",
      location: "Melissa, TX",
      logo: "https://cmsv2-assets.apptegy.net/uploads/13424/file/3018588/e3a3b0ae-422a-478c-8e40-f9c3eba7d6de.png"
    }
  ]

  return (
    <div className="mb-16">
      <div className="flex flex-row justify-between items-end mb-6">
        <div>
          <p className="text-text-primary/80">So Far</p>
          <h2 className="text-2xl font-bold text-text-primary">Education</h2>
        </div>
        <div className="flex flex-row items-center gap-4">
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
          <div key={index} className="flex gap-4">
            <div className="w-20 h-20 shrink-0 border border-primary/30 rounded-lg overflow-hidden bg-white/5 p-2 flex items-center justify-center">
              <img 
                src={edu.logo} 
                alt={`${edu.school} logo`}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="flex-1 flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-text-primary">{edu.school}</h3>
                <p className="text-text-secondary">{edu.degree}</p>
              </div>
              <div className="text-sm text-text-secondary/70 font-medium whitespace-nowrap ml-4 text-right">
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
