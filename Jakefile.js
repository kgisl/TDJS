/**
 * Created by ddrdushy on 5/20/2016.
 */
(function(){
    "use strict";
    
    var semver=require("semver");
    
    desc("Default Build");
    task("default",["version"],function(){
        console.log("\n\nBuild OK!");
    });
    
    desc("Check node version");
    task("version",function(){
    	console.log("checking Node Version: .");
    	
    	var jsonPackage=require("./package.json");
    	var expectedVersion = jsonPackage.engines.node;
    	
    	var actualVersion=process.version;
    	
    	if(semver.neq(actualVersion,expectedVersion)) {
    		fail("Node Version incorrect: expected "+expectedVersion+" actual "+actualVersion);
    	}
    	
    });

}());
