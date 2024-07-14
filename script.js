function fibonacci(num) {
// your code here
	while (num>0) {
		let n1 = 0;
		let n2 = 1;
		let n3 = 0;
		if (num == 1) {
			return n1
		}
		else if (num == 2 || num == 3) {
			return n2
		}
		else if (num > 3) {
			for (let i = 3; i <= num; i++) {
				n3 = n1 + n2
				n1 = n2 
				n2 = n3
			}
			return n3
		}
	}
}

module.exports = fibonacci;
