
function inputBtn(x) {
	document.getElementById("result-id").value += x ;
};

function equalsResult() {
    var val = document.getElementById("result-id").value;
    var result = eval(val);
    document.getElementById("result-id").value = result;
}

function reset() {
    document.getElementById("result-id").value = "";
}