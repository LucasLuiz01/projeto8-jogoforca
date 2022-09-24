import estadoInicial from "./assets/forca0.png"
import estado1erro from "./assets/forca1.png"
import estado2erro from "./assets/forca2.png"
import estado3erro from "./assets/forca3.png"
import estado4erro from "./assets/forca4.png"
import estado5erro from "./assets/forca5.png"
import estadoFinal from "./assets/forca6.png"
import palavras from "./Palavras"
import React from "react"
import react from "react"
export default function App() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const imagens = [estadoInicial, estado1erro, estado2erro, estado3erro, estado4erro, estado5erro, estadoFinal]
    const [palavraSorteada, setPalavraSorteada] = react.useState([])
    const [erros, setErros] = react.useState(0)
    const [disable, setDisable] = React.useState(false)
    const [teste, setTeste] = React.useState("")
    const [teclado, setTeclado] = React.useState("desabilitado")
    const [disableTeclas, setDisableTeclas] = React.useState(true)
    const [classePalvra, setClassePalavra] = React.useState("letrasSorteadas")
    const novoArray = []
    function getRandom() {
        let stringWord = (palavras[Math.floor(Math.random() * palavras.length)])
        for (let i = 0; i < stringWord.length; i++) {
             novoArray[i] = (stringWord[i])
         
        } setPalavraSorteada(novoArray)
        if (novoArray !== novoArray.length) {
            setDisable(true)
            setDisableTeclas(false)
            setTeclado("habilitado")
            setErros(0)
        }
        if(novoArray.length !==0){
            setTeste(novoArray.map((letter) => {return " _ "}))
        }
    }
    function chuteiLetra(letraChutada){
        console.log(palavraSorteada)
        
        if(palavraSorteada.includes(letraChutada)){
            const auxiliarLetraChutada = []
            auxiliarLetraChutada.push(letraChutada)
            console.log(auxiliarLetraChutada)
            const arrayRenderizado = palavraSorteada.map((letter) => (auxiliarLetraChutada.includes(letter) ? letter : " _ "))
            setTeste(arrayRenderizado)
        }else{
            setErros(erros + 1)
        } if (erros === 5){  
            setDisableTeclas(true)
            setTeclado("desabilitado")
            setDisable(false)
            setTeste(palavraSorteada.map((letter) => {return letter}))
            setClassePalavra("errou")
        }
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
                            {teste}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tecladoVirtual">
                    {alfabeto.map((v) =>
                        <button disabled={disableTeclas} onClick={()=> chuteiLetra(v)} className={teclado}>{v}</button>
                    )}
                </div>
                <div>
                    <div className="chutarPalavra">
                        <div className="insiraResposta">Já sei a Palavra!</div>
                        <input className="inputChutar" type="text" placeholder="" />
                        <button className="buttonChutar" type="button">chutar</button>
                    </div>
                </div>
            </div>


        </>
    )
}
