// Hooks
import { useParams } from 'react-router-dom';
// Datas
import datas from '../../datas/datas.json';
// Composants / Pages
import Carousel from '../../components/Carousel';
import Collapse from '../../components/Collapse';
// Styles
import '../../utils/styles/Logement.css';
// Assets
import starRed from '../../assets/stars/startRed.png';
import starGray from '../../assets/stars/startGray.png';

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
  let picturesbyId = dataById?.pictures;
  
  const addStar = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const starClass = i < rating ? starRed : starGray;
      stars.push(<img src={starClass} alt="rating" key={i} className="star" />);
    }
    return stars;
  };

  return (
    <div className="container-main-logement">
      <Carousel dataById={dataById} picture={picturesbyId} />

      <section className="container-div-title-host">
        <div className="container-title-parag-tags">
          <h1 className="title-logement">{titleById}</h1>
          <p className="parag-logement">{locationById}</p>
          <div className="tags-logement">
            {tagsById.map((tags, index) => {
              return (
                <div className="div-tags" key={index}>
                  <p className="tags">{tags}</p>
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

          <div className="styleRating">{addStar(ratingsById)}</div>
        </div>
      </section>

      <section className="container-infos-logement">
        <aside className="div-infos-padding">
          <Collapse name="Description">{descriptionById}</Collapse>
        </aside>

        <aside className="div-infos-padding">
          <Collapse name="Équipements">
            {equipmentsById.map((equip, index) => {
              return <li key={index}>{equip}</li>;
            })}
          </Collapse>
        </aside>
      </section>
    </div>
  );
}

export default Logement;
