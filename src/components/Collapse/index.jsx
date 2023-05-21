// Hooks
import { useState } from 'react';
// Styles
import styles from '../../utils/styles/Infos.module.css'
// Assets
import arrowBack from '../../assets/arrows/arrowBack.png'
import arrowUp from '../../assets/arrows/arrowUp.png'

function Infos({name, children}) {
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (

<div className={styles.containerInfosClose}>
        
        <button className={styles.btnInfos} onClick={() => setIsOpen(false)}>
          {name}
          <img className={styles.imgArrow} src={arrowBack} alt="" />
        </button>
         
  </div>

  ) : (
    
<div className={styles.containerInfosOpen} >
        
        <button className={styles.btnInfos} onClick={() => setIsOpen(true)}>
          {name}
          <img className={styles.imgArrow} src={arrowUp} alt="" />
        </button>
        
      <div className={styles.divInfos}>
        {children}
      </div>
    
    </div>

  );
}

export default Infos;
