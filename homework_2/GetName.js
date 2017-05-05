function getName(){
	var name = "";
	var word;
	for(var i = 0; i < arguments.length; i++){
			word ="" + arguments[i];
			if(word != null && word != undefined){
			// word = word.toString();
			word = word.trim();
			name += " " + word;
		}
	}
}

// var a = '[object AbrakaDabra]';
// a.substring(8, a.length-1);  returns "AbracaDabra";
// a.slice(8, -1);   -1 = a.length-1;

// a.substring(-10, 6)  returns  "racarD";