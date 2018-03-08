//1，about require js config//配置信息  
;require.config({
	baseUrl: "js/lib",
	paths: {
　　　"jquery": "jquery.min",
　　　"bootstrap": "bootstrap.min",
	  "echart":"echarts.common.min",
	  "myPlugs":"../plugs/myPlugs"
　　},
	shim: {
　　　　'bootstrap': {
　　　　　　deps: ['jquery']
　　　　}
　　}
});