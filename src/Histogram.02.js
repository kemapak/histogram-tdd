class Histogram {
	static errorMessages = {
		notValidString: 'Histogram must be initialized with an English alphabet a-z or A-Z based string.'
	};

	#text = '';

	get text() {
		return this.#text;
	}

	#map = new Map([
		['a', 0], ['b', 0], ['c', 0], ['d', 0], ['e', 0], ['f', 0], ['g', 0], ['h', 0], ['i', 0],
		['j', 0], ['k', 0], ['l', 0], ['m', 0], ['n', 0], ['o', 0], ['p', 0], ['q', 0], ['r', 0],
		['s', 0], ['t', 0], ['u', 0], ['v', 0], ['w', 0], ['x', 0], ['y', 0], ['z', 0]
	]);

	get map() {
		return this.#map;
	}

	constructor(value) {
		if ('string' !== typeof value) {
			throw new Error(Histogram.errorMessages.notValidString);
		}

		let regex = new RegExp(/[^a-z]/, 'gi');

		if (null !== value.match(regex)) {
			throw new Error(Histogram.errorMessages.notValidString);
		}

		this.#text = value;
		this.populateMap();
	}

	getLetterOccurrence(letter) {
		let regex = new RegExp(letter, 'gi');
		let result = this.#text.match(regex);
		return (null !== result) ? result.length : 0;
	}

	populateMap() {
		this.#map.forEach((value, key) => {
			this.#map.set(key, this.getLetterOccurrence(key));
		});
	}

	toArray() {
		return Array.from(this.map);
	}

	formattedReport() {
		let letterIndex = 0;
		let valueIndex = 1;
		let result = '';
		let percentage = 0;
		let textLength = this.#text.length;

		let resultArray = this.toArray().filter((item) => {
			return item[valueIndex] > 0;
		});

		resultArray.forEach(item => {
			percentage = (item[valueIndex] / textLength) * 100;
			result += item[letterIndex] + ': ' + percentage + '%\n';
		});

		return result;
	}
}

module.exports = Histogram;
