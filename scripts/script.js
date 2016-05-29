
document.addEventListener('mousemove', function(event) {

	var x = event.clientX;
	var y = event.clientY;

	var w = x / 5;
	var h = y / 2;

	var rgb = [ Math.round(w), Math.round(h), 150];

	var isOperaStyle = " background: -o-linear-gradient(to right top, rgba(82, 255, 184, 100), rgba(" + rgb[1] + ", " + rgb[0] + ", 155, .50));";
	var isFirefoxStyle = " background: -moz-linear-gradient(to right top, rgba(82, 255, 184, 100), rgba(" + rgb[1] + ", " + rgb[0] + ", 155, .50));";
	var isSafariStyle = " background: -webkit-linear-gradient(to right top, rgba(82, 255, 184, 100), rgba(" + rgb[1] + ", " + rgb[0] + ", 155, .50));";
	var isIEStyle = " background: -ms-linear-gradient(to right top, rgba(82, 255, 184, 100), rgba(" + rgb[1] + ", " + rgb[0] + ", 155, .50));";
	var isChromeStyle = " background: linear-gradient(to right top, rgba(82, 255, 184, 100), rgba(" + rgb[1] + ", " + rgb[0] + ", 155, .50));";

	var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
	var isFirefox = typeof InstallTrigger !== 'undefined';
	var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
	var isIE = /*@cc_on!@*/false || !!document.documentMode;
	var isChrome = !!window.chrome && !!window.chrome.webstore;

	var browserArr = [isOpera, isFirefox, isSafari, isIE, isChrome];
	var styleArr = [isOperaStyle, isFirefoxStyle, isSafariStyle, isIEStyle, isChromeStyle];


	for (var i = 0; i <= browserArr.length; i++) {

		if (browserArr[i] === true) {
			var counter = i;
			document.getElementById("gradient").style = "width: 100%; height: 100%; position: fixed;" + styleArr[i];
		}

	}

});