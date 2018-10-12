	function $(str){
		if(str.charAt(0)=="#"){
			return document.getElementById(str.substring(1));
		}else if(str.charAt(0)=="."){
			return document.getElementsByClassName(str.substring(1));
		}else{
			return document.getElementsByTagName(str);
		}
	}
//========================================================================
function banbianfangdazuo(){
	let tu=$(".shenti12");
	tu=tu[0];
	let newleft=tu.offsetLeft;
	let newtop=tu.offsetTop;
	if(newleft<=-50||newtop<=-100){
		let mytime=setInterval(function(){
			newleft=newleft+1;
			newtop=newtop+1;
			tu.style.left=newleft+"px";
			tu.style.top=newtop+"px";
			if(newleft>=-50||newtop>=-100){
				window.clearInterval(mytime);
			}
		},5);
	}
	
}
function banbiansuoxiaozuo(){
	let tu=$(".shenti12");
	tu=tu[0];
	let newleft=tu.offsetLeft;
	let newtop=tu.offsetTop;
	if(newleft>=-50||newtop>=-100){
		let mytime=setInterval(function(){
			newleft=newleft-1;
			newtop=newtop-1;
			tu.style.left=newleft+"px";
			tu.style.top=newtop+"px";
			if(newleft<=-100||newtop<=-150){
				window.clearInterval(mytime);
			}
		},5);
	}
	
}
function banbianfangdayou(){
	let tu=$(".shenti13");
	tu=tu[0];
	let newright=tu.offsetLeft;
	let newbottom=tu.offsetTop;
	
	if(newright>=1072||newbottom>=80){
		let mytime=setInterval(function(){
			newright=newright-1;
			newbottom=newbottom-1;
			tu.style.left=newright+"px";
			tu.style.top=newbottom+"px";
			if(newright<=1072||newbottom<=80){
				window.clearInterval(mytime);
			}
		},5);
	}	
}
function banbiansuoxiaoyou(){
	let tu=$(".shenti13");
	tu=tu[0];
	let newright=tu.offsetLeft;
	let newbottom=tu.offsetTop;
	
	if(newright<=1072||newbottom<=80){
		let mytime=setInterval(function(){
			newright=newright+1;
			newbottom=newbottom+1;
			tu.style.left=newright+"px";
			tu.style.top=newbottom+"px";
			if(newright>=1122||newbottom>=130){
				window.clearInterval(mytime);
			}
		},5);
	}	
}
window.onload = function(){
	zidong();
}