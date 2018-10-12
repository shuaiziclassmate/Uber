function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}
function emailyza(){
	let em=$("#email").value;
	let nr=/^\w+@\w+\.(com|cn|net)$/;
	if(nr.test(em)){
		$("#emailfk").style.display="none";
	}else if(em==""){
		$("#emailfk").style.display="block";
		$("#emailfk").innerHTML="不能为空"
	}else{
		$("#emailfk").style.display="block";
		$("#emailfk").innerHTML="邮箱地址无效"
	}	
}
function emailyzfka(){
	let em=$("#email").value;
	let ecem=$("#emailyz").value;
	let nr=/^\w+@\w+\.(com|cn|net)$/;
	if(em==ecem){
		$("#emailyzfk").style.display="none";
	}else if(ecem==""){
		$("#emailyzfk").style.display="block";
		$("#emailyzfk").innerHTML="不能为空"
	}else{
		$("#emailyzfk").style.display="block";
		$("#emailyzfk").innerHTML="邮箱地址不匹配"	
	}
}
function mimayza(){
	let em=$("#mima").value;
	let nr=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
	if(nr.test(em)){
		$("#mimafk").style.display="none";
	}else if(em==""){
		$("#mimafk").style.display="block";
		$("#mimafk").innerHTML="不能为空"
	}else{
		$("#mimafk").style.display="block";
		$("#mimafk").innerHTML="请设置8-16位密码至少包含至少1个大写字母和一个小写字母"
	}
}
function yhmyza(){
	let em=$("#yhm").value;
	let nr=/^\w[a-zA-Z]\w{4,14}$/;
	if(nr.test(em)){
		$("#yhmfk").style.display="none";
	}else if(em==""){
		$("#yhmfk").style.display="block";
		$("#yhmfk").innerHTML="不能为空"
	}else{
		$("#yhmfk").style.display="block";
		$("#yhmfk").innerHTML="请设置4-14位帐号"
	}
}
window.onload = function(){
	$("#yhm").onblur = function(){
		//1、创建对象
		let xhr = new XMLHttpRequest();
		//2、设置请求参数
		xhr.open("get","php/checkname01.php?username1="+$("#yhm").value,true);
		
		//3、设置回调函数
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4 && xhr.status==200){
				if(xhr.responseText=="0"){
					$("#yhmaj").innerHTML = "亲，用户名已经存在，请重新选择吧！";				 	   	  
			  	}else{
			  	 	$("#yhmaj").innerHTML = "亲，恭喜您，没人用，赶紧注册吧！";
			  	}
			}
		}
		//4、发送
		xhr.send();	
	}
}