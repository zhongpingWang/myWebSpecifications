var Index = {

	Settings: {
		SlideTree: [{
				name: "Introduction",
				href: "./introduction/index.html",
				node: []
			}, {
				name: "基本规则",
				href: "javascript:void(0);",
				node: [
					{
						name:"命名规则",
						href:"./baseSpecification/named.html"
					}

				]
			}, {
				name: "HTML",
				href: "javascript:void(0);",
				node: [{
					name:"书写规则",
					href:"./htmlSpecification/writed.html"

				}]
			}, {
				name: "CSS",
				href: "javascript:void(0);",
				node: [{
					name:"书写规则",
					href:"./cssSpecification/writed.html"

				}]
			}, {
				name: "Javascript",
				href: "javascript:void(0);",
				node: [{
					name:"书写规则",
					href:"./jsSpecification/writed.html"
				}]
			}, {
				name: "Jq插件",
				href: "javascript:void(0);",
				node: []
			}, {
				name: "组件使用",
				href: "javascript:void(0);",
				node: [{
						name: "input (文本框)",
						href: "./components/input/index.html"
					},{
						name: "button (按钮)",
						href: "./components/button/index.html"
					},
					{
						name: "checkbox (多选)",
						href: "./components/checkbox/index.html"
					}
					,
					{
						name: "radio (单选)",
						href: "./components/radio/index.html"
					}
					,
					{
						name: "dropDown (下拉)",
						href: "./components/dropDown/index.html"
					} 
				]
			}

		]
	},



	//事件初始化
	initEvent: function() {
		//$("#slideBar ")
	},

	buildSlideTree: function() {
		var tpl = $("#slideTreeTpl").html(),
			fTpl = _.template(tpl);
		$("#slideBar").html(fTpl(this.Settings.SlideTree));

	},

	// 入口
	init: function() {
		//生成左侧目录
		this.buildSlideTree();
		//事件初始化
		this.initEvent();

	}


}