import Image from 'next/image'
import classes from './Next-body.module.css'

export function Next_body() {
  return (
    <div className={classes.center}>
      <Image
        className={classes.logo}
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </div>
  )
}
