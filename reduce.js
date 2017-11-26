var fn = (itemData)=>{
	return new Promise((resolve,reject)=>{
		setTimeout(function() {
			itemData = `${itemData}00000000000`;
			resolve(itemData)
		}, 1000);
	})
};
var fn1 = (itemData)=>{
	return new Promise((resolve,reject)=>{
		setTimeout(function() {
			console.log(itemData)
			resolve(itemData)
		}, 1000);
	})
};
var  arr = [fn,fn1];
arr.reduce((content,fn)=>{
	return content.then((content = '')=>{
		return fn(content)
	})
},Promise.resolve());


