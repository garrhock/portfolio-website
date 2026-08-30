/**
 * On desktop the left-hand nav is the only section labelling, so this heading is
 * visually hidden there and kept for screen readers. On narrow screens it becomes
 * a sticky blurred bar, since there is no sidebar to orient against.
 */
function SectionHeading({ children }) {
  return (
    <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-bg/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
      <h2 className="font-mono text-[12.5px] font-semibold uppercase tracking-[0.06em] text-heading lg:sr-only">
        {children}
      </h2>
    </div>
  )
}

export default SectionHeading
