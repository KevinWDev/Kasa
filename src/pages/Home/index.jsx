// Datas
import { datas } from '../../datas/datas.js'

// Styles
import '../../utils/styles/Home.css'

// Composants / Pages
import Card from '../../components/Card'

// Assets
import MaskGroup from '../../assets/MaskGroup.png'


function Home() {

  return (
    <div className="mainContainerHome">
      <div className="divContainer">
        <img className="imgHome" src={MaskGroup} alt="" />

        <p className="homeParagraph">Chez vous, partout et ailleurs</p>
      </div>
      <div className="divGridCard">
        <div className="gridCard">
         
          {datas.map(
            ({
              id,
              cover,
              title,
              description,
              equipements,
              host,
              location,
              tags,
              pictures,
              rating,
            }) => (
              <div key={`${id}`}>
                <Card
                  id={id}
                  cover={cover}
                  title={title}
                  description={description}
                  equipements={equipements}
                  host={host}
                  location={location}
                  tags={tags}
                  pictures={pictures}
                  rating={rating}
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
