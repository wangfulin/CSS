function Slider(items,currPos,width,height,speed){
	this.items=items;
	this.currPos=currPos;
	this.width=width;
	this.height=height;
}
Slider.prototype.slidePrev=function(){
	var len=this.items.length;
	var currItem=this.items[currPos];
	var prevItem=this.items[(currPos+len-1)%len];
	setInterval(function(){
		prevItem.style.right+=this.width/10;
	},100);
}
Slider.prototype.slideNext=function(){
	
}
Slider.prototype.slideTo=function(pos){
	
}
Slider.prototype.slideFunc=function(funcName){
	
}
Slider.prototype.slideUp=function(){
	
}
Slider.prototype.slideDown=function(){
	
}
function getStyle(ele,name){
	if(ele.currentStyle){
		return ele.currentStyle[name];
	}else{
		return ele.style[name]||ele.getAttribute(name)||window.getComputedStyle(ele,false)[name];
	}
}
/* function $(){
	return document.getElementById(ele);
} */
window.onload=function(){
	var test=document.getElementById("test");
	console.log(test);
	console.log(getStyle(test,"width"));
}