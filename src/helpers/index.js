function removerAcentos(palavra) {
    return palavra.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function numeroDeOcorrencias(letra, palavra) {
    let ocorrencias = 0;

    for (let i = 0; i < palavra.length; i++) {
        if (letra === palavra[i]) {
            ocorrencias = ocorrencias + 1;
        }
    }

    return ocorrencias;
}

export { removerAcentos, numeroDeOcorrencias }; 