const axios = require('axios');

const utils = require('./utils');
const table = require('./TableOfDeath');

module.exports = {
    async store(req, res) {
        const apiResponse  = await axios.get('https://covid19-api-get-data.herokuapp.com/');

        const { formImage } = apiResponse.data;

        const { Pages } = formImage;

        let data =  Pages[0].Texts[6].R[0].T + 
                    Pages[0].Texts[7].R[0].T + 
                    Pages[0].Texts[8].R[0].T +
                    Pages[0].Texts[9].R[0].T +
                    Pages[0].Texts[10].R[0].T;

        const totalCasos = Number(Pages[0].Texts[85].R[0].T);

        const percentHomens = utils.percentHomensInfectados(Pages[0].Texts[96].R[0].T + Pages[0].Texts[97].R[0].T);

        const homensInfectados = utils.qtdHomensInfectados(totalCasos, percentHomens);

        const mulheresInfectadas = (totalCasos - homensInfectados);

        const medianaIdade = parseInt(Pages[0].Texts[100].R[0].T + Pages[0].Texts[101].R[0].T);

        const maiorProporcao = utils.maiorProporcaoHomens([
            Pages[0].Texts[106].R[0].T,
            Pages[0].Texts[107].R[0].T,
            Pages[0].Texts[108].R[0].T,
            Pages[0].Texts[109].R[0].T,
            Pages[0].Texts[110].R[0].T,
        ]);

        const maiorIncidencia = utils.maiorIncidencia(Pages[0].Texts[112].R[0].T);

        const hospitalizados = [
            parseInt(Pages[0].Texts[116].R[0].T),
            parseInt(Pages[0].Texts[121].R[0].T),
        ];

        const totalObitos = parseInt(Pages[1].Texts[23].R[0].T);

        const tabela = table.tabelaObitosDF(Pages[1].Texts);

        const dados = {
            data,
            totalCasos,
            percentHomens,
            homensInfectados,
            mulheresInfectadas,
            medianaIdade,
            maiorProporcao,
            maiorIncidencia,
            hospitalizados,
            totalObitos,
            tabela,
        };

        console.log(dados);

        for (let i = 0; i < Pages[1].Texts.length; i++) {
            //console.log([i] + " ---> " +Pages[1].Texts[i].R[0].T);
        }

        return res.json(dados);
    }
}