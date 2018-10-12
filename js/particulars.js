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

//=======================================================
function jiarugwc(){
	let str = document.cookie;
	let index = str.indexOf("=");
	let username = str.substring(index+1);
	let xhr = new XMLHttpRequest();
		
		xhr.open("post","loginCheck.php",true);
		
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4 && xhr.status==200){
				if(xhr.responseText==1){
					alert("添加成功");
				}else{
					alert("添加失败");
				}
			}
		}		
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		
		let sendStr="vipName="+username+"&goodsId="+$("#idhao").innerHTML+"&goodsCount="+$("#shuliang").innerHTML;
		xhr.send(sendStr);
}
//=======================================================
function goodsList(){
	let xhr=new XMLHttpRequest();

	xhr.open("get","php/getGoodsInfo.php?goodsId="+"00001",true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			showGoodsList(xhr.responseText);
		}
	}
	xhr.send();
}
function showGoodsList(str){
	let arr= JSON.parse(str);
	$(".pinming")[0].innerHTML=arr.goodsName;
}


function goodsLista(){
	let xhr=new XMLHttpRequest();

	xhr.open("get","php/getGoodsInfo.php?goodsId="+"00004",true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			showGoodsLista(xhr.responseText);
		}
	}
	xhr.send();
}
function showGoodsLista(str){
	let arr= JSON.parse(str);
	$(".pinming")[0].innerHTML=arr.goodsName;
}


function goodsListb(){
	let xhr=new XMLHttpRequest();

	xhr.open("get","php/getGoodsInfo.php?goodsId="+"00007",true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			showGoodsListb(xhr.responseText);
		}
	}
	xhr.send();
}
function showGoodsListb(str){
	let arr= JSON.parse(str);
	$(".pinming")[0].innerHTML=arr.goodsName;
}
//=============================================================================
function gaibianyanse(){
	let evt=event||window.event;
	evt.target.style.backgroundColor="#203348";
	evt.target.style.color="#47a8ff";
}
function gmbs(){
	let gmbs=$(".jiage4");
	gmbs=gmbs[0];
	gmbs.style.backgroundColor="#e8ff9a";
}
function gmhf(){
	let gmhf=$(".jiage4");
	gmhf=gmhf[0];
	gmhf.style.backgroundColor="#cef156";
}


function lltu1(){
	let gaibian1=$("#datu1");
	gaibian1=gaibian1;
	gaibian1.style.opacity="1";
	let gaibian2=$("#datu2");
	gaibian2=gaibian2;
	gaibian2.style.opacity="0";
	let gaibian3=$("#datu3");
	gaibian3=gaibian3;
	gaibian3.style.opacity="0";
	let gaibian4=$("#datu4");
	gaibian4=gaibian4;
	gaibian4.style.opacity="0";
	let gaibian5=$("#datu5");
	gaibian5=gaibian5;
	gaibian5.style.opacity="0";
}

function lltu2(){
	let gaibian1=$("#datu1");
	gaibian1=gaibian1;
	gaibian1.style.opacity="0";
	let gaibian2=$("#datu2");
	gaibian2=gaibian2;
	gaibian2.style.opacity="1";
	let gaibian3=$("#datu3");
	gaibian3=gaibian3;
	gaibian3.style.opacity="0";
	let gaibian4=$("#datu4");
	gaibian4=gaibian4;
	gaibian4.style.opacity="0";
	let gaibian5=$("#datu5");
	gaibian5=gaibian5;
	gaibian5.style.opacity="0";
}

function lltu3(){
	let gaibian1=$("#datu1");
	gaibian1=gaibian1;
	gaibian1.style.opacity="0";
	let gaibian2=$("#datu2");
	gaibian2=gaibian2;
	gaibian2.style.opacity="0";
	let gaibian3=$("#datu3");
	gaibian3=gaibian3;
	gaibian3.style.opacity="1";
	let gaibian4=$("#datu4");
	gaibian4=gaibian4;
	gaibian4.style.opacity="0";
	let gaibian5=$("#datu5");
	gaibian5=gaibian5;
	gaibian5.style.opacity="0";
}

function lltu4(){
	let gaibian1=$("#datu1");
	gaibian1=gaibian1;
	gaibian1.style.opacity="0";
	let gaibian2=$("#datu2");
	gaibian2=gaibian2;
	gaibian2.style.opacity="0";
	let gaibian3=$("#datu3");
	gaibian3=gaibian3;
	gaibian3.style.opacity="0";
	let gaibian4=$("#datu4");
	gaibian4=gaibian4;
	gaibian4.style.opacity="1";
	let gaibian5=$("#datu5");
	gaibian5=gaibian5;
	gaibian5.style.opacity="0";
}

