import classes from './Main.module.css'
import {Footer} from "@/src/components/Footer";
import {Next_body} from "@/src/components/Next-body/";
import {Vercel} from "@/src/components/Vercel/";
import {Headline} from "@/src/components/Headline/";

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
