import Image from 'next/image'
import classes from './Vercel.module.css'

export function Vercel() {
  return (
    <div>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powerd By{' '}
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className={classes.vercelLogo}
          width={100}
          height={24}
          priority
        />
      </a>
    </div>
  )
}
