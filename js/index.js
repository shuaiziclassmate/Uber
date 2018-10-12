	function $(str){
		if(str.charAt(0)=="#"){
			return document.getElementById(str.substring(1));
		}else if(str.charAt(0)=="."){
			return document.getElementsByClassName(str.substring(1));
		}else{
			return document.getElementsByTagName(str);
		}
	}
//=============================================================================
	//1、哪些类，轮播图
function Slider(boxDom,width,height,imgs,timeSpace){
	//属性	
	this.boxDom = boxDom;//轮播图的容器
	this.width = width;
	this.height = height;
	this.imgs = imgs;//图片数组
	this.timeSpace = timeSpace;
	this.myTimer = null;
	this.ord = 1;//当前图片的序号
	
	//方法：
	this.createUI = function(){
		//1、动态创建图片
		this.imgDom = document.createElement("img");
		this.imgDom.src=this.imgs[this.ord-1];
		this.imgDom.style.width= this.width+"%";
		this.imgDom.style.height= this.height+"px";
		this.boxDom.appendChild(this.imgDom);
		//2、动态创建豆豆
		//1)、豆豆的容器
		this.btnsBoxDom = document.createElement("ul"); 
		this.btnsBoxDom.style.cssText = "list-style: none;position:absolute;right: 10px;bottom: 20px;";
		this.boxDom.appendChild(this.btnsBoxDom);
		//2)、若干豆豆
		for(let i=0;i<this.imgs.length;i++){
			let liDom =  document.createElement("li");
			liDom.style.cssText="float:left;width:10px;height: 10px;margin-right: 10px;background-color: #fff;border-radius: 50%;";
			this.btnsBoxDom.appendChild(liDom);			
		}
		this.btnsBoxDom.children[0].style.backgroundColor="#6fb1fb";
		
		//3、动态创建箭头
		//1)、左箭头
		this.leftArrowDom = document.createElement("span");
		this.leftArrowDom.style.cssText="display: block;position: absolute;width: 70px;height: 70px;background-image: url(img/ad_ctr.png);left:0px;background-position:0px 0px";
		this.leftArrowDom.style.top = (this.height-70)/2 +"px";
		this.boxDom.appendChild(this.leftArrowDom);
		//2)、右箭头
		this.rightArrowDom = document.createElement("span");
		this.rightArrowDom.style.cssText="display: block;position: absolute;top:115px;width: 70px;height: 70px;background-image: url(img/ad_ctr.png);right:0px;background-position: 0px -70px;";
		this.rightArrowDom.style.top = (this.height-70)/2 +"px";
		this.boxDom.appendChild(this.rightArrowDom);
	}
	
	this.createEvent = function(){
		let obj = this;
		//1、鼠标放上去停止
		this.boxDom.onmouseover = function(){
			obj.stopChange();
		};
		
		//2、鼠标离开继续
		this.boxDom.onmouseout = function(){
			obj.changeImg();
		}
		
		//3、点击豆豆
		let lis = this.btnsBoxDom.children;
		for(let i=0;i<lis.length;i++){
			lis[i].onclick = function(){
				obj.goImg(i+1);
			};
		}	
		//4、点击左箭头		
		this.leftArrowDom.onclick = function(){
			obj.ord--;
			if(obj.ord<1){
				obj.ord=5;
			}
			obj.goImg(obj.ord);
		}
		
		//5、点击右箭头		
		this.rightArrowDom.onclick = ()=>{
			this.ord++;
			if(this.ord>5){
				this.ord=1;
			}
			this.goImg(this.ord);
		}		
	}	
	
	//改变图片
	this.changeImg=function(){		
		this.myTimer = setInterval(()=>{
			//1、改变数据
			this.ord++;
			//2、处理边界
			if(this.ord>this.imgs.length){
				this.ord=1;
			}
			
			//3、外观呈现
			let lis = this.btnsBoxDom.children;
			//1)、把所有的豆豆变成原始颜色（粉的）
			for(let i=0;i<lis.length;i++){
				lis[i].style.backgroundColor="#fff";
			}
			//2)、把当前的豆豆变成高亮（红色）
			lis[this.ord-1].style.backgroundColor="#6fb1fb";
			//3)、改变图片路径
			this.imgDom.src=this.imgs[this.ord-1];
		},this.timeSpace);		
	}
	//跳转到指定的图片上。
	this.goImg=function(transOrd){
		//1、改变数据
		this.ord=transOrd;
		//2、处理边界
		if(this.ord>this.imgs.length){
			this.ord=1;
		}
		
		//3、外观呈现
		let lis = this.btnsBoxDom.children;
		//1)、把所有的豆豆变成原始颜色（粉的）
		for(let i=0;i<lis.length;i++){
			lis[i].style.backgroundColor="#fff";
		}
		//2)、把当前的豆豆变成高亮（红色）
		lis[this.ord-1].style.backgroundColor="#6fb1fb";
		//3)、改变图片路径
		this.imgDom.src= this.imgs[this.ord-1];
	}
	
	this.stopChange=function(){
		window.clearInterval(this.myTimer);
	}
}

window.onload = function(){
	let s1 = new Slider($("#lbt"),100,349,["img/lbtua.jpg","img/lbtub.jpg"],2000);
	s1.createUI();
	s1.createEvent();
	s1.changeImg();

	zidong();
	
}
