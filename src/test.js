(function(){
	"use strict";
	
	var assert=require("chai").assert;
	
	assert.equal(add(4,3),7);
	
	
	function add(a,b){
		return a+b;
	}
	
	
}());