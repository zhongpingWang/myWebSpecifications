var Index = {

	templateCache: {},
	//模板加载
	templataUrl: function() { 

		if (Index.templateCache[url]) {
			return Index.templateCache[url];
		}

		var result;
		$.ajax({
			url: url,
			type: 'GET',
			async: false
		}).done(function(tpl) { 
			result = tpl; 
		});

		Index.templateCache[url] = result;

		return result;
	},

	//事件初始化
	initEvent:function(){
		//$("#slideBar ")
	},

	// 入口
	init:function(){

		//事件初始化
		this.initEvent();
	}


}