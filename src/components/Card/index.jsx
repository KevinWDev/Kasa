// Styles
import {
  ContainerPropriete,
  ProprieteParagraph,
  DivContainerPara,
} from '../../utils/styles/Card.module'

// Hooks
import { useNavigate } from 'react-router-dom'


function Card({ id, title, description, equipments, host, location, tags, rating, pictures}) {



  let navigate = useNavigate()

function goToLogement() {

  let path = ("../logement/"+id)
  navigate(path)
}



  return (

    <ContainerPropriete onClick={() => goToLogement()}>   
      <DivContainerPara>
        <ProprieteParagraph>{title}</ProprieteParagraph>
      </DivContainerPara>  
    </ContainerPropriete>

  )
}

export default Card
