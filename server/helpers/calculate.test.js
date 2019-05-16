const calculate = require('./calculate.js')

test('Check median for prime numbers of 18 is 7 ', () => {
	expect(calculate.getMedian(18)).toStrictEqual([7]);
});

test('Check median for prime numbers of 10 is 3,5 ', () => {
	expect(calculate.getMedian(10)).toStrictEqual([3,5]);
});

test('Check 1 is not a prime number', () => {
	expect(calculate.getMedian(1)).toBe(false);
})

test('Check negative numbers cannot be prime', () => {
	expect(calculate.getMedian(-5)).toBe(false);
})

test('Median of a single prime number set is the number itself', () => {
	expect(calculate.getMedian(2)).toStrictEqual([2]);
})
