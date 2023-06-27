// Routes
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Composants / Pages
import Container from '../../components/Container';
import Header from '../../components/Header';
import Home from '../../pages/Home/index.jsx';
import Propos from '../../pages/Propos';
import Logement from '../../pages/Logements';
import Footer from '../../components/Footer';
import Error from '../../components/Error/index.jsx';


function Router() {
  return (
    <BrowserRouter basename='/'>
      <Container>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/propos" element={<Propos />} />
            <Route path="/logement/:id/" element={<Logement />}></Route>
            <Route path='*' element={<Error/>} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
    
  );
}

export default Router;
