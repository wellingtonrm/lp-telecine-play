import React from 'react';
import '../assets/bootstrap/css/bootstrap.css';
var dados = require('../dados/populares.json');


const Banner = props => {

    return (
        <div className="banner">
            {dados.map((filmedetalhe, index) => {
                console.log(filmedetalhe.poster_g)
                return (
                    <div className="topobanner" key={index}><img className="src-banner" src={filmedetalhe.wallpaper} alt={filmedetalhe.titulo_portugues} /></div>
                );

            })}

            

        </div>
    );
}
export default Banner;