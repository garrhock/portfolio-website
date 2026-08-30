import Socials from './Socials'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
]

function Sidebar({ activeSection }) {
  return (
    <header className="pt-24 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-heading sm:text-5xl">
          Garrett Hockersmith
        </h1>
        <h2 className="mt-3.5 font-mono text-[15px] font-medium tracking-tight text-heading">
          Computer Science Student at UT Dallas
        </h2>
        <p className="mt-4 max-w-xs leading-normal">I like solving problems.</p>

        <nav className="mt-16 hidden lg:block" aria-label="In-page jump links">
          <ul>
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id
              return (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="group flex items-center py-3">
                    <span
                      className={`mr-4 h-px transition-all ${
                        isActive
                          ? 'w-16 bg-heading'
                          : 'w-8 bg-dash group-hover:w-16 group-hover:bg-heading'
                      }`}
                    />
                    <span
                      className={`font-mono text-[11px] font-medium uppercase tracking-[0.06em] transition-colors ${
                        isActive ? 'text-heading' : 'text-muted group-hover:text-heading'
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      <Socials />
    </header>
  )
}

export default Sidebar
