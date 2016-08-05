var sheng1;
var sheng2;
var Account = function  (exTotal, ActorList){

	sheng1 = exTotal*(ActorList[0]/(ActorList[0]+ActorList[1]));
	sheng2 = exTotal*(ActorList[1]/(ActorList[0]+ActorList[1]));
	document.getElementById("sheng1").value = sheng1+" + "+(ActorList[0] - sheng1);
	document.getElementById("sheng2").value = sheng2+" + "+(ActorList[1] - sheng2);
};
var shou1;
var shou2;
var start_btn;
window.onload = function() {
   this.shou1 = document.getElementById("shou1");
	this.shou1.value  = "";
	this.shou2 = document.getElementById("shou2");
	this.shou2.value  = "fff";
	this.start_btn = document.getElementById("start_btn");
	this.start_btn.onclick = function() {

		var exTotal = document.getElementById("xiaofei").value;
		if(!alerts(Number(shou1.value),"收入1")){
			return;
		};
		if(!alerts(Number(shou2.value),"收入2")){
			return;
		};
		Account(exTotal, [Number(shou1.value), Number(shou2.value)]);
	}
}

function alerts(num,name){
	"use strict";
if(typeof (num)== "string"|| num==0){
	alert(name+"不能为"+num);
	return false;
}
return true;
}

