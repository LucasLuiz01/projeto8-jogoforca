import React from "react";

function Teclado(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    return (
        <div className="tecladoVirtual">
            {alfabeto.map((letra, indice) =>
                <button
                    id={indice}
                    className={props.disabled || props.chutes.includes(letra) ? 'desabilitado' : 'habilitado'}
                    disabled={props.disabled || props.chutes.includes(letra)}
                    onClick={() => props.onClick(letra)}
                >
                    {letra}
                </button>
            )}
        </div>);
}

export { Teclado };