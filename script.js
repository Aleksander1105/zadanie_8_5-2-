//Doesn not work!!
var myFunction = function() {
	var a = parseFloat(document.getElementById('base').value);
	var h = parseFloat(document.getElementById('height').value);

	var output = document.getElementById('output');

	if(isNaN(base) || (isNaN(height)) {
		output.textContent = "0";
	} else {
		var area = 0.5*a*h;
		output.textContent = area;
	}

	//alert('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);
    console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);
	
};
