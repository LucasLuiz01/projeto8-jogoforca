import estadoInicial from "./assets/forca0.png"
import estado1erro from "./assets/forca1.png"
import estado2erro from "./assets/forca2.png"
import estado3erro from "./assets/forca3.png"
import estado4erro from "./assets/forca4.png"
import estado5erro from "./assets/forca5.png"
import estadoFinal from "./assets/forca6.png"
import palavras from "./Palavras"
import React from "react"
export default function App() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let palavraSorteada = []
    const [disable, setDisable] = React.useState(false)
    const [letras, setLetras] = React.useState("")
    const [underline, setUnderline] = React.useState("")
    let letrasVariavel = ""
    let underlineVariavel = ""
    function gerandoLetras (v){
        letrasVariavel = letrasVariavel+`${v}  `;
        underlineVariavel =  underlineVariavel+`_  `;
    }
    function getRandom() {
        let stringWord = (palavras[Math.floor(Math.random() * palavras.length)])
        for (let i = 0; i < stringWord.length; i++) {
            palavraSorteada[i] = (stringWord[i])
        }
        if (palavraSorteada !== palavraSorteada.length) {
            setDisable(true)
        }
        if(palavraSorteada.length !==0){
            palavraSorteada.map(gerandoLetras)
        }
        setLetras(letrasVariavel)
        setUnderline(underlineVariavel)
        console.log(letrasVariavel.length)
        console.log(underlineVariavel.length)
    }
    return (
        <>
            <div className="container">
                <div className="corpo">
                    <img src={estadoInicial} />
                    <div className="botaoEunderline">
                        <button className="escolherPalavra" disabled={disable} onClick={getRandom} type="button">Escolher palavra</button>
                        <div className="letrasSorteadas">                     
                            <span>{letras}</span>
                            <div className="UnderlinesSorteadas">
                            <span>{underline}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tecladoVirtual">
                    {alfabeto.map((v) =>
                        <button className="teclas">{v}</button>
                    )}
                </div>
                <div>
                    <div className="chutarPalavra">
                        <span>Insira aqui sua resposta</span>
                        <input type="text" placeholder="" />
                        <button type="button">chutar</button>
                    </div>
                </div>
            </div>


        </>
    )
}