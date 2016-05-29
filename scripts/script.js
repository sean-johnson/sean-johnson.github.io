/*
var $win = $(window),
    w = 0, h = 0,
    rgb = [],
    getWidth = function() {
        w = $win.width();
        h = $win.height();
    };

$win.resize(getWidth).mousemove(function(e) {
    
    rgb = [
        Math.round(e.pageX/w * 255),
        Math.round(e.pageY/h * 255),
        150
    ];
    
    $(document.body).css('background','rgb('+rgb.join(',')+')');
    
}).resize();

*/

document.addEventListener('mousemove', function(event) {

	    var x = event.clientX;
	    var y = event.clientY;

	    var w = x / 5;
	    var h = y / 2;

	   	var rgb = [ Math.round(w), Math.round(h), 150];

	    document.getElementById("gradient").style = "width: 100%; height: 100%; position: fixed; background: linear-gradient(to right top, rgba(82, 255, 184, 100), rgba(" + rgb[1] + ", " + rgb[0] + ", 155, .50));";

});
  