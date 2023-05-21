// Link
import { Link } from 'react-router-dom';
// Styles
import styles from '../../utils/styles/Error.module.css';

function Error() {
  return (
    <div className={styles.mainContainer}>

      <div className={styles.containerError}>
        <h2 className={styles.error404}>404</h2>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link className={styles.linkError} to="/">
          Retourner sur la page d'accueil
        </Link>
      </div>
      
    </div>
  );
}

export default Error;
