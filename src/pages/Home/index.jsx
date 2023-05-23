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
    <main className="mainContainerHome">
      <div  className="divContainer">
        <img className='imageHome' src={ImageHome} alt="falaise" />   
        <h1 className='title-image-home'>Chez vous, partout et ailleurs</h1>
      </div>

      <section className="divGridCard">
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
      </section>
    </main>
  );
}

export default Home;
