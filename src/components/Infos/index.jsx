// Hooks
import { useState } from 'react';
// Styles
import {ContainerInfosOpen,ContainerInfosClose, BtnInfos, ImgArrow, DivInfos} from '../../utils/styles/Infos.jsx'

import arrowBack from '../../assets/arrows/arrowBack.png'
import arrowUp from '../../assets/arrows/arrowUp.png'

function Infos({name, children}) {
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (

<ContainerInfosClose>
        
        <BtnInfos onClick={() => setIsOpen(false)}>
        {name}
        <ImgArrow src={arrowBack} alt="" />
      </BtnInfos>
       
      
    </ContainerInfosClose>

    
    
  ) : (
    
<ContainerInfosOpen >
        
        <BtnInfos onClick={() => setIsOpen(true)}>
        {name}
        <ImgArrow src={arrowUp} alt="" />
      </BtnInfos>
      <DivInfos>
        {children}
      </DivInfos>
    
    </ContainerInfosOpen>

  );
}

export default Infos;
