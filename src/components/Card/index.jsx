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
        <h2 className='proprieteTitle'>{title}</h2>
    </div>

  )
}

export default Card
