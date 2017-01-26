function json2str(json){
	var arr = [];
	for(var name in json){
		arr.push(name+'='+json[name]);
	}
	var str = arr.join('&');
	return str;
}
// url,data,cbName,success
function jsonp(json){
	var json = json || {};
	if(!json.url){
		alert('滚');
		return;
	}
	json.data = json.data || {};
	json.cbName = json.cbName || 'cb';
	//定义函数
	var fnName = 'show'+Math.random();
	fnName = fnName.replace('.','');
	window[fnName] = function(json2){
		json.success && json.success(json2);
		oH.removeChild(oS);
	}
	// 创建script
	var oS = document.createElement('script');
	json.data[json.cbName] = fnName;
	oS.src=json.url+'?'+json2str(json.data);
	var oH = document.getElementsByTagName('head')[0];
	oH.appendChild(oS);
}
