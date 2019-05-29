import React from 'react';
import './assets/css/App.css';
import './assets/bootstrap/css/bootstrap.css';
import './assets/fontawesome/css/all.css';
function App() {
  return (
    <div id="App">
      <div className="logo">
      </div>
      <h2>Filmes exclusivos dos maiores estúdios, é <span>só dar um play</span></h2>
      <h3>Curta 7 dias grátis, assine por R$37,90/mês e cancele quando quiser</h3>
      <button type="button" className="btn-assinar">Experimente grátis <i class="fas fa-arrow-right"></i></button>
    </div>
  );
}

export default App;
