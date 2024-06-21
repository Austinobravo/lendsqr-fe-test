import classes from './NotFound.module.scss'

const NotFound = () => {
  return (
    <section className={classes.not_found}>
        <h1>Oops!</h1>
        <p>This page is under construction.</p>
    </section>
  )
}

export default NotFound