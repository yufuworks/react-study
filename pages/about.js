import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import {Footer} from "@/components/footer";
import {Next_body} from "@/components/next-body";
import {Vercel} from "@/components/vercel";
import {Headline} from "@/components/headline";

export default function Home() {
  return (
    <>
      <Head>
        <title>about</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <Headline
            page="about"
            number={1234}
            array={[1, 2, 3, 4]}
            obj={{ foo: "foo.", bar: "bar." }}
            is_true={true}
            boolean
            code={<code className={styles.code}>pages/about.js</code>}
          />
          <Vercel />
        </div>
        <Next_body />
        <Footer />
      </main>
    </>
  )
}
