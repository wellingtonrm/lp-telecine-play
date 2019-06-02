import React from 'react';
import '../assets/bootstrap/css/bootstrap.css';
var dados = require('../dados/populares.json');


const Filmes = props => {
     
    return (
        <div className="multiple-items">
            { dados.map((filmedetalhe, index)=>{
                console.log(filmedetalhe.poster_g)
                return(
                <div className="bn" key={index}><img src={filmedetalhe.poster_g} alt={filmedetalhe.titulo_portugues} className="rounded" /></div>
                ); 
               
           })}
               
          
        </div>
    );
}
export default Filmes;