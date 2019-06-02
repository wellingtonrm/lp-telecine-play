import React from 'react';
import Banner from './Banner';
import Filmes from './Filmes';
import '../assets/bootstrap/css/bootstrap.css';

const Mobile = props => {

    return (
        <div id="mobile" className="nonedesk">
        <section  className="BX-1">
            <div className="header">
                <div className="logo"></div>
                <h2>Filmes exclusivos dos maiores estúdios, é <span>só dar um play</span></h2>
                <h3>Curta 7 dias grátis, assine por R$37,90/mês e cancele quando quiser</h3>
                <button type="button" className="btn-assinar">Experimente grátis <i className="fas fa-arrow-right"></i></button>
            </div>
        </section >

        <section  className="BX-2">
            <Filmes />

        </section >
        <section  className="BX-3">

            <div className="header">
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
        </section >
        <section  className="BX-4">

            <div className="header">
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
        </section >
            <footer>

            <div className="header">
                <div className="logo"></div>
                <p className="ajuda">FICOU COM ALGUMA DUVIDA?</p>
                <a className="link-ajuda" href="https://ajuda.telecineplay.com.br/">ACESSE NOSSA AJUDA</a>
            </div>

     </footer>
     </div>
    );
}
export default Mobile;