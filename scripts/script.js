
document.addEventListener('mousemove', function(event) {

	    var x = event.clientX;
	    var y = event.clientY;

	    var w = x / 5;
	    var h = y / 2;

	   	var rgb = [ Math.round(w), Math.round(h), 150];

	    document.getElementById("gradient").style = "width: 100%; height: 100%; position: fixed; background: linear-gradient(to right top, rgba(82, 255, 184, 100), rgba(" + rgb[1] + ", " + rgb[0] + ", 155, .50));";

});
  