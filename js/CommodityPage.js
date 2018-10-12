function $(str){
		if(str.charAt(0)=="#"){
			return document.getElementById(str.substring(1));
		}else if(str.charAt(0)=="."){
			return document.getElementsByClassName(str.substring(1));
		}else{
			return document.getElementsByTagName(str);
		}
	}
	
window.onload = function(){
	zidong();
	goodsList();
}
// ==================================================
function btgb(a){
	let yspd=a;
	let dqzt=a.nextElementSibling.style.display;
	if(dqzt==""||dqzt=="none"){
		yspd.style.backgroundColor="#FE6050";
		yspd.style.color="#fff";
		yspd.nextElementSibling.style.display="block";
	}else{
		yspd.style.backgroundColor="#dedede";
		yspd.style.color="#000";
		yspd.nextElementSibling.style.display="none";
	}
}
// ==================================================
function goodsList(){
	let xhr=new XMLHttpRequest();
	xhr.open("get","php/getGoodsList.php",true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			showGoodsList(xhr.responseText);
		}
	}
	xhr.send();
}
function showGoodsList(str){
	let arr= JSON.parse(str);
	let htmlStr="";
	let nehtml=$(".sthez1_3")[0];
	for(let i=0;i<arr.length;i++){
		htmlStr+='<div class="sthez1_3_1"><div class="sthez1_3_1_1"><img src="img/'+arr[i].goodsImg+'"></div><div class="sthez1_3_1_2"><p>'+arr[i].goodsName+'</p><span>￥'+arr[i].goodsPrice+'</span></div></div>'

	}
	nehtml.innerHTML=htmlStr;
}