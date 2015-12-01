var move = true;
var upward = true;
var leftward = true;
var range = 1;
var mark = true;

function flying(){
	//------------- up/down
	if (upward == true){	//step up or down
		document.getElementById("flyingdiv").style.top=parseInt(document.getElementById("flyingdiv").style.top)+range+"px"; 
	}
	else{
		document.getElementById("flyingdiv").style.top=parseInt(document.getElementById("flyingdiv").style.top)-range+"px";
	}
	
	if (parseInt(document.getElementById("flyingdiv").style.top)>document.body.clientHeight-60){
		upward = false;		//impact on bottom
	} 
	if (parseInt(document.getElementById("flyingdiv").style.top)<10){
		upward = true;		//impact on top
	} 
		
	//------------- left/right
	if (leftward == true){	//step left or right
		document.getElementById("flyingdiv").style.left=parseInt(document.getElementById("flyingdiv").style.left)+range+"px"; 
	}
	else{
		document.getElementById("flyingdiv").style.left=parseInt(document.getElementById("flyingdiv").style.left)-range+"px";
	}
	
	if (parseInt(document.getElementById("flyingdiv").style.left)>document.body.clientWidth-66){
		leftward = false;		//impact on right
	} 
	if (parseInt(document.getElementById("flyingdiv").style.left)<10){
		leftward = true;		//impact on left
	} 
	
	if (move) {setTimeout("flying()",5);}	//next step
}

function stop(){
	move = false;
	document.getElementById("flyingdiv").style.display = "none";
	document.getElementById("contentdiv").style.display = "block";
}

function start(){
	if(mark == true){
		move = true;
		document.getElementById("flyingdiv").style.display = "block";
		document.getElementById("contentdiv").style.display = "none";
		flying();
	}
}

function ifie(){
	mark = false;
	stop();
}
