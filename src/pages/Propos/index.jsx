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
    <div>
      <div className="divContainerPropos">
        <img className="imagePropos" src={imgPropos} alt="" />
      </div>

      <Collapse name={dataPropos[0].title}>{dataPropos[0].description}</Collapse>
      <Collapse name={dataPropos[1].title}>{dataPropos[1].description}</Collapse>
      <Collapse name={dataPropos[2].title}>{dataPropos[2].description}</Collapse>
      <Collapse name={dataPropos[3].title}>{dataPropos[3].description}</Collapse>
      
    </div>
  );
}

export default Propos;
