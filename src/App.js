import React from "react"

import * as helpers from "./helpers";
import { Teclado } from "./components";

import estadoInicial from "./assets/forca0.png"
import estado1erro from "./assets/forca1.png"
import estado2erro from "./assets/forca2.png"
import estado3erro from "./assets/forca3.png"
import estado4erro from "./assets/forca4.png"
import estado5erro from "./assets/forca5.png"
import estadoFinal from "./assets/forca6.png"
import palavras from "./Palavras"

export default function App() {
    const [chutes, setChutes] = React.useState([]);
    const [acertos, setAcertos] = React.useState(0);
    const imagens = [estadoInicial, estado1erro, estado2erro, estado3erro, estado4erro, estado5erro, estadoFinal]
    const [palavraSorteada, setPalavraSorteada] = React.useState([])
    const [erros, setErros] = React.useState(0)
    const [disable, setDisable] = React.useState(false)
    const [renderizandoPalavraSorteada, setRenderizandoPalavraSorteada] = React.useState("")
    const [disableTeclas, setDisableTeclas] = React.useState(true)
    const [classePalvra, setClassePalavra] = React.useState("letrasSorteadas")
    const [chute, setChute] = React.useState("")
    const novoArray = []
    let arrayRenderizado = []
    let cicloVida = 0
    const [auxiliarLetraChutada, setAuxiliarLetraChutada] = React.useState([])
    function getRandom() {
        let stringWord = (palavras[Math.floor(Math.random() * palavras.length)])
        stringWord = helpers.removerAcentos(stringWord);
        for (let i = 0; i < stringWord.length; i++) {
             novoArray[i] = (stringWord[i])
         
        } setPalavraSorteada(novoArray)
        if (novoArray !== novoArray.length) {
            setDisable(true)
            setDisableTeclas(false)
            setErros(0)
            setClassePalavra("letrasSorteadas")
        }
        if(novoArray.length !==0){
            setRenderizandoPalavraSorteada(novoArray.map((letter) => {return " _ "}))
        }

        // resetar chutes
        setChutes([]);
        setAcertos(0);
    }
    function chuteiLetra(letraChutada){

        setChutes([...chutes, letraChutada]);

        if(palavraSorteada.includes(letraChutada)){
            const auxilidandoRenderizacao = [...auxiliarLetraChutada, letraChutada]
            
            const numeroDeOcorrencias = helpers.numeroDeOcorrencias(letraChutada, palavraSorteada);
            const numeroDeAcertos = acertos + numeroDeOcorrencias;

            if (numeroDeAcertos === palavraSorteada.length) {
                setDisableTeclas(true)
                setDisable(false)
                setRenderizandoPalavraSorteada(palavraSorteada.map((letter) => {return letter}))
                setClassePalavra("acertou")
            }
            setAcertos(numeroDeAcertos);

            console.log(auxilidandoRenderizacao)
            setAuxiliarLetraChutada(auxilidandoRenderizacao)
            arrayRenderizado = palavraSorteada.map((letra) => (auxilidandoRenderizacao.includes(letra) ? letra : " _ "))
            setRenderizandoPalavraSorteada(arrayRenderizado)
            console.log(palavraSorteada)
        }else{
            cicloVida = erros + 1
            setErros(erros + 1)
        } if (cicloVida === 6){  
            setDisableTeclas(true)
            setDisable(false)
            setRenderizandoPalavraSorteada(palavraSorteada.map((letter) => {return letter}))
            setClassePalavra("errou")
        }
    }
    function chuteiPalavra(){
        setChute("")
        console.log(palavraSorteada)
        console.log(chute)
        if(chute === palavraSorteada.join("")){
            setDisableTeclas(true)
            setDisable(false)
            setRenderizandoPalavraSorteada(palavraSorteada.map((letter) => {return letter}))
            setClassePalavra("acertou")
        }else{setDisableTeclas(true)
            setDisable(false)
            setRenderizandoPalavraSorteada(palavraSorteada.map((letter) => {return letter}))
            setClassePalavra("errou")}
    }
    
    return (
        <>
            <div className="container">
                <div className="corpo">
                    <img src={imagens[erros]} />
                    <div className="botaoEunderline">
                        <div>
                        <button className="escolherPalavra" disabled={disable} onClick={getRandom} type="button">Escolher palavra</button>
                        </div>
                      <div>                        
                        <div className={classePalvra}>                     
                            {renderizandoPalavraSorteada}
                            </div>
                        </div>
                    </div>
                </div>
                <Teclado chutes={chutes} disabled={disableTeclas} onClick={(letra)=> { chuteiLetra(letra) }} />
                <div>
                    <div className="chutarPalavra">
                        <div className="insiraResposta">Já sei a Palavra!</div>
                        <input className="inputChutar" value={chute} onChange={e=> setChute(e.target.value)} type="text" placeholder="" />
                        <button disabled={disableTeclas} className="buttonChutar" onClick={chuteiPalavra} type="button">chutar</button>
                    </div>
                </div>
            </div>


        </>
    )
}

