// Datas
import  datas  from '../../datas/datas.json';
// Styles
import '../../utils/styles/Home.css';
// Composants / Pages
import Card from '../../components/Card';
// Assets
import ImageHome from '../../assets/imgHome.png'

function Home() {

  return (
    <div className="mainContainerHome">
      <div  className="divContainer">
        <img className='imageHome' src={ImageHome} alt="" />   
        <h1 className='paragraph-image-home'>Chez vous, partout et ailleurs</h1>
      </div>

      <main className="divGridCard">
        <div className="gridCard">

          {datas.map(
            (data) => (
              <div key={`${data.id}`}>
                <Card
                  
                  id={data.id}
                  title={data.title}
                  cover={data.cover}
    
                />
              </div>
            )
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;
