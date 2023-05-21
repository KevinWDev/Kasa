// Routes
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Composants / Pages
import Container from '../../components/Container';
import Header from '../../components/Header';
import Home from '../../pages/Home/index.jsx';
import Propos from '../../pages/Propos';
import Logement from '../../pages/Logements';
import Footer from '../../components/Footer';
import Error from '../Error';


function Router() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='*' element={<Error/>} />
            <Route path="/propos" element={<Propos />} />
            <Route path="/logement/:id/" element={<Logement />}></Route>
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
    
  );
}

export default Router;
