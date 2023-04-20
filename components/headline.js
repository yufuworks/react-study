import styles from '@/styles/Home.module.css'

export function Headline(props) {
  console.log(props);
  return (
    <div>
      <h1 className={styles.title}>{props.page} page</h1>
      <p>
        Get started by editing&nbsp;
        {props.children}
      </p>
    </div>

  )
}
