//FIND THE PARITY OUTLIER
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// URL
// https://www.codewars.com/kata/find-the-parity-outlier

function findOutlier(integers) {
	let e = 0; //number of even integers
	let o = 0; //number of odd integers
	let evenInteger;
	let oddInteger;
	for (i = 0; i < integers.length; i++) {
		if (integers[i] % 2 === 0) {
			e += 1;
			evenInteger = integers[i];
		} else if (integers[i] % 2 !== 0) {
			o += 1;
			oddInteger = integers[i];
		}
	}
	if (e === 1) {
		return evenInteger;
	} else if (o === 1) {
		return oddInteger;
	}
}
