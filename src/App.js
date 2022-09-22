import estadoInicial from "./assets/forca0.png"
import estado1erro from "./assets/forca1.png"
import estado2erro from "./assets/forca2.png"
import estado3erro from "./assets/forca3.png"
import estado4erro from "./assets/forca4.png"
import estado5erro from "./assets/forca5.png"
import estadoFinal from "./assets/forca6.png"
import palavras from "./Palavras"
export default function App (){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let palavraSorteada = []
    function getRandom() {      
       let stringWord =(palavras[Math.floor(Math.random() * palavras.length)])
       for(let i = 0; i < stringWord.length; i++){
        palavraSorteada.push(stringWord[i])
       }
       console.log(palavraSorteada)
    }
    return(
        <>
        <div className="container">
            <div className="corpo">
            <img src={estadoInicial} />
            <div className="botaoEunderline">
            <button className="escolherPalavra" onClick={getRandom} type="button">Escolher palavra</button>
                <div className="palavraAserAdivinhada">
                <span></span>
                </div>
            </div>
            </div>
            <div className="tecladoVirtual">
                {alfabeto.map((v)=>
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