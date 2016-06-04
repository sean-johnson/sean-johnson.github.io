
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
        "description" : "I had fun creating a calculator for another Dev Academy assignment. Using the same styling as this blog-website, it was easy to set up this calculator's looks. However, the javascript and functionality left me stumped on a few occasions. I got there in the end and once I found my approach, it was easier to implement. Click to have a go."
    },

    "generator" : {
        "description" : "I did this collaboration assignment with a fellow Dev Academy student; Daniel Kermode. I contributed mostly to the CSS and HTML, Dan was the man behind the javascript. He explained to me how to extract data using APIs, get the right information—in this case it was the quote and author—and then display it within the div elements. It was awesome to learn new things. Dan was a machine. I created one of the functions that changed the coloured background when the quote-button was clicked."
    },

    "punchathon" : {
        "description" : "My interpretation of the Javascript-racer assignment. We were tasked to develop a multiplayer 'racer game' that could take button inputs and progress a player closer to the finish line. In this case the finish line was the other player's face or body. I fell down many rabbit holes making this, but It was fun to do!"
    },

    "designSite" : {
        "description" : "My first website, before I started studying with Dev Academy. This was a site to show my design portfolio. Click to view more."
    },

    "resume" : {
        "description" : "This assignment was an introduction to me and javascript and how it can manipulate the DOM and add information to the HTML elements. I followed the tutorials given and implemented my learning. This was the result. There are a few bugs, but all in all I mangaged to understand the learning outcomes."
    },

    "otherProject" : {
        "description" : "The reaction you get when you click on this."
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
		bottomDescription.innerHTML = projects.otherProject.description;
	} 

	if (x === "centerBottom") {
		bottomInfoBox.className += " show";
		bottomInfoBox.className += " center";
		bottomDescription.innerHTML = projects.resume.description;
	}

}

function clearInfo() {

	topInfoBox.className = "port-descript-box fade-in";
	bottomInfoBox.className = "port-descript-box fade-in";

}