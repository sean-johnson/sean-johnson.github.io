
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

var projects = {

    "calculator" : {
        "description" : "A paired project."
    },

    "generator" : {
        "description" : "A collaboration project."
    },

    "punchathon" : {
        "description" : "My interpretation of the Javascript-racer. It was fun."
    },

    "designSite" : {
        "description" : "My first website, before I started studying with Dev Academy. This was a site to show my design portfolio. Click to view more."
    },

    "otherProjectOne" : {
        "description" : "Project One up and running."
    },

    "otherProjectTwo" : {
        "description" : "Let's if project two works."
    }
};

var topInfoBox = document.getElementById("infoBoxTop");
var bottomInfoBox = document.getElementById("infoBoxBottom");

var topDescription = document.getElementById("descriptionTop");
var bottomDescription = document.getElementById("descriptionBottom");

function showInfo(obj) {
    
    var x = obj.id;

	topInfoBox.className = "port-descript-box fade-in";
	bottomInfoBox.className = "port-descript-box fade-in";


	if (x === "leftTop") {
		topInfoBox.className += " show";
		topInfoBox.className += " left";
		topDescription.innerHTML = projects.calculator.description;
	}

	if (x === "rightTop") {
		topInfoBox.className += " show";
		topInfoBox.className += " right";
		topInfoBox.className += " text-right";
		topDescription.innerHTML = projects.punchathon.description;
	} 

	if (x === "centerTop") {
		topInfoBox.className += " show";
		topInfoBox.className += " center";
		topDescription.innerHTML = projects.generator.description;
	}

	if (x === "leftBottom") {
		bottomInfoBox.className += " show";
		bottomInfoBox.className += " left";
		bottomDescription.innerHTML = projects.designSite.description;
	}

	if (x === "rightBottom") {
		bottomInfoBox.className += " show";
		bottomInfoBox.className += " right";
		bottomInfoBox.className += " text-right";
		bottomDescription.innerHTML = projects.otherProjectOne.description;
	} 

	if (x === "centerBottom") {
		bottomInfoBox.className += " show";
		bottomInfoBox.className += " center";
		bottomDescription.innerHTML = projects.otherProjectTwo.description;
	}

}

function clearInfo() {

	topInfoBox.className = "port-descript-box fade-in";
	bottomInfoBox.className = "port-descript-box fade-in";

}