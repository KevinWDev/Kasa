// Datas Propos
import { dataPropos } from '../../datas/propos';
// Composants / Pages
import Collapse from '../../components/Collapse';
// Assets
import imgPropos from '../../assets/imgPropos.png';
// Styles
import '../../utils/styles/Propos.css';

function Propos() {
  return (
    <main>

      <div className="divContainerPropos">
        <img className="imagePropos" src={imgPropos} alt="Montagne" />
      </div>

      <section>
        <aside className="containerCollapse">
          {dataPropos.map((data, index) => {
            return (
              <Collapse name={data.title} key={index}>
                {data.description}
              </Collapse>
            );
          })}
        </aside>
      </section>

    </main>
  );
}

export default Propos;
