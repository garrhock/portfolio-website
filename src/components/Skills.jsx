import { FaJava, FaReact, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiTypescript, SiJavascript, SiNextdotjs, SiTailwindcss, SiSupabase, SiCplusplus } from 'react-icons/si'

function Skills() {
  const technologies = [
    { name: "Java", icon: <FaJava />, color: "#007396" },
    { name: "C/C++", icon: <SiCplusplus />, color: "#00599C" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "GitHub", icon: <FaGithub />, color: "#FFFFFF" },
    { name: "Supabase", icon: <SiSupabase />, color: "#3ECF8E" }
  ]

  // Duplicate the array for seamless infinite scroll
  const duplicatedTechnologies = [...technologies, ...technologies]

  return (
    <div className=" mb-8 overflow-hidden">
      <h2 className="text-md font-bold mb-6">My Tools and Technologies</h2>
      
      <div className="relative">
        <div className="flex gap-4 animate-scroll">
          {duplicatedTechnologies.map((tech, index) => (
            <span 
              key={index}
              className="border bg-primary/5 rounded-lg px-3 py-2 text-text-primary text-sm font-bold whitespace-nowrap shrink-0 flex items-center gap-1"
            >
              <span className="text-lg" style={{ color: tech.color }}>
                {tech.icon}
              </span>
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
