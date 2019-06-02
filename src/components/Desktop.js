import React from 'react';
import Banner from './Banner';
import FilmesDesktop from './FilmesDesktop';
import '../assets/bootstrap/css/bootstrap.css';

const Desktop = props => {

    return (
        <div id="desktop" className="BX-1 nonemobile noneipad">
            <section className="BX-1">
                <div className="header">
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
            </section>
            <section className="BX-2">
                <div className="box-capa-filmes">
                    <FilmesDesktop />
                </div>
                <div className="ConteudoSection">
                    <div className="tb-text">
                        <h6>DISPOSITIVOS</h6>
                        <hr></hr>
                    </div>
                    <div className="row">
                        <div className="col-5">
                            <div className="img-smart"></div>
                        </div>
                        <div className="col-7">
                            <h2>O Melhor catálago. Em todas as telas.</h2>
                            <h6 className="txt-titulo1">Assista na TV</h6>
                            <div className="row st-ico">
                                <div className="col-6"><i className="fas fa-check"></i> Smarts Tvs</div>
                                <div className="col-6"><i className="fas fa-check"></i> Chromecast</div>
                                <div className="col-6"><i className="fas fa-check"></i> Xbox One</div>
                            </div>
                        </div>
                        <div className="col-7 box-m"> 
                            <h6 className="txt-titulo1">Ou onde quiser</h6>
                            <div className="row">
                            <div className="col-6"><i className="fas fa-check"></i> Android</div>
                            <div className="col-6"><i className="fas fa-check"></i> PC</div>
                            <div className="col-6"><i className="fas fa-check"></i> IOS</div>
                        </div>
                        </div>
                        <div className="col-5">
                            <div className="img-smart"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Desktop;