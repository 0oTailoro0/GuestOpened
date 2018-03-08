define(["jquery"],function($){
	$.fn.myPlugin = function () {
        //插件代码
        alert(this.innerWidth());
    };
    
    return myPlugin = {
    	pagesize : 5,
    	fnalert:function(){
    		alert('sdafasd22222222');
    	},
    	fnalert2:function(){
    		alert('222');
    	}
    }
});