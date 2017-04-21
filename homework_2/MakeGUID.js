function getGUID(){
	var number = "";
	var rand;
	for(var i = 0; i < 8; i++){
		rand = Math.floor(Math.random()*16);
		number += rand.toString(16);
	}

	for(var j = 0; j < 3; j++){
		number += "-";
		for(var i = 0; i < 4; i++){
			rand = Math.floor(Math.random()*16);
			number += rand.toString(16);
		}
	}

	number += "-";
	for(var i = 0; i < 12; i++){
		rand = Math.floor(Math.random()*16);
		number += rand.toString(16);
	}

	return number;
}





function s4(){
	return Math.random().toString(36).substr(2, 4);
}

function makeNumber(){
	return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}