let codigo = [
    '%20',
    '%C3%81', 
    '%2F',      
    '%C3%A3',
    '%C3%A2',
    '%C3%BA',
    'C3%A3',
    '%C3%A1',
];

let caractere = [
    ' ',
    'Á',
    '/',
    'ã',
    'â',
    'ú',
    'ã',
    'á',
];

module.exports = {

    repleceString(oldS, newS, string) {
        return string.split(oldS).join(newS);
    },

    repleceCaractereString(string) {

        for (let i = 0; i < codigo.length; i++) {
            if (string.indexOf(codigo[i]) > -1) {
                string = this.repleceString(codigo[i], caractere[i], string);
            } 
        }

        return string;
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