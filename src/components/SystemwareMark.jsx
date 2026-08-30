import { useId } from 'react'

/** Systemware's four-point star mark, used to identify work done there. */
function SystemwareMark({ className = '' }) {
  // This renders once per Systemware entry, so the gradient needs a unique id
  // per instance — a hardcoded one would emit duplicate ids into the document.
  const gradientId = useId()

  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      role="img"
      aria-label="Systemware"
    >
      <defs>
        <linearGradient id={gradientId} x1="20" y1="4" x2="72" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#E8253F" />
          <stop offset="1" stopColor="#C10E2B" />
        </linearGradient>
      </defs>
      <path
        d="M50 1c1.6 26.4 22.6 47.4 49 49-26.4 1.6-47.4 22.6-49 49-1.6-26.4-22.6-47.4-49-49 26.4-1.6 47.4-22.6 49-49Z"
        fill={`url(#${gradientId})`}
      />
    </svg>
  )
}

export default SystemwareMark
