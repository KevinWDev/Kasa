// Hooks
import { useParams } from 'react-router-dom';
// Datas
import { datas } from '../../datas/datas';
// Composants / Pages
import Carousel from '../../components/Carousel';
import Infos from '../../components/Infos';
// Styles
import '../../utils/styles/Logement.css';
import { StyledRating } from '../../utils/styles/Logement.jsx';
import StarRoundedIcon from '@mui/icons-material/StarRounded';



function Logement() {

  const { id } = useParams();



  let dataById = datas.find((d) => d.id === id);
  let titleById = dataById?.title;
  let locationById = dataById?.location;
  let tagsById = dataById?.tags;
  let hostNameById = dataById?.host.name;
  let hostPictureById = dataById?.host.picture;
  let ratingsById = dataById?.rating;
  let descriptionById = dataById?.description;
  let equipmentsById = dataById?.equipments;
  const picturesbYId = dataById?.pictures;


  return (
    <div className='container-main-logement'>

      <Carousel dataById={dataById} />
      
      <div className='container-div-title-host'>
        <div className="container-title-parag-tags">
          <h1 className="title-logement">{titleById}</h1>
          <p className="parag-logement">{locationById}</p>
          <div className="tags-logement">
            {tagsById.map((tags, index) => {
              return (
                <div className="div-tags" key={index}>
                  <p className="tags">
                    {tags}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="container-host">
          <div className="container-with-host-picture">
            <p className="name-host">{hostNameById}</p>
            <img className="picture-host" src={hostPictureById} alt="" />
          </div>
          <div>
            <StyledRating
            value={+ratingsById}
            icon={<StarRoundedIcon fontSize='large'/>}
            emptyIcon={<StarRoundedIcon fontSize='large'/>}
            />
          </div>
      
        </div>
      </div>

        <div>
            <Infos>
              Description    
            </Infos>
        </div>
      
    </div>
  );
}

export default Logement;
