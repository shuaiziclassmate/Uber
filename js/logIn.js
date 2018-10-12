function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}


function emailyz(){
	let em=$("#email").value
	let nr=/^\w+@\w+\.(com|cn|net)$/;
	if(nr.test(em)){
		$("#emailfk").style.display="none";
	}else if(em==""){
		$("#emailfk").style.display="block";
		$("#emailfk").innerHTML="不能为空"
	}else{
		$("#emailfk").style.display="block";
		$("#emailfk").innerHTML="邮箱格式不合法"	
	}
	
}
function zhjc(){
	//1、创建对象
	let xhr = new XMLHttpRequest();
	//2、设置请求参数
	xhr.open("get","php/zhjc.php?emailx="+$("#email").value,true);
	//3、设置回调函数
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			if(xhr.responseText=="0"){
				$("#mimafk").style.display="block";
				// <script>window.close();</script>	
				mmjc();		 	   	  
		  	}else{
		  	 	$("#mimafk").style.display="block";
		  	 	$("#mimafk").innerHTML = "帐号错误";
		  	}
		}
	}
	//4、发送
	xhr.send();	
}
function mmjc(){
	//1、创建对象
	let xhr = new XMLHttpRequest();
	//2、设置请求参数
	xhr.open("get","php/mmjc.php?userPass="+$("#mima").value,true);
	//3、设置回调函数
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			if(xhr.responseText=="0"){
				$("#mimafk").style.display="block";
				$("#mimafk").innerHTML = "登录成功";	
				fushuaxin();		 	   	  
		  	}else{
		  	 	$("#mimafk").style.display="block";
		  	 	$("#mimafk").innerHTML = "密码错误";
		  	}
		}
	}
	//4、发送
	xhr.send();	
}
function fushuaxin(){
	let cokzh=$("#email").value;
	let d = new Date();
	d.setDate(d.getDate()+7);
	//把多个键值对保存在cookie里
	document.cookie = "username="+cokzh+";expires="+d.toGMTString();
	
	window.opener.location.reload();
	window.close();
}