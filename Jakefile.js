/**
 * Created by ddrdushy on 5/20/2016.
 */
/* globals jake:false, desc:false, task:false, complete:false, fail:false */


(function(){
    "use strict";
    
    var semver=require("semver");
    var jshint=require("simplebuild-jshint");
    
    //***General Tasks
    
    desc("Star the karma server (run this first)");
    task("karma",function(){
    	console.log("Starting karma server");
    });
    
    desc("Default Build");
    task("default",["version","lint"],function(){
        console.log("\n\nBuild OK!");
    });
    
    
    desc("run a localhost server");
    task("run",function(){
    	jake.exec("node node_modules/http-server/bin/http-server src",{interactive:true},complete);
    },{async:true});
    
    
    //*** Supporting Tasks
    
    
    desc("Check node version");
    task("version",function(){
    	console.log("checking Node Version: .");
    	
    	var jsonPackage=require("./package.json");
    	var expectedVersion = 0.8.24;//jsonPackage.engines.node;
    	
    	var actualVersion=process.version;
    	
    	if(semver.neq(actualVersion,expectedVersion)) {
    		fail("Node Version incorrect: expected "+expectedVersion+" actual "+actualVersion);
    	}
    	
    });
    
    desc("Lint Javascript code");
    task("lint",function(){
    	process.stdout.write("linting Javascript:");
    	
    	jshint.checkFiles({
    		files:["Jakefile.js","src/**/*.js"],
    		options: lintOptions(),
    		globals: lintGlobals()
    	},complete,fail);
    	//jake.exec("node node_modules/jshint/bin/jshint Jakefile.js",{interactive : true},complete);
    	
    },{async:true});
    
    function lintOptions(){
    	return {
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
    	};
    }
    
    
    function lintGlobals(){
    	return {
			//Mocha
			describe:false,
			it:false,
			before:false,
			after:false,
			beforeEach:false,
			afterEach:false
		};
    }

}());
