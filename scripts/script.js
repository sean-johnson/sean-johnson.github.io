
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