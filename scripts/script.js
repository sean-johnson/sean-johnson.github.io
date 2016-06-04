
document.addEventListener('mousemove', function(event) {

	var x = event.clientX;
	var y = event.clientY;

	var w = x / 5;
	var h = y / 2;

	var rgb = [ Math.round(w), Math.round(h), 150];

	var isOperaGrad = " background: -o-linear-gradient(to right top, rgba(82, 255, 184, 100), rgba(" + rgb[1] + ", " + rgb[0] + ", 155, .50));";
	var isFirefoxGrad = " background: -moz-linear-gradient(to right top, rgba(82, 255, 184, 100), rgba(" + rgb[1] + ", " + rgb[0] + ", 155, .50));";
	var isSafariGrad = " background: linear-gradient(to right top, rgba(82, 255, 184, 100), rgba(" + rgb[1] + ", " + rgb[0] + ", 155, .50));";
	var isIEGrad = " background: -ms-linear-gradient(to right top, rgba(82, 255, 184, 100), rgba(" + rgb[1] + ", " + rgb[0] + ", 155, .50));";
	var isChromeGrad = " background: linear-gradient(to right top, rgba(82, 255, 184, 100), rgba(" + rgb[1] + ", " + rgb[0] + ", 155, .50));";
	var isEdgeGrad = " background: linear-gradient(to right top, rgba(82, 255, 184, 100), rgba(" + rgb[1] + ", " + rgb[0] + ", 155, .50));";

	var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
	var isFirefox = typeof InstallTrigger !== 'undefined';
	var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
	var isIE = /*@cc_on!@*/false || !!document.documentMode;
	var isChrome = !!window.chrome && !!window.chrome.webstore;
	var isEdge = !isIE && !!window.StyleMedia;

	var browserArr = [isOpera, isFirefox, isSafari, isIE, isChrome, isEdge];
	var styleArr = [isOperaGrad, isFirefoxGrad, isSafariGrad, isIEGrad, isChromeGrad, isEdgeGrad];

	for (var i = 0; i <= browserArr.length; i++) {

		if (browserArr[i] === true) {
			var counter = i;
			document.getElementById("gradient").style = "width: 100%; height: 100%; position: fixed;" + styleArr[i];
		}

	}

});

var portfolio = {
    "projects" : [

	    {
	        "title" : "Calculator",
	        "position" : "top-left",
	        "description" : "I resonated with the 'consumer' or 'creative' student analogy. I appreciated the attention to detail discussed by Shereef on how the subtleties of an student's midset can affect learning outcomes so drastically. Attitudes and outlooks can also have a huge effect on how the student interacts.",
            "url" : "http://sean-johnson.github.io"
	    },	    

	    {
	        "title" : "Punchathon",
	        "position" : "top-right",
	        "description" : "The second important benefit is the more you talk to people about your ideal future, the more likely you can find people to help you. This is especially true if your aspiration for the future is altruistic in nature because people will rush to help you.",
            "url" : "http://sean-johnson.github.io"
	    },

	    {
	        "title" : "Quote Generator",
	        "position" : "top-center",
	        "description" : "I resonated with the 'consumer' or 'creative' student analogy. I appreciated the attention to detail discussed by Shereef on how the subtleties of an student's midset can affect learning outcomes so drastically. Attitudes and outlooks can also have a huge effect on how the student interacts.",
            "url" : "http://sean-johnson.github.io"
	    },	    

	    {
	        "title" : "Design Site",
	        "position" : "bottom-Left",
	        "description" : "The second important benefit is the more you talk to people about your ideal future, the more likely you can find people to help you. This is especially true if your aspiration for the future is altruistic in nature because people will rush to help you.",
            "url" : "http://sean-johnson.github.io"
	    },	

	    {
	        "title" : "Another Project",
	        "position" : "bottom-right",
	        "description" : "I resonated with the 'consumer' or 'creative' student analogy. I appreciated the attention to detail discussed by Shereef on how the subtleties of an student's midset can affect learning outcomes so drastically. Attitudes and outlooks can also have a huge effect on how the student interacts.",
            "url" : "http://sean-johnson.github.io"
	    },

	    {
	        "title" : "Another Site",
	        "position" : "bottom-center",
	        "description" : "I resonated with the 'consumer' or 'creative' student analogy. I appreciated the attention to detail discussed by Shereef on how the subtleties of an student's midset can affect learning outcomes so drastically. Attitudes and outlooks can also have a huge effect on how the student interacts.",
            "url" : "http://sean-johnson.github.io"
	    },

    ]
};

var topInfoBox = document.getElementById("infoBoxTop");
var bottomInfoBox = document.getElementById("infoBoxBottom");

function showInfo(obj) {
    
    var x = obj.id;

	topInfoBox.className = "port-descript-box";
	bottomInfoBox.className = "port-descript-box";

	if (x === "rightTop") {
		topInfoBox.className += " show";
		topInfoBox.className += " right";
		topInfoBox.className += " text-right";
	} 

	if (x === "leftTop") {
		topInfoBox.className += " show";
		topInfoBox.className += " left";
	}

	if (x === "centerTop") {
		topInfoBox.className += " show";
		topInfoBox.className += " center";
	}

	if (x === "rightBottom") {
		bottomInfoBox.className += " show";
		bottomInfoBox.className += " right";
		bottomInfoBox.className += " text-right";
	} 

	if (x === "leftBottom") {
		bottomInfoBox.className += " show";
		bottomInfoBox.className += " left";
	}

	if (x === "centerBottom") {
		bottomInfoBox.className += " show";
		bottomInfoBox.className += " center";
	}


}

function clearInfo() {

	topInfoBox.className = "port-descript-box";
	bottomInfoBox.className = "port-descript-box";

}