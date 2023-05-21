// Styles
import styles from '../../utils/styles/Container.module.css'

function Container({ children }) {

  return <div className={styles.mainContainer}>{children}</div>
  
}

export default Container
