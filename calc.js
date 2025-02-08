function addFunction() {
  	var x = document.getElementById("num1").value;
  	var y = document.getElementById("num2").value;
  	var sum = parseInt(x) + parseInt(y);
 	
  	document.getElementById("res").innerHTML = "The sum of " + x + " and " + y + " is " + sum + ".";
  	var x = 0, y = 0, sum = 0;
  	return;
}

function subFunction() {
  	var x = document.getElementById("num1").value;
  	var y = document.getElementById("num2").value;
  	var dif = parseInt(x) - parseInt(y);
  
  	document.getElementById("res").innerHTML = "The difference of " + x + " and " + y + " is " + dif + ".";
  	var x = 0, y = 0, dif = 0;
  	return;
}

function mulFunction() {
  	var x = document.getElementById("num1").value;
  	var y = document.getElementById("num2").value;
  	var pro = parseInt(x) * parseInt(y);
 
  	document.getElementById("res").innerHTML = "The product of " + x + " and " + y + " is " + pro + ".";
  	var x = 0, y = 0, pro = 0;
  	return;
}

function divFunction() {
  	var x = document.getElementById("num1").value;
  	var y = document.getElementById("num2").value;
  	var quo = parseInt(x) / parseInt(y);
  
  	document.getElementById("res").innerHTML = "The quotient of " + x + " and " + y + " is " + quo + ".";
  	var x = 0, y = 0, quo = 0;
  	return;
}
	
function modFunction() {
 	 var x = document.getElementById("num1").value;
 	 var y = document.getElementById("num2").value;
 	 var rem = parseInt(x) % parseInt(y);
  
 	 document.getElementById("res").innerHTML = "The remainder of " + x + " and " + y + " is " + rem + ".";
 	 var x = 0, y = 0, rem = 0;
 	 return;
}

