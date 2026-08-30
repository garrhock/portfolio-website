import SystemwareMark from './SystemwareMark'

const baseUrl = import.meta.env.BASE_URL

/**
 * Small identifying logo shown beside an entry's date column. Decorative —
 * the adjacent text already names the company or platform, so these carry
 * empty alt text rather than repeating it to screen readers.
 */
const IMAGE_MARKS = {
  paper: `${baseUrl}images/papermc.png`,
  redfeather: `${baseUrl}images/redfeather.png`,
}

function Mark({ mark }) {
  if (!mark) {
    return null
  }

  if (mark === 'systemware') {
    return <SystemwareMark className="mt-px h-4 w-4 shrink-0" />
  }

  const src = IMAGE_MARKS[mark]
  if (!src) {
    return null
  }

  return (
    <img
      src={src}
      alt=""
      loading="lazy"
      className="mt-px h-4 w-4 shrink-0 rounded-[2px] object-contain"
    />
  )
}

export default Mark
