(function(){
	"use strict";
	
	var assert=require("chai").assert;
	
	describe("Addition",function(){
		
		it("adds positive Numbers",function(){
			assert.equal(add(4,3),7);
		});
		
		it("uses IEE 754 floating point",function(){
			assert.equal(add(0.1,0.2),0.30000000000000004);
		});
	});
	
	function add(a,b){
		return a+b;
	}
	
	
}());