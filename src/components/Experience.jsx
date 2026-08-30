import ArrowIcon from './ArrowIcon'
import Mark from './Mark'
import SectionHeading from './SectionHeading'

const RESUME_URL =
  'https://www.dropbox.com/scl/fi/8t8y0r3grofs4e26t0t5z/Resume-Aug26.pdf?rlkey=nhin0wtfamk79dyvwt52trabw&st=xvkoif6p&dl=0'

const JOBS = [
  {
    role: 'Intern',
    company: 'Systemware',
    href: 'https://www.systemware.com',
    mark: 'systemware',
    period: 'May — Aug 2026',
    description:
      'Spent the summer on the DevOps side of an enterprise content management company, across three pieces of work: bootstrapping a self-provisioning Kubernetes cluster, migrating Broadridge off a legacy ECM platform, and converting the internal issue tracker from Textile to Markdown. Two of the three shipped to the production repository, and I presented the cluster architecture and deployment workflow to the Director of DevOps.',
    tags: ['Kubernetes', 'Docker', 'JavaScript', 'Linux'],
  },
  {
    role: 'Cook',
    company: 'The Red Feather',
    href: 'https://redfeather.wine',
    mark: 'redfeather',
    period: 'May — Oct 2024',
    description:
      'Line cook in a high-volume kitchen, managing concurrent orders under time pressure and coordinating closely with the rest of the line — clear communication and reliability when everything is happening at once.',
    tags: [],
  },
]

function Experience() {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 lg:mb-36 lg:scroll-mt-24">
      <SectionHeading>Experience</SectionHeading>

      <ol className="row-list">
        {JOBS.map((job) => (
          <li key={job.company} className="mb-12">
            <div className="row relative grid pb-1 transition-opacity sm:grid-cols-8 sm:gap-8 md:gap-4">
              <div className="row-card absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block" />

              <header className="z-10 mb-2 mt-1 flex items-start gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.02em] text-muted sm:col-span-2">
                <Mark mark={job.mark} />
                <span>{job.period}</span>
              </header>

              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-heading">
                  {job.href ? (
                    <a
                      href={job.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group/link inline-flex items-baseline text-heading transition-colors hover:text-accent focus-visible:text-accent"
                    >
                      {job.role} · {job.company}
                      <ArrowIcon className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                    </a>
                  ) : (
                    <span>
                      {job.role} · {job.company}
                    </span>
                  )}
                </h3>

                <p className="mt-2 text-sm leading-relaxed">{job.description}</p>

                {job.tags.length > 0 && (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-accent/10 px-[11px] py-1 font-mono text-[11px] font-medium leading-snug text-accent"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>

      <a
        href={RESUME_URL}
        target="_blank"
        rel="noreferrer noopener"
        className="group/link mt-2 inline-flex items-center font-medium leading-tight text-heading"
      >
        <span className="border-b border-transparent pb-px transition-colors group-hover/link:border-accent">
          View Full Résumé
        </span>
        <ArrowIcon className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
      </a>
    </section>
  )
}

export default Experience
