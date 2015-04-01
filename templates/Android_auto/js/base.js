//播放页切换按钮
function nTabs(thisObj,Num) {
	if (thisObj.parentNode.className == "c") return;
	var tabList = thisObj.parentNode.getElementsByTagName("b");
	for (var i = 0; i < tabList.length; i++) {
		tabList[i].className = '';
		if(i == Num){
			document.getElementById("from_content" + i).style.display = "block";	
		}else{
			document.getElementById("from_content" + i).style.display = "none";	
		}
	}
	thisObj.className = 'c';
}