function btgb1(){
	let yspd=$("#btgbl11").style.display;
	if(yspd==""||yspd=="none"){
		$("#btgbl1").style.backgroundColor="#000";
		$("#btgbl1").style.color="#fff";
		$("#btgbl11").style.display="block";
	}else{
		$("#btgbl1").style.backgroundColor="#dedede";
		$("#btgbl1").style.color="#000";
		$("#btgbl11").style.display="none";
	}
}