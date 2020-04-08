module.exports = {

    repleceString(oldS, newS, string) {
        return string.split(oldS).join(newS);
    },

    percentHomensInfectados(string) {
        const percentHomens = this.repleceString('(', '', string);

        return Number(percentHomens);
    },

    qtdHomensInfectados(tot, percentH) {
        return Math.round(tot * (percentH / 100));
    },

    maiorProporcaoHomens(index) {
        let proporcao = '';

        for (let i = 0; i < 5; i++) {
            proporcao += this.repleceString('%20', ' ', index[i]);
        }

        return proporcao;
    },

    maiorIncidencia(string) {
        let incidencia = this.repleceString('%20', ' ', string);

        return this.repleceString('%C3%AA', 'ê', incidencia); 
    }

}