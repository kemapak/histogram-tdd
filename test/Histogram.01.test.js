const Histogram = require('../src/Histogram.01.js');

describe('Given a text input Histogram class ', () => {

    test('should be defined.', () => {

        let histogram = new Histogram('xyz');

        expect(histogram instanceof Histogram).toBeTruthy();
    });

    test('should throw an exception if not initiated with an English alphabetic string.', () => {

        expect(() => {new Histogram();}).toThrow(Histogram.errorMessages.notValidString);
        expect(() => {new Histogram('as34r');}).toThrow(Histogram.errorMessages.notValidString);
        expect(() => {new Histogram('ÖÜğış');}).toThrow(Histogram.errorMessages.notValidString);
        expect(() => {new Histogram('a b c\n');}).toThrow(Histogram.errorMessages.notValidString);
    });

    test('should return text field.', () => {

        let histogram = new Histogram('xyz');

        expect(histogram.text).toEqual('xyz');
    });

    test('should return map field.', () => {

        let histogram = new Histogram('bcaaxxyz');

        let stub = [
            {letter: 'a', value: 2}, {letter: 'b', value: 1}, {letter: 'c', value: 1}, {letter: 'd', value: 0},
            {letter: 'e', value: 0}, {letter: 'f', value: 0}, {letter: 'g', value: 0}, {letter: 'h', value: 0},
            {letter: 'i', value: 0}, {letter: 'j', value: 0}, {letter: 'k', value: 0}, {letter: 'l', value: 0},
            {letter: 'm', value: 0}, {letter: 'n', value: 0}, {letter: 'o', value: 0}, {letter: 'p', value: 0},
            {letter: 'q', value: 0}, {letter: 'r', value: 0}, {letter: 's', value: 0}, {letter: 't', value: 0},
            {letter: 'u', value: 0}, {letter: 'v', value: 0}, {letter: 'w', value: 0}, {letter: 'x', value: 2},
            {letter: 'y', value: 1}, {letter: 'z', value: 1}
        ];

        expect(histogram.map).toEqual(stub);
    });

    test('should return correct number of letter occurrence.', () => {

        let histogram = new Histogram('aaxyz');

        expect(histogram.getLetterOccurrence('x')).toEqual(1);
        expect(histogram.getLetterOccurrence('a')).toEqual(2);
        expect(histogram.getLetterOccurrence('b')).toEqual(0);
    });

    test('should return the correct number of letter occurrences in the map.', () => {

        let histogram = new Histogram('aaxyz');

        let stub = [
            {letter: 'a', value: 2}, {letter: 'b', value: 0}, {letter: 'c', value: 0}, {letter: 'd', value: 0},
            {letter: 'e', value: 0}, {letter: 'f', value: 0}, {letter: 'g', value: 0}, {letter: 'h', value: 0},
            {letter: 'i', value: 0}, {letter: 'j', value: 0}, {letter: 'k', value: 0}, {letter: 'l', value: 0},
            {letter: 'm', value: 0}, {letter: 'n', value: 0}, {letter: 'o', value: 0}, {letter: 'p', value: 0},
            {letter: 'q', value: 0}, {letter: 'r', value: 0}, {letter: 's', value: 0}, {letter: 't', value: 0},
            {letter: 'u', value: 0}, {letter: 'v', value: 0}, {letter: 'w', value: 0}, {letter: 'x', value: 1},
            {letter: 'y', value: 1}, {letter: 'z', value: 1}
        ];

        expect(histogram.map).toEqual(stub);
    });

    test('should print histogram.', () => {

        let histogram = new Histogram('aaxyz');

        let stub = `a: 40%\nx: 20%\ny: 20%\nz: 20%\n`;
        console.log(stub);

        expect(histogram.formattedReport()).toEqual(stub);
    });

});