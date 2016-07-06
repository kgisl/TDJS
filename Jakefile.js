/**
 * Created by ddrdushy on 5/20/2016.
 */
(function(){
    "use strict";

    desc("Default Build");
    task("default",["version"],function(){
        console.log("\n\nBuild OK!");
    });
    
    desc("Check node version");
    task("version",function(){
    	console.log("checking Node Version: .");
    	
    	var jsonPackage=require("./package.json");
    	var expectedVersion = "v"+jsonPackage.engines.node;
    	
    	var actualVersion=process.version;
    	
    	if(actualVersion!==expectedVersion) {
    		fail("Node Version incorrect: expected "+expectedVersion+" actual "+actualVersion);
    	}
    	
    });

}());
