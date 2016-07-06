/**
 * Created by ddrdushy on 5/20/2016.
 */
(function(){
    "use strict";

    var EXPECTED_VERSION = "v4.4.7";
    desc("Default Build");
    task("default",["version"],function(){
        console.log("\n\nBuild OK!");
    });
    
    desc("Check node version");
    task("version",function(){
    	console.log("checking Node Version: .");
    	
    	var actualVersion=process.version;
    	
    	if(actualVersion!==EXPECTED_VERSION) {
    		fail("Node Version incorrect: expected "+EXPECTED_VERSION+" actual "+actualVersion);
    	}
    	
    });

}());
