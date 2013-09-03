//	HYPE.documents["inicio"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "inicio.hyperesources";
	var documentName = "inicio";
	var documentLoaderFilename = "inicio_hype_generated_script.js";
	var mainContainerID = "inicio_hype_container";

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
	if(typeof HYPE_158 == "undefined") {
		if(typeof window.HYPE_158_DocumentsToLoad == "undefined") {
			window.HYPE_158_DocumentsToLoad = new Array();
			window.HYPE_158_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=158';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_158_DocumentsToLoad.push(HYPE_DocumentLoader);
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
	
	var hypeDoc = new HYPE_158();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",N:"i",f:"d",aT:"i",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",bG:"f",aW:"f",S:"i",aI:"i",bH:"d",l:"d",aX:"i",T:"i",m:"c",bI:"f",aJ:"i",n:"c",aK:"i",bJ:"f",aZ:"i",X:"i",A:"c",bK:"f",Y:"bM",B:"c",aL:"i",C:"c",bL:"f",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};
	
	var resources = {"3":{n:"rodaje%40Pola%2820130504113927%29.png",p:1},"4":{n:"medallas%40Pola%2820130504113828%29.png",p:1},"0":{n:"fondo01.jpg",p:1},"5":{n:"los3_1%40Pola%2820130504173458%29.png",p:1},"1":{n:"arya_circle.png",p:1},"6":{n:"ella_01%40Pola%2820130504113431%29.png",p:1},"2":{n:"clongitos_circle.png",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",v:{"10":{b:513,z:"8",aD:[],c:224,bC:0,d:45,aE:[],aS:8,e:"1.000000",bD:"none",aT:8,aU:8,aV:8,j:"absolute",aW:"0.000000",k:"div",X:0,aZ:0,Y:"normal",Z:"break-word",r:"inline",bL:"0.000000",t:38,E:0,aA:[],G:"#424242",aP:"pointer",w:"<span style=\"font-family: 'Yanone Kaffeesatz', sans-serif;\">Otras creaciones</span>",bA:"#000000",x:"visible",a:678,y:"preserve",bB:0},"21":{aV:8,w:"<span style=\"font-family: 'Yanone Kaffeesatz', sans-serif;\">camisetas.com</span>",aD:[{timelineIdentifier:"23",type:3}],x:"visible",a:41,Z:"break-word",b:459,j:"absolute",r:"inline",z:"10",aS:8,k:"div",aT:8,y:"preserve",t:96,e:"1.000000",aU:8,G:"#D2FF7E",bD:"none"},"47":{o:"content-box",Q:11,h:"5",x:"visible",R:"#212121",q:"100% 100%",b:16,S:7,r:"inline",z:"17",T:7,j:"absolute",d:327,c:270,a:-292,aY:"0",k:"div",f:"-5deg"},"48":{o:"content-box",Q:11,h:"6",x:"visible",R:"#212121",q:"100% 100%",b:11,S:7,r:"inline",z:"18",T:7,j:"absolute",d:327,c:270,a:-330,aY:"0",k:"div",f:"2deg"},"27":{o:"content-box",h:"1",aD:[],x:"visible",a:-250,q:"100% 100%",b:0,j:"absolute",r:"inline",c:250,z:"13",k:"div",d:250,aA:[{goToURL:"arya.html",type:5,openInNewWindow:false}],aP:"pointer"},"49":{aU:8,bB:0,c:131,G:"#EBEBEB",aV:8,r:"inline",d:23,bC:0,s:"Verdana,Tahoma,Geneva,Sans-Serif",t:18,Z:"break-word",aP:"pointer",w:"<span style=\"font-family: 'Yanone Kaffeesatz', sans-serif;\">Saltar animaci\u00f3n</span>",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",aA:[{type:9,timelineIdentifier:"kTimelineDefaultIdentifier",goToTime:15}],z:"19",aS:8,aT:8,a:16,bA:"#000000",b:565},"13":{o:"content-box",h:"0",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:960,z:"3",k:"div",d:600},"7":{b:416,z:"5",aC:[],c:256,bC:0,aD:[{timelineIdentifier:"17",type:3}],d:45,aS:8,aE:[],e:"1.000000",bD:"none",aT:8,aU:8,aV:8,j:"absolute",bG:"0.000000",aW:"0.000000",k:"div",bJ:"0.000000",X:0,aZ:0,Y:"normal",Z:"break-word",r:"inline",bL:"0.000000",t:38,E:0,aA:[{type:5,goToURL:"clonguitos.html",openInNewWindow:false}],G:"#EBEBEB",aP:"pointer",w:"<span style=\"font-family: 'Yanone Kaffeesatz', sans-serif;\">Camisetas clonguitos</span>",bA:"#000000",x:"visible",a:678,y:"preserve",bB:0},"45":{o:"content-box",Q:11,h:"3",x:"visible",R:"#212121",q:"100% 100%",b:16,S:7,r:"inline",z:"15",T:7,j:"absolute",d:327,c:270,a:-286,aY:"0",k:"div",f:"0deg"},"8":{aU:8,G:"#EBEBEB",c:224,aE:[],aV:8,r:"inline",d:45,e:"1.000000",aW:"0.000000",bL:"0.000000",X:0,Y:"normal",t:38,bD:"none",Z:"break-word",aP:"pointer",w:"<span style=\"font-family: 'Yanone Kaffeesatz', sans-serif;\">Camiseta Arya</span>",j:"absolute",x:"visible",aA:[{goToURL:"arya.html",type:5,openInNewWindow:false}],k:"div",bG:"0.000000",y:"preserve",z:"6",aS:8,E:0,aT:8,a:678,aD:[{timelineIdentifier:"18",type:3}],b:463},"20":{aV:8,w:"<span style=\"font-family: 'Yanone Kaffeesatz', sans-serif;\">megustanlas</span>",aD:[{timelineIdentifier:"22",type:3}],x:"visible",a:41,Z:"break-word",b:368,j:"absolute",r:"inline",z:"9",aS:8,k:"div",aT:8,y:"preserve",t:96,e:"1.000000",aU:8,G:"#D2FF7E",bD:"none"},"46":{o:"content-box",Q:11,h:"4",x:"visible",R:"#212121",q:"100% 100%",b:16,S:7,r:"inline",z:"16",T:7,j:"absolute",d:327,c:270,a:-294,aY:"0",k:"div",f:"3deg"},"25":{o:"content-box",h:"2",x:"visible",a:-250,q:"100% 100%",b:0,j:"absolute",r:"inline",c:250,z:"12",k:"div",d:250,aA:[{goToURL:"clonguitos.html",type:5,openInNewWindow:false}],aP:"pointer"}},n:"Untitled Scene",T:{"35_pressed":{d:0,i:"35_pressed",n:"35_pressed",a:[],f:30},"50":{d:1,i:"50",n:"salta_animacion",a:[{f:"4",t:0,d:1,i:"G",e:"#FCD67E",r:1,s:"#D6D6D6",o:"49"},{f:"4",t:1,p:2,d:0,i:"Actions",s:[{type:9,timelineIdentifier:"50",goToTime:0.033333335071802139}],o:"50"}],f:30},"22":{d:2,i:"22",n:"gustan",a:[{f:"4",t:0,d:0.15,i:"e",e:"0.250000",r:1,s:"1.000000",o:"20"},{f:"4",t:0.15,d:1.15,i:"e",e:"1.000000",s:"0.250000",o:"20"},{f:"4",t:2,p:2,d:0,i:"Actions",s:[{timelineIdentifier:"22",type:7}],o:"22"}],f:30},"17":{d:1,i:"17",n:"clonguito",a:[{f:"4",t:0,d:0.15,i:"bG",e:"0.000000",r:1,s:"0.000000",o:"7"},{f:"4",t:0,d:0.15,i:"e",e:"0.300000",r:1,s:"1.000000",o:"7"},{f:"4",t:0.15,d:0.15,i:"e",e:"1.000000",s:"0.300000",o:"7"},{f:"4",t:1,p:2,d:0,i:"Actions",s:[{timelineIdentifier:"17",type:7}],o:"17"}],f:30},kTimelineDefaultIdentifier:{d:15,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"5",t:0,d:3,i:"a",e:355,s:-250,o:"27"},{f:"4",t:0,p:2,d:15,i:"Actions",e:[{timelineIdentifier:"kTimelineDefaultIdentifier",type:7}],s:[{type:3,timelineIdentifier:"50"}],o:"kTimelineDefaultIdentifier"},{f:"4",t:0,d:13,i:"b",e:20,s:16,o:"47"},{f:"5",t:0,d:3,i:"a",e:355,s:-250,o:"25"},{f:"4",t:3,d:1,i:"a",e:355,s:355,o:"27"},{f:"4",t:3,d:1,i:"a",e:355.39800000000002,s:355,o:"25"},{f:"4",t:4,d:3,i:"a",e:691,s:355,o:"27"},{f:"4",t:4,d:3,i:"a",e:19,s:355.39800000000002,o:"25"},{f:"2",t:7,d:2,i:"a",e:345,s:-286,o:"45"},{f:"4",t:9,d:2,i:"a",e:357,s:-294,o:"46"},{f:"4",t:11,d:2,i:"a",e:343,s:-292,o:"47"},{f:"4",t:12.24,d:2.06,i:"a",e:359,s:-330,o:"48"},{f:"4",t:15,p:2,d:0,i:"Actions",s:[{timelineIdentifier:"kTimelineDefaultIdentifier",type:7}],o:"kTimelineDefaultIdentifier"}],f:30},"23":{d:1.15,i:"23",n:"camisetascom",a:[{f:"4",t:0,d:0.15,i:"e",e:"0.250000",r:1,s:"1.000000",o:"21"},{f:"4",t:0.15,d:1,i:"e",e:"1.000000",s:"0.250000",o:"21"},{f:"4",t:1.15,p:2,d:0,i:"Actions",s:[{timelineIdentifier:"23",type:7}],o:"23"}],f:30},"18":{d:1,i:"18",n:"arya",a:[{f:"4",t:0,d:0.15,i:"e",e:"0.203972",r:1,s:"1.000000",o:"8"},{f:"4",t:0.15,d:0.15,i:"e",e:"1.000000",s:"0.203972",o:"8"},{f:"4",t:1,p:2,d:0,i:"Actions",s:[{timelineIdentifier:"18",type:7}],o:"18"}],f:30}},o:"1"}];
	
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
	hypeDoc.setShowLoadingPage(true);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setGraphicsAcceleration(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;
	document.getElementById(mainContainerID).setAttribute("HYPE_documentName", documentName);

	hypeDoc.documentLoad(this.body);
}());

