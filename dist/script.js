setInterval(function () {
  var today = new Date();
  var clk = $("#clock");
  var hora =
    pad(today.getHours(),2) + ":" + pad(today.getMinutes(), 2) + ":" + pad(today.getSeconds(),2);
  clk.text(hora);
  $("#stat").toggleClass("led-off");
}, 500);

function pra8(n){
  if (n > 0) return Math.ceil(n / 8.0) * 8;
  else if (n < 0) return Math.floor(n / 8.0) * 8;
  else return 8;
}

var rds = "CODEPEN FM - YOUR KNOWLEDGE BASE FOR DEVELOPMENT IMPROVEMENT";
var idx_ini = 0;
var idx_end =  rds.length;

setInterval(function () {
  var display = rds.substring(idx_ini, idx_ini+7 );
  if ((idx_ini + 7) >= rds.length){
    idx_ini = 0;  
  }
  idx_ini++;
  
  $("#rds").text(display);  
}, 500);

function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}