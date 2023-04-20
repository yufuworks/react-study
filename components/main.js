import styles from '@/styles/Home.module.css'
import {Footer} from "@/components/footer";
import {Next_body} from "@/components/next-body";
import {Vercel} from "@/components/vercel";
import {Headline} from "@/components/headline";

export function Main(props) {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Headline page={props.page}>
          <code className={styles.code}>pages/{props.page}.js</code>
        </Headline>
        <Vercel/>
      </div>
      <Next_body/>
      <Footer/>
    </main>
  )
}