function lltu5(){
	let gaibian1=$("#datu1");
	gaibian1=gaibian1;
	gaibian1.style.opacity="0";
	let gaibian2=$("#datu2");
	gaibian2=gaibian2;
	gaibian2.style.opacity="0";
	let gaibian3=$("#datu3");
	gaibian3=gaibian3;
	gaibian3.style.opacity="0";
	let gaibian4=$("#datu4");
	gaibian4=gaibian4;
	gaibian4.style.opacity="0";
	let gaibian5=$("#datu5");
	gaibian5=gaibian5;
	gaibian5.style.opacity="1";
}

var lsjsq=1;

function dianjixx1(){
	lsjsq=1;
	let dianji1=$(".xiangxinr1");
	dianji1=dianji1[0];
	dianji1.style.backgroundColor="#000";
	dianji1.style.color="#fff"
	let dianji2=$(".xiangxinr2");
	dianji2=dianji2[0];
	dianji2.style.backgroundColor="#fff";
	dianji2.style.color="#000"
	let dianji3=$(".xiangxinr3");
	dianji3=dianji3[0];
	dianji3.style.backgroundColor="#fff";
	dianji3.style.color="#000"
	let dianji4=$(".xiangxinr4");
	dianji4=dianji4[0];
	dianji4.style.backgroundColor="#fff";
	dianji4.style.color="#000"
	let dianji5=$(".xiangxinr5");
	dianji5=dianji5[0];
	dianji5.style.backgroundColor="#fff";
	dianji5.style.color="#000"
	let xinxilan1=$(".xxnr1");
	xinxilan1=xinxilan1[0];
	xinxilan1.style.display="block";
	let xinxilan2=$(".xxnr2");
	xinxilan2=xinxilan2[0];
	xinxilan2.style.display="none";
	let xinxilan3=$(".xxnr3");
	xinxilan3=xinxilan3[0];
	xinxilan3.style.display="none";
	let xinxilan4=$(".xxnr4");
	xinxilan4=xinxilan4[0];
	xinxilan4.style.display="none";
	let xinxilan5=$(".xxnr5");
	xinxilan5=xinxilan5[0];
	xinxilan5.style.display="none";
}
function dianjixx2(){
	lsjsq=2;
	let dianji1=$(".xiangxinr1");
	dianji1=dianji1[0];
	dianji1.style.backgroundColor="#fff";
	dianji1.style.color="#000"
	let dianji2=$(".xiangxinr2");
	dianji2=dianji2[0];
	dianji2.style.backgroundColor="#000";
	dianji2.style.color="#fff"
	let dianji3=$(".xiangxinr3");
	dianji3=dianji3[0];
	dianji3.style.backgroundColor="#fff";
	dianji3.style.color="#000"
	let dianji4=$(".xiangxinr4");
	dianji4=dianji4[0];
	dianji4.style.backgroundColor="#fff";
	dianji4.style.color="#000"
	let dianji5=$(".xiangxinr5");
	dianji5=dianji5[0];
	dianji5.style.backgroundColor="#fff";
	dianji5.style.color="#000"
	let xinxilan1=$(".xxnr1");
	xinxilan1=xinxilan1[0];
	xinxilan1.style.display="none";
	let xinxilan2=$(".xxnr2");
	xinxilan2=xinxilan2[0];
	xinxilan2.style.display="block";
	let xinxilan3=$(".xxnr3");
	xinxilan3=xinxilan3[0];
	xinxilan3.style.display="none";
	let xinxilan4=$(".xxnr4");
	xinxilan4=xinxilan4[0];
	xinxilan4.style.display="none";
	let xinxilan5=$(".xxnr5");
	xinxilan5=xinxilan5[0];
	xinxilan5.style.display="none";
}
function dianjixx3(){
	lsjsq=3;
	let dianji1=$(".xiangxinr1");
	dianji1=dianji1[0];
	dianji1.style.backgroundColor="#fff";
	dianji1.style.color="#000"
	let dianji2=$(".xiangxinr2");
	dianji2=dianji2[0];
	dianji2.style.backgroundColor="#fff";
	dianji2.style.color="#000"
	let dianji3=$(".xiangxinr3");
	dianji3=dianji3[0];
	dianji3.style.backgroundColor="#000";
	dianji3.style.color="#fff"
	let dianji4=$(".xiangxinr4");
	dianji4=dianji4[0];
	dianji4.style.backgroundColor="#fff";
	dianji4.style.color="#000"
	let dianji5=$(".xiangxinr5");
	dianji5=dianji5[0];
	dianji5.style.backgroundColor="#fff";
	dianji5.style.color="#000"
	let xinxilan1=$(".xxnr1");
	xinxilan1=xinxilan1[0];
	xinxilan1.style.display="none";
	let xinxilan2=$(".xxnr2");
	xinxilan2=xinxilan2[0];
	xinxilan2.style.display="none";
	let xinxilan3=$(".xxnr3");
	xinxilan3=xinxilan3[0];
	xinxilan3.style.display="block";
	let xinxilan4=$(".xxnr4");
	xinxilan4=xinxilan4[0];
	xinxilan4.style.display="none";
	let xinxilan5=$(".xxnr5");
	xinxilan5=xinxilan5[0];
	xinxilan5.style.display="none";
}
function dianjixx4(){
	lsjsq=4;
	let dianji1=$(".xiangxinr1");
	dianji1=dianji1[0];
	dianji1.style.backgroundColor="#fff";
	dianji1.style.color="#000"
	let dianji2=$(".xiangxinr2");
	dianji2=dianji2[0];
	dianji2.style.backgroundColor="#fff";
	dianji2.style.color="#000"
	let dianji3=$(".xiangxinr3");
	dianji3=dianji3[0];
	dianji3.style.backgroundColor="#fff";
	dianji3.style.color="#000"
	let dianji4=$(".xiangxinr4");
	dianji4=dianji4[0];
	dianji4.style.backgroundColor="#000";
	dianji4.style.color="#fff"
	let dianji5=$(".xiangxinr5");
	dianji5=dianji5[0];
	dianji5.style.backgroundColor="#fff";
	dianji5.style.color="#000"
	let xinxilan1=$(".xxnr1");
	xinxilan1=xinxilan1[0];
	xinxilan1.style.display="none";
	let xinxilan2=$(".xxnr2");
	xinxilan2=xinxilan2[0];
	xinxilan2.style.display="none";
	let xinxilan3=$(".xxnr3");
	xinxilan3=xinxilan3[0];
	xinxilan3.style.display="none";
	let xinxilan4=$(".xxnr4");
	xinxilan4=xinxilan4[0];
	xinxilan4.style.display="block";
	let xinxilan5=$(".xxnr5");
	xinxilan5=xinxilan5[0];
	xinxilan5.style.display="none";
}
function dianjixx5(){
	lsjsq=5;
	let dianji1=$(".xiangxinr1");
	dianji1=dianji1[0];
	dianji1.style.backgroundColor="#fff";
	dianji1.style.color="#000"
	let dianji2=$(".xiangxinr2");
	dianji2=dianji2[0];
	dianji2.style.backgroundColor="#fff";
	dianji2.style.color="#000"
	let dianji3=$(".xiangxinr3");
	dianji3=dianji3[0];
	dianji3.style.backgroundColor="#fff";
	dianji3.style.color="#000"
	let dianji4=$(".xiangxinr4");
	dianji4=dianji4[0];
	dianji4.style.backgroundColor="#fff";
	dianji4.style.color="#000"
	let dianji5=$(".xiangxinr5");
	dianji5=dianji5[0];
	dianji5.style.backgroundColor="#000";
	dianji5.style.color="#fff"
	let xinxilan1=$(".xxnr1");
	xinxilan1=xinxilan1[0];
	xinxilan1.style.display="none";
	let xinxilan2=$(".xxnr2");
	xinxilan2=xinxilan2[0];
	xinxilan2.style.display="none";
	let xinxilan3=$(".xxnr3");
	xinxilan3=xinxilan3[0];
	xinxilan3.style.display="none";
	let xinxilan4=$(".xxnr4");
	xinxilan4=xinxilan4[0];
	xinxilan4.style.display="none";
	let xinxilan5=$(".xxnr5");
	xinxilan5=xinxilan5[0];
	xinxilan5.style.display="block";
}



