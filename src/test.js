(function(){
	"use strict";
	
	assertEquals(8,add(4,3));
	
	function add(a,b){
		return a+b;
	}
	
	function assertEquals(actual,expected)
	{
		if(actual!==expected) throw new Error("Expected "+expected+" but got "+actual);
	}
	
}());