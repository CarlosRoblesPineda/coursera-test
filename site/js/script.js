function square (x) {
	return (x * x)
}

function sumofsquares (x, y) {
	var calculation = (square(x) + square(y))
	return calculation
}

function biggest (x, y, z) {

	function secondoption (x, y, z) {
		if (y >= z) {return y
		} else {return z}
	};
	
	function thirdoption (x, y, z) {
		if (x >= z) {return x
		} else {return z}
	};
		
	if (x >= y) {return sumofsquares(x, secondoption())
	} else { return sumofsquares(y, thirdoption()) }
}
