const Histogram = require('../src/Histogram.02.js');

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

		let stub = new Map([
			['a', 2], ['b', 1], ['c', 1], ['d', 0], ['e', 0], ['f', 0], ['g', 0], ['h', 0],
			['i', 0], ['j', 0], ['k', 0], ['l', 0], ['m', 0], ['n', 0], ['o', 0], ['p', 0],
			['q', 0], ['r', 0], ['s', 0], ['t', 0], ['u', 0], ['v', 0], ['w', 0], ['x', 2],
			['y', 1], ['z', 1]
		]);

		expect(histogram.map).toEqual(stub);
	});

	test('should return correct number of letter occurrence.', () => {

		let histogram = new Histogram('aaxyz');

		expect(histogram.setLetterOccurrence('x')).toEqual(1);
		expect(histogram.setLetterOccurrence('a')).toEqual(2);
		expect(histogram.setLetterOccurrence('b')).toEqual(0);
	});

	test('should return the correct number of letter occurrences in the map.', () => {

		let histogram = new Histogram('aaxyz');
		let stubMap = new Map([
			['a', 2], ['b', 0], ['c', 0], ['d', 0], ['e', 0], ['f', 0], ['g', 0], ['h', 0],
			['i', 0], ['j', 0], ['k', 0], ['l', 0], ['m', 0], ['n', 0], ['o', 0], ['p', 0],
			['q', 0], ['r', 0], ['s', 0], ['t', 0], ['u', 0], ['v', 0], ['w', 0], ['x', 1],
			['y', 1], ['z', 1]
		]);

		expect(histogram.map).toEqual(stubMap);
	});

	test('should return an array with populated values.', () => {

		let histogram = new Histogram('aaxyz');
		let stubArray = [
			['a', 2], ['b', 0], ['c', 0], ['d', 0], ['e', 0], ['f', 0], ['g', 0], ['h', 0],
			['i', 0], ['j', 0], ['k', 0], ['l', 0], ['m', 0], ['n', 0], ['o', 0], ['p', 0],
			['q', 0], ['r', 0], ['s', 0], ['t', 0], ['u', 0], ['v', 0], ['w', 0], ['x', 1],
			['y', 1], ['z', 1]
		];

		expect(histogram.toArray()).toStrictEqual(stubArray);
	});

	test('should print histogram.', () => {

		let histogram = new Histogram('aaxyz');
		let stub = `a: 40%\nx: 20%\ny: 20%\nz: 20%\n`;
		console.log(stub);

		expect(histogram.formattedReport()).toEqual(stub);
	});
});