import ArrowIcon from './ArrowIcon'
import Mark from './Mark'
import SectionHeading from './SectionHeading'

const baseUrl = import.meta.env.BASE_URL

// Reverse-chronological.
const PROJECTS = [
  {
    title: 'Home Infrastructure Lab',
    context: 'Personal',
    period: 'Aug 2026 — Present',
    href: null,
    image: null,
    description:
      'A Proxmox VE virtualization host running game servers, media streaming, and network services in isolated Docker containers with per-instance CPU, memory, and port allocations. AdGuard Home handles network-wide DNS filtering and a WireGuard VPN consolidates remote access to a single UDP port.',
    tags: ['Proxmox VE', 'Docker', 'Linux', 'WireGuard'],
  },
  {
    title: 'Self-Provisioning Kubernetes Cluster',
    context: 'Systemware',
    mark: 'systemware',
    period: 'May — Aug 2026',
    href: null,
    image: null,
    description:
      'Learned containerization from zero — Docker first, then Kubernetes — to bootstrap a multi-node cluster hosting an enterprise content management platform. The cluster provisions itself on boot: it connects to the correct database, creates its own nodesets and datasets, and pulls down the applications it needs, so tearing it down and bringing it back up takes no manual setup. Shipped to the production repository.',
    tags: ['Kubernetes', 'Docker', 'Linux', 'kubectl'],
  },
  {
    title: 'Redmine Textile to Markdown Migration',
    context: 'Systemware',
    mark: 'systemware',
    period: 'May — Aug 2026',
    href: null,
    image: null,
    description:
      "Forked an open-source conversion script and tailored it to the company's Redmine instance and its formatting edge cases, then ran it against the live database to convert years of Textile-formatted issues and wiki pages to Markdown. Now shipped as a plugin in the production repository.",
    tags: ['Redmine', 'Git'],
  },
  {
    title: 'Broadridge ECM Platform Migration',
    context: 'Systemware',
    mark: 'systemware',
    period: 'May — Aug 2026',
    href: null,
    image: null,
    description:
      'Collaborated on migrating Broadridge off a legacy ECM platform, writing extraction and indexing programs in JavaScript and a proprietary indexing language for their highest-priority document classes. Validated output against the source documents to verify accuracy ahead of cutover.',
    tags: ['JavaScript', 'Data Migration', 'ECM'],
  },
  {
    title: 'CustomEconomy',
    context: 'Personal',
    mark: 'paper',
    period: '2026',
    href: 'https://github.com/garrhock/CustomEconomy',
    image: null,
    description:
      "A layered economy plugin for a Minecraft server I run, structured with service and repository separation over a connection-pooled database that runs on either SQLite or MySQL. Versioned schema migrations upgrade existing databases in place, and transaction writes are batched asynchronously so they never block the game's single-threaded loop. A startup audit checks every shop price against the sell table to prove no item can be bought and resold at a profit under the maximum multiplier.",
    tags: ['Java 21', 'Paper API', 'SQLite', 'MySQL', 'HikariCP'],
  },
  {
    title: 'Shards',
    context: 'Personal',
    mark: 'paper',
    period: '2026',
    href: 'https://github.com/garrhock/Shards',
    image: null,
    description:
      'A second currency for the same server, built to resist the inflation that makes a primary currency meaningless late in a season. Shards enter the economy through exactly two channels, and a per-victim cooldown closes the obvious attack — two accounts kill-trading to mint currency from nothing. Balances are cached in memory while a player is online and mirrored to SQLite on a single-threaded executor so writes stay ordered.',
    tags: ['Java 21', 'Paper API', 'SQLite'],
  },
  {
    title: 'Paws VS Claws',
    context: 'Personal',
    period: 'Sep — Dec 2025',
    href: 'https://github.com/garrhock/Paws-VS-Claws/wiki/Iteration-1',
    image: `${baseUrl}images/pvc.webp`,
    description:
      'A wave-based action rogue-lite with real-time state updates, modular ability progression, score persistence, and dynamic difficulty scaling. Structured with MVC and GRASP principles to keep presentation, domain logic, and data management cleanly separated.',
    tags: ['Java', 'Greenfoot'],
  },
  {
    title: 'Full Stack X.com Clone',
    context: 'Personal',
    period: 'Jun 2025',
    href: 'https://x-clone-cy2fvaz3p-garrhocks-projects.vercel.app/',
    image: `${baseUrl}images/xclone.webp`,
    description:
      'A social platform built to teach myself full-stack development end to end — authentication, authorization, and CRUD across posts, comments, and profiles, with a component-based React frontend wired to Supabase for auth and real-time updates.',
    tags: ['TypeScript', 'Next.js', 'React', 'Supabase', 'Tailwind'],
  },
]

/**
 * The left column carries whatever identifies the project best: a screenshot
 * where one exists, otherwise the mark, context, and year. Work done at a
 * company is labelled as such so it is never mistaken for personal work.
 */
function ProjectAside({ project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        loading="lazy"
        className="z-10 mt-2 aspect-video rounded border-2 border-white/10 object-cover sm:col-span-2"
      />
    )
  }

  return (
    <div className="z-10 mb-2 mt-1 flex items-start gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.02em] text-muted sm:col-span-2">
      <Mark mark={project.mark} />
      <div>
        <div className="text-body">{project.context}</div>
        <div>{project.period}</div>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 lg:mb-36 lg:scroll-mt-24">
      <SectionHeading>Projects</SectionHeading>

      <ol className="row-list">
        {PROJECTS.map((project) => (
          <li key={project.title} className="mb-12">
            <div className="row relative grid gap-4 pb-1 transition-opacity sm:grid-cols-8 sm:gap-8 md:gap-4">
              <div className="row-card absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block" />

              <ProjectAside project={project} />

              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-heading">
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group/link inline-flex items-baseline text-heading transition-colors hover:text-accent focus-visible:text-accent"
                    >
                      {project.title}
                      <ArrowIcon className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                    </a>
                  ) : (
                    <span>{project.title}</span>
                  )}
                </h3>

                <p className="mt-2 text-sm leading-relaxed">{project.description}</p>

                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-accent/10 px-[11px] py-1 font-mono text-[11px] font-medium leading-snug text-accent"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Projects
