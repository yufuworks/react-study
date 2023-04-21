import classes from './Headline.module.css'

export function Headline(props) {
  return (
    <div>
      <h1 className={classes.title}>{props.page} page</h1>
      <p>
        Get started by editing&nbsp;
        {props.children}
      </p>
    </div>
  )
}
