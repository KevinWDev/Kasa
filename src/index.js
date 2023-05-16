// React
import React from 'react'
import ReactDOM from 'react-dom/client'
import './utils/styles/index.css'

// Composants / Pages
import Container from './components/Container'
import Header from './components/Header'
import Home from './pages/Home/index.jsx'
import Propos from './pages/Propos'
import Logement from './pages/Logements'

// Styles
import StyledGlobalStyle from './utils/styles/GlobalStyle'

// Routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <StyledGlobalStyle />
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/propos" element={<Propos />} />
          <Route path="/logement/:id/" element={<Logement />}></Route>
        </Routes>
      </Container>
    </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