function huaguobs1(){
	if(lsjsq!=1){
	let dianji1=$(".xiangxinr1");
	dianji1=dianji1[0];
	dianji1.style.backgroundColor="#000";
	dianji1.style.color="#fff"
	}
}
function huaguohf1(){
	if(lsjsq!=1){
	let dianji1=$(".xiangxinr1");
	dianji1=dianji1[0];
	dianji1.style.backgroundColor="#fff";
	dianji1.style.color="#000"
	}
}
function huaguobs2(){
	if(lsjsq!=2){
	let dianji1=$(".xiangxinr2");
	dianji1=dianji1[0];
	dianji1.style.backgroundColor="#000";
	dianji1.style.color="#fff"
	}
}
function huaguohf2(){
	if(lsjsq!=2){
	let dianji1=$(".xiangxinr2");
	dianji1=dianji1[0];
	dianji1.style.backgroundColor="#fff";
	dianji1.style.color="#000"
	}
}
function huaguobs3(){
	if(lsjsq!=3){
	let dianji1=$(".xiangxinr3");
	dianji1=dianji1[0];
	dianji1.style.backgroundColor="#000";
	dianji1.style.color="#fff"
	}
}
function huaguohf3(){
	if(lsjsq!=3){
	let dianji1=$(".xiangxinr3");
	dianji1=dianji1[0];
	dianji1.style.backgroundColor="#fff";
	dianji1.style.color="#000"
	}
}
function huaguobs4(){
	if(lsjsq!=4){
	let dianji1=$(".xiangxinr4");
	dianji1=dianji1[0];
	dianji1.style.backgroundColor="#000";
	dianji1.style.color="#fff"
	}
}
function huaguohf4(){
	if(lsjsq!=4){
	let dianji1=$(".xiangxinr4");
	dianji1=dianji1[0];
	dianji1.style.backgroundColor="#fff";
	dianji1.style.color="#000"
	}
}
function huaguobs5(){
	if(lsjsq!=5){
	let dianji1=$(".xiangxinr5");
	dianji1=dianji1[0];
	dianji1.style.backgroundColor="#000";
	dianji1.style.color="#fff"
	}
}
function huaguohf5(){
	if(lsjsq!=5){
	let dianji1=$(".xiangxinr5");
	dianji1=dianji1[0];
	dianji1.style.backgroundColor="#fff";
	dianji1.style.color="#000"
	}
}

	function bianse1(){
		let taocan1=$(".heixuan2");
		let taocan2=$(".heixuan3");
		let taocan3=$(".heixuan4");
		taocan1=taocan1[0];
		taocan2=taocan2[0];
		taocan3=taocan3[0];
		taocan1.style.backgroundColor="#000000";
		taocan1.style.color="#ffffff";
		taocan2.style.backgroundColor="#e1e1e1";
		taocan2.style.color="#000000";
		taocan3.style.backgroundColor="#e1e1e1";
		taocan3.style.color="#000000";
		let yuanjia=$(".jiage");
		yuanjia=yuanjia[0];
		yuanjia.innerHTML="<span class="+"jiage1"+">33 %</span>￥248.00<span class="+"jiage3"+">￥166.16</span><a href="+"#"+" class="+"jiage4"+" onmouseover="+"gmbs()"+" onmouseout="+"gmhf()"+">立刻购买</a>";
		let pinmin=$(".pinming");
		pinmin=pinmin[0];
		goodsList();
	}
	function bianse2(){
		let taocan1=$(".heixuan2");
		let taocan2=$(".heixuan3");
		let taocan3=$(".heixuan4");
		taocan1=taocan1[0];
		taocan2=taocan2[0];
		taocan3=taocan3[0];
		taocan1.style.backgroundColor="#e1e1e1";
		taocan1.style.color="#000000";
		taocan2.style.backgroundColor="#000000";
		taocan2.style.color="#ffffff";
		taocan3.style.backgroundColor="#e1e1e1";
		taocan3.style.color="#000000";
		let yuanjia=$(".jiage");
		yuanjia=yuanjia[0];
		yuanjia.innerHTML="<span class="+"jiage1"+">33 %</span>￥288.00<span class="+"jiage3"+">￥192.00</span><a href="+"#"+" class="+"jiage4"+" onmouseover="+"gmbs()"+" onmouseout="+"gmhf()"+">立刻购买</a>";
		let pinmin=$(".pinming");
		pinmin=pinmin[0];
		goodsLista();
	}
	function bianse3(){
		let taocan1=$(".heixuan2");
		let taocan2=$(".heixuan3");
		let taocan3=$(".heixuan4");
		taocan1=taocan1[0];
		taocan2=taocan2[0];
		taocan3=taocan3[0];
		taocan1.style.backgroundColor="#e1e1e1";
		taocan1.style.color="#000000";
		taocan2.style.backgroundColor="#e1e1e1";
		taocan2.style.color="#000000";
		taocan3.style.backgroundColor="#000000";
		taocan3.style.color="#ffffff";
		let yuanjia=$(".jiage");
		yuanjia=yuanjia[0];
		yuanjia.innerHTML="<span class="+"jiage1"+">33 %</span>￥368.00<span class="+"jiage3"+">￥246.56</span><a href="+"#"+" class="+"jiage4"+" onmouseover="+"gmbs()"+" onmouseout="+"gmhf()"+">立刻购买</a>";
		let pinmin=$(".pinming");
		pinmin=pinmin[0];
		goodsListb();
	}