import React, { Component } from 'react';
import Filmes from './components/Filmes'
import Banner from './components/Banner'
import './assets/css/App.css';
import './assets/bootstrap/css/bootstrap.css';
import './assets/fontawesome/css/all.css';


class App extends Component {
  render() {
    return (
      <div id="App">
        <section className="BX-1">
          {/*====================================================================
                                  CONTEUDO DESKTOP
          ======================================================================= */}
          <div className="header nonemobile noneipad">
            <Banner />
            <div className="logo">
            </div>
            <div className="boxflex">
              <div className="box1">
                <h4>Telecine Play</h4>
                <h5>Mais de 1800 filmes</h5>
                <div className="img-mobile"></div>
              </div>
              <div className="box2">
                <h2>Filmes exclusivos dos maiores estúdios, é <span>só dar um play</span></h2>
                <h3>Curta 7 dias grátis, assine por R$37,90/mês e cancele quando quiser</h3>
                <button type="button" className="btn-assinar">Experimente grátis <i className="fas fa-arrow-right"></i></button>

              </div>
            </div>
          </div>
          {/*====================================================================
                                  CONTEUDO MOBILE E TABLET 
          ======================================================================= */}
          <div className="header nonedesk">
            <div className="logo"></div>
            <h2>Filmes exclusivos dos maiores estúdios, é <span>só dar um play</span></h2>
            <h3>Curta 7 dias grátis, assine por R$37,90/mês e cancele quando quiser</h3>
            <button type="button" className="btn-assinar">Experimente grátis <i className="fas fa-arrow-right"></i></button>
          </div>
        </section>
        <section className="BX-2">
          <Filmes />

        </section>
        <section className="BX-3">
          {/*====================================================================
                                  CONTEUDO MOBILE E TABLET 
          ======================================================================= */}
          <div className="header nonedesk">
            <div className="tb-text">
              <h6>DISPOSITIVOS</h6>
              <hr></hr>
            </div>
            <h2>O Melhor catálago. Em todas as telas.</h2>
            <div className="img-dispositivo"></div>
            <div className="formabx">
              <h6 className="txt-titulo1">Assista na TV</h6>
              <div className="lista-li">
                <div className="row">
                  <div className="col-6"><i className="fas fa-check"></i> Smarts Tvs</div>
                  <div className="col-6"><i className="fas fa-check"></i> Chromecast</div>
                  <div className="col-6"><i className="fas fa-check"></i> Xbox One</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="BX-4">
          {/*====================================================================
                                  CONTEUDO MOBILE E TABLET 
          ======================================================================= */}
          <div className="header nonedesk">
            <div className="img-dispositivo2"></div>
            <div className="formabx">
            <h6 className="txt-titulo1">Ou onde quiser</h6>
            <div className="lista-li">
              <div className="row">
                <div className="col-6"><i className="fas fa-check"></i> Android</div>
                <div className="col-6"><i className="fas fa-check"></i> PC</div>
                <div className="col-6"><i className="fas fa-check"></i> IOS</div>
              </div>
            </div>
          </div>
          </div>
        </section>
      <footer>
        {/*====================================================================
                                  CONTEUDO MOBILE E TABLET 
          ======================================================================= */}
        <div className="header nonedesk">
          <div className="logo"></div>
          <p className="ajuda">FICOU COM ALGUMA DUVIDA?</p>
          <a className="link-ajuda" href="https://ajuda.telecineplay.com.br/">ACESSE NOSSA AJUDA</a>
        </div>

      </footer>
      </div >
    );
  }
}

export default App;

