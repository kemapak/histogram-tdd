class Histogram01 {

    #text = '';
    get text(){

        return this.#text
    }

    #map = [
        {letter: 'a', value: 0}, {letter: 'b', value: 0}, {letter: 'c', value: 0}, {letter: 'd', value: 0},
        {letter: 'e', value: 0}, {letter: 'f', value: 0}, {letter: 'g', value: 0}, {letter: 'h', value: 0},
        {letter: 'i', value: 0}, {letter: 'j', value: 0}, {letter: 'k', value: 0}, {letter: 'l', value: 0},
        {letter: 'm', value: 0}, {letter: 'n', value: 0}, {letter: 'o', value: 0}, {letter: 'p', value: 0},
        {letter: 'q', value: 0}, {letter: 'r', value: 0}, {letter: 's', value: 0}, {letter: 't', value: 0},
        {letter: 'u', value: 0}, {letter: 'v', value: 0}, {letter: 'w', value: 0}, {letter: 'x', value: 0},
        {letter: 'y', value: 0}, {letter: 'z', value: 0}
    ];
    get map(){

        return this.#map;
    }

    static errorMessages = {

        notValidString: 'Histogram must be initialized with an English alphabetic string a-z or A-Z.'
    }

    constructor(paramText) {

        if ('string' !== typeof paramText) {
            throw new Error(Histogram01.errorMessages.notValidString);
        }

        let regex = new RegExp(/[^a-z]/, 'gi');

        if (null !== paramText.match(regex)) {
            throw new Error(Histogram01.errorMessages.notValidString);
        }

        this.#text = paramText;
        this.populateMap();
    }

    getLetterOccurrence(letter) {

        let regex = new RegExp(letter, 'gi');
        let result = this.#text.match(regex);
        return (null !== result) ? result.length : 0;
    }

    populateMap() {

        for (let letterIndex = 0; letterIndex < 26; letterIndex++) {
            this.#map[letterIndex].value = this.getLetterOccurrence(this.#map[letterIndex].letter);
        }
    }

    formattedReport() {
        let result = '';
        let percentage = 0;

        for (let letterIndex = 0; letterIndex < 26; letterIndex++) {

            if (0 === this.#map[letterIndex].value) {
                continue;
            }

            percentage = (this.#map[letterIndex].value / this.#text.length) * 100;

            result += this.#map[letterIndex].letter + ': ' + percentage + '%\n';
        }

        return result;
    }

}

module.exports = Histogram01;