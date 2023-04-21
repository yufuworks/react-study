import classes from './Main.module.css'
import {Footer} from "@/components/Footer";
import {Next_body} from "@/components/Next-body";
import {Vercel} from "@/components/Vercel";
import {Headline} from "@/components/Headline";

export function Main(props) {
  return (
    <main className={classes.main}>
      <div className={classes.description}>
        <Headline page={props.page}>
          <code className={classes.code}>pages/{props.page}.js</code>
        </Headline>
        <Vercel/>
      </div>
      <Next_body/>
      <Footer/>
    </main>
  )
}
