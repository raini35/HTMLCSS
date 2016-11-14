function updateOutput() {
	var form = document.getElementById("calc"); 
	var out = form.elements["z"]; 
	var num1 = parseInt(form.elements["x"].value); 
	var num2 = parseInt(form.elements["y"].value);
	var operator = parseInt(form.elements["op"].value); 
	
	switch(operator) {
		case 0: 
		out.value = num1 + num2; 
		break; 
		
		case 1:
		out.value = num1 - num2; 
		break;  
		
		case 2:
		out.value = num1 * num2; 
		break; 
		 
		case 3:
		out.value = (num1/num2).toFixed(1); 
		break;  
		
		default: 
		break; 
	}
}