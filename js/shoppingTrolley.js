window.onload = function(){
	zidong();
	gouwuchenr();
}
function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}

function gouwuchenr(){
	let str = document.cookie;
	let index = str.indexOf("=");
	let username = str.substring(index+1);
	if(username==""){
		$(".gouwuche1")[0].style.display="none";
		$(".gouwuche2")[0].style.display="none";
		
	}else{
		$("#stgwctou").style.display="none";
		$("#konggwc").style.display="none";
		let xhr = new XMLHttpRequest();
		xhr.open("get","php/getShoppingCart.php?vipName="+username,true);
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status==200){
				showGoodsList(xhr.responseText);
			}
		}
		xhr.send();	
	}
	
}
function showGoodsList(str){
	let arr= JSON.parse(str);
	let htmlStr="";
	let nehtml=$(".gouwuche3")[0];
	for(let i=0;i<arr.length;i++){
		let zongjian=arr[i].goodsPrice;
		let zhekou=arr[i].beiyong1;
		let xianjia=parseInt(zongjian/100*zhekou);
		htmlStr+='<ul><li id="nexli1"><div id="tup"><img src="../img/'+arr[i].goodsImg+'"></div><div id="tup1"><p id="tup1_1"><span>'+arr[i].goodsName+'</span></p><p id="tup1_2">平台: <span>'+arr[i].goodsType+'</span>(下载)</p><p id="tup1_3">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp获得最多<span>'+arr[i].goodsDesc+'</span>点数</p><a id="tup1_4">编辑细节></a></div></li><li id="nexli2"><p><span>1</span></p><a href=""><span>&otimes;</span></a></li><li id="nexli3"><p><span>'+arr[i].goodsCount+'</span></p></li><li id="nexli4"><p id="nexli4_1"><span>'+arr[i].beiyong1+'%</span></p><p id="nexli4_2"><span>￥'+arr[i].goodsPrice+'</span></p><p id="nexli4_3"><span>￥'+xianjia+'</span></p></li><li id="nexli5"><p><span>￥'+xianjia+'</span></p></li></ul>';
	}
	nehtml.innerHTML=htmlStr;
}
