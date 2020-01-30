function opr(valu) {
	document.getElementById('result').value+=valu
}
function eql() {
	let x = document.getElementById("result").value
	let y = eval(x)
	document.getElementById("result").value = y
}
function clr() {
	document.getElementById("result").value=""
}
function alr() {
	var exp = document.getElementById('result').value;	
	document.getElementById('result').value = exp.substring( 0, exp.length-1)
}
