// Hooks
import { useParams } from 'react-router-dom';
// Datas
import datas from '../../datas/datas.json';
// Composants / Pages
import Carousel from '../../components/Carousel';
import Collapse from '../../components/Collapse';
import Error from '../../components/Error';
// Styles
import '../../utils/styles/Logement.css';
// Assets
import starRed from '../../assets/stars/startRed.png';
import starGray from '../../assets/stars/startGray.png';

function Logement() {

  const { id } = useParams();

  let dataById = datas.find((d) => d.id === id);
  

  const addStar = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const starClass = i < rating ? starRed : starGray;
      stars.push(<img src={starClass} alt="" key={i} className="star" />);
    }
    return stars;
  };

if (dataById) {

  return (
    <main className="container-main-logement">

      <Carousel picturesById={dataById.pictures}/>

      <section className="container-div-title-host">
        
        <div className="container-title-parag-tags">
          <h1 className="title-logement">{dataById.title}</h1>
          <p className="parag-logement">{dataById.location}</p>
          <div className="tags-logement">
            {dataById.tags.map((tags, index) => {
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
            <p className="name-host">{dataById.host.name}</p>
            <img className="picture-host" src={dataById.host.picture} alt="" />
          </div>

          <div className="styleRating">{addStar(dataById.rating)}</div>
        </div>

      </section>

      <section className="container-infos-logement">

        <aside className="div-infos-padding">
          <Collapse name="Description">{dataById.description}</Collapse>
        </aside>

        <aside className="div-infos-padding">
          <Collapse name="Équipements">
            {dataById.equipments.map((equip, index) => {
              return <li key={index}>{equip}</li>;
            })}
          </Collapse>
        </aside>

      </section>
    </main>
  );
          } else if (!dataById) {
            return <Error />
          }
}

export default Logement;
