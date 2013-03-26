//	HYPE.documents["Untitled"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "Untitled.resources";
	var documentName = "Untitled";
	var documentLoaderFilename = "untitled_hype_generated_script.js";
	var mainContainerID = "untitled_hype_container";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_150 == "undefined") {
		if(typeof window.HYPE_150_DocumentsToLoad == "undefined") {
			window.HYPE_150_DocumentsToLoad = new Array();
			window.HYPE_150_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=150';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_150_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// handle attempting to load multiple times
	if(HYPE.documents[documentName] != null) {
		var index = 1;
		var originalDocumentName = documentName;
		do {
			documentName = "" + originalDocumentName + "-" + (index++);
		} while(HYPE.documents[documentName] != null);
		
		var allDivs = document.getElementsByTagName("div");
		var foundEligibleContainer = false;
		for(var i = 0; i < allDivs.length; i++) {
			if(allDivs[i].id == mainContainerID && allDivs[i].getAttribute("HYPE_documentName") == null) {
				var index = 1;
				var originalMainContainerID = mainContainerID;
				do {
					mainContainerID = "" + originalMainContainerID + "-" + (index++);
				} while(document.getElementById(mainContainerID) != null);
				
				allDivs[i].id = mainContainerID;
				foundEligibleContainer = true;
				break;
			}
		}
		
		if(foundEligibleContainer == false) {
			return;
		}
	}
	
	var hypeDoc = new HYPE_150();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",N:"i",f:"d",aT:"i",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",bG:"f",aW:"f",S:"i",aI:"i",bH:"d",l:"d",aX:"i",T:"i",m:"c",bI:"f",aJ:"i",n:"c",aK:"i",bJ:"f",aZ:"i",X:"i",A:"c",bK:"f",Y:"bM",B:"c",aL:"i",C:"c",bL:"f",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};
	
	var resources = {"0":{n:"pattern.png",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#2A2A2A",onSceneTimelineCompleteActions:[{type:0}],v:{"3":{b:16,z:"2",bC:3,aS:8,e:"0.000000",bD:"none",aT:8,f:"-50deg",aU:8,Q:0,aV:8,R:"#000000",j:"absolute",bG:"0.000000",aW:"0.000000",k:"div",S:0,T:0,aX:9.5049504950495045,aY:"1",aZ:0,Z:"break-word",r:"inline",bL:"0.000000",s:"Georgia,Times,'Times New Roman',Serif",t:48,F:"center",aA:[{type:3,timelineIdentifier:"kTimelineDefaultIdentifier"}],G:"#FFFFFF",aP:"pointer",w:"Repetier Firmware",bA:"#000000",x:"hidden",a:129,y:"preserve",bB:2},"5":{aU:8,bB:2,G:"#FFFFFF",aV:8,r:"inline",bC:2,e:"0.000000",s:"Georgia,Times,'Times New Roman',Serif",t:24,Z:"break-word",w:"for rostock max",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:"3",aS:8,aT:8,a:246,F:"center",bA:"#000000",b:68}},n:"Untitled Scene",T:{kTimelineDefaultIdentifier:{d:1.17,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:0.28,i:"e",e:"1.000000",s:"0.000000",o:"3"},{f:"4",t:0,d:0.28,i:"f",e:"0deg",s:"-50deg",o:"3"},{f:"4",t:1.04,d:0.13,i:"e",e:"1.000000",s:"0.000000",o:"5"}],f:30}},o:"1"},{x:1,p:"600px",c:"#FFFFFF",v:{},n:"Untitled Scene 2",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"4"}];
	
	var javascripts = [];
	
	var functions = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("functions." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			functions[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setResources(resources);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.functions = functions;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID(mainContainerID);
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(false);
	hypeDoc.setGraphicsAcceleration(false);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;
	document.getElementById(mainContainerID).setAttribute("HYPE_documentName", documentName);

	hypeDoc.documentLoad(this.body);
}());

