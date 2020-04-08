const utils = require('./utils');

module.exports = {
    tabelaCasosPorRegiao(info) {

        let regioes = [];


        for (let i = 13; i < 166; i++) {
            if (info[i].R[0].T === 'Sudoeste' || info[i].R[0].T === 'Central' || info[i].R[0].T === 'Centro Sul' || info[i].R[0].T === 'Norte' || info[i].R[0].T === 'Sul' || info[i].R[0].T === 'Leste' || info[i].R[0].T === 'Oeste') {
                const regiao = utils.repleceString('%20', ' ', info[i].R[0].T);
                i++;
                const totalCasos = parseInt(info[i].R[0].T);
                i++;
                const frequencia = info[i].R[0].T;
                i++;
                const incidencia = info[i].R[0].T;
                
                regioes.push([
                    regiao,
                    totalCasos,
                    frequencia,
                    incidencia,
                ]);
            } else {
                const regiaoAdministrativa = utils.repleceCaractereString(info[i].R[0].T);

                if (info[i].R[0].T === 'SCIA%20' || info[i].R[0].T === 'Ceil%C3%A2ndia') {
                    i++;
                }

                i++;
                const casos = Number(info[i].R[0].T);
                i++;
                const frequencia = utils.repleceString('%2C', ',', info[i].R[0].T);
                i++;
                const incidencia = utils.repleceString('%2C', ',', info[i].R[0].T);

                regioes.push({
                    regiaoAdministrativa,
                    casos,
                    frequencia,
                    incidencia,
                });
            }
        }

        return regioes;
    }
}