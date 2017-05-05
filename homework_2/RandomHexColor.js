function getRandomHexColor(){
	var color = "#";
	for(var i = 0; i < 6; i++){
		var rand = Math.floor(Math.random()*16);
		// if(rand > 9) {		    
		//     rand = rand.toString(16);
		//     }
		color += rand.toString(16);
	}
	return color;
}

console.log(getRandomHexColor());


// function getNumber(){
// 	return Math.random().toString(16).substr(2, 6);
// 	// math.radom()-y talis e 0-1 simvol, 0.bl12bla...,
// 	 // tostring(16)-y 16-akan hamakargi e veracum u darznum string,
// 	  // substr(2, 6)-y vercnum e 2-rd simvol-ic minchev 6-rd-y,
// 	   // aysinqn` .-ic heto
// }