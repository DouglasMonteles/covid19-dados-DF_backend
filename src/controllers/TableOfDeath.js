const utils = require('./utils');

module.exports = {
    tabelaObitosDF(info) {
        const titulo = [];
        const conteudo = [];

        for (let i = 47; i < (info.length - 64); i++) {
            if (i >= 47 && i <= 51) {
                let dado = (utils.repleceString('%20', ' ', info[i].R[0].T));
                titulo.push(utils.repleceString('%C3%B3', 'Ó', dado)); 
            } else {
                console.log("Indice: " + i);
                let numero = parseInt(info[i].R[0].T);
                i++;
                let dataObito = utils.repleceString('%2F', '/', info[i].R[0].T);
                i++;
                let sexo = info[i].R[0].T;
                i++;
                let idade = parseInt(info[i].R[0].T);
                i++;
                let comorbidades = info[i].R[0].T;

                conteudo.push({
                    numero,
                    dataObito,
                    sexo,
                    idade,
                    comorbidades,
                });
            }
        }

        const tabela = {
            titulo,
            conteudo,
        }

        return tabela;
    }
};