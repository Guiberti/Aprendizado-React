import React from "react";
import HelloWorld from "./components/HelloWorld";
import SayMayName from "./components/SayMayName";
import Pessoa from "./components/Pessoa";
import Frase from "./components/Frase";

function App() {

    const name = 'Guilherme'
    const newName = name.toUpperCase()
    const url = 'https://labetno.ufpa.br/images/galeria_em_artigos/image03_grd.png'

    return (
        <div className="App">
            <h1>Banco de dados</h1>
            <Frase/>
            <Frase/>
            <p> Olá, {newName}</p>
            <img src={url} alt="Minha Imagem"/>
            <HelloWorld/>
            <SayMayName name="Guilherme"/>
            <SayMayName name="Eu"/>
            <Pessoa nome="Guilherme" idade={20} profissao="Programador" foto="https://labetno.ufpa.br/images/galeria_em_artigos/image03_grd.png" />
        </div>
    );
}

//4 - OBRIGATORIAMENTE o componente DEVE ser exportado
export default App;
