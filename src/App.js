import estadoInicial from "./assets/forca0.png"
import estado1erro from "./assets/forca1.png"
import estado2erro from "./assets/forca2.png"
import estado3erro from "./assets/forca3.png"
import estado4erro from "./assets/forca4.png"
import estado5erro from "./assets/forca5.png"
import estadoFinal from "./assets/forca6.png"
export default function App (){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return(
        <>
        <div className="container">
            <div className="forcaEescolherPalavra">
            <img src={estadoInicial} />
            <div className="botaoEunderline">
            <button className="escolherPalavra" type="button">Escolher palavra</button>
                <div className="palavraAserAdivinhada"></div>
            </div>
            </div>
            <div className="teclado">
                {alfabeto.map((v)=>
                <button className="botao">{v}</button>
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