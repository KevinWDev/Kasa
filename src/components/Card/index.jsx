// Styles
import '../../utils/styles/Card.css'

// Hooks
import { useNavigate } from 'react-router-dom'


function Card({ id, title, cover }) {

let navigate = useNavigate()

function goToLogement() {
  let path = ("../logement/"+id)
  navigate(path)
}
  return (

    <div className='containerPropriete' onClick={() => goToLogement()}> 
     <img className='imageCards' src={cover} alt="" />
        <h3 className='proprieteParagraph'>{title}</h3>
    </div>

  )
}

export default Card
