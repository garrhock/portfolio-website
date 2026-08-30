import SectionHeading from './SectionHeading'

function About() {
  return (
    <section id="about" className="mb-16 scroll-mt-16 lg:mb-36 lg:scroll-mt-24">
      <SectionHeading>About</SectionHeading>

      <div className="space-y-4">
        <p>
          I&apos;m a senior studying Computer Science at the University of Texas at Dallas,
          graduating in <span className="font-medium text-heading">December 2026</span>, and I
          like solving problems. I have a knack for breaking down large problems into more
          digestible pieces, and my curiosity on how different systems work usually leads me to
          my next project, whether it be a Social Media platform, a videogame, or a server.
        </p>
        <p>
          This past summer I interned at{' '}
          <a
            href="https://www.systemware.com"
            target="_blank"
            rel="noreferrer noopener"
            className="font-medium text-heading underline decoration-muted underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            Systemware
          </a>
          , where the focus of my assigned work was with containerization. I bootstrapped a multi-node local Kubernetes
          cluster to host their content management platform and collaborated with others to help
          migrate an enterprise client off a decades-old ECM system. In addition to this I also
          wrote a script to migrate Systemware&apos;s Redmine from textile to markdown to help
          DevOps and Development collaborate more closely.
        </p>
        <p>
          In my free time you&apos;ll most likely find me at my computer playing videogames, at
          the theaters watching movies, or playing tennis with my friends.
        </p>
      </div>
    </section>
  )
}

export default About
