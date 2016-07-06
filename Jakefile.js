/**
 * Created by ddrdushy on 5/20/2016.
 */
/* globals desc:false, task:false, complete:false, fail:false */
(function(){
    "use strict";
    
    var semver=require("semver");
    var jshint=require("simplebuild-jshint");
    
    desc("Default Build");
    task("default",["version","lint"],function(){
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
    
    desc("Lint Javascript code");
    task("lint",function(){
    	process.stdout.write("linting Javascript:");
    	
    	jshint.checkFiles({
    		files:"Jakefile.js",
    		options:{
    			bitwise : true,
    			eqeqeq : true,
    			forin : true,
    			freeze : true,
    			futurehostile : true,
    			latedef : "nofunc",
    			noarg : true,
    			nocomma: true,
    			nonbsp: true,
    			nonew: true,
    			strict: true,
    			undef:true,
    			
    			node: true,
    			browser: true
    		},
    		globals:{
    			
    		}
    	},complete,fail);
    	//jake.exec("node node_modules/jshint/bin/jshint Jakefile.js",{interactive : true},complete);
    	
    },{async:true});

}());
