import { useState } from 'react'

function Career() {
  const [expandedJob, setExpandedJob] = useState(null)

  const experiences = [
    {
      id: 1,
      company: "University of Texas @ Dallas",
      logo: "🎓",
      position: "Computer Science Student",
      period: "Aug 2023 - Present",
      location: "Dallas, TX",
      technologies: ["Python", "JavaScript", "React", "Java", "C++"],
      description: [
        "Pursuing Bachelor's degree in Computer Science",
        "Relevant coursework in Data Structures, Algorithms, and Web Development",
        "Active member of computer science clubs and hackathons"
      ]
    }
  ]

  return (
    <section className="py-20 px-4 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl font-bold">
          So Far <span className="text-blue-400">Career</span>
        </h2>
        <button className="text-gray-400 hover:text-white flex items-center gap-2">
          Resume
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </button>
      </div>

      <div className="space-y-6">
        {experiences.map((job) => (
          <div
            key={job.id}
            className="border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition-all"
          >
            <button
              onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
              className="w-full p-6 text-left flex items-start gap-4 hover:bg-gray-900/50 transition-all"
            >
              <div className="text-4xl">{job.logo}</div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{job.company}</h3>
                    <p className="text-gray-400">{job.position}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-sm">{job.period}</p>
                    <p className="text-gray-500 text-sm">{job.location}</p>
                  </div>
                </div>
              </div>
              <svg
                className={`w-6 h-6 text-gray-400 transition-transform ${
                  expandedJob === job.id ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {expandedJob === job.id && (
              <div className="px-6 pb-6 border-t border-gray-800">
                <div className="pt-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies & Tools</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    {job.description.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Career
