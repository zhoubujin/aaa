/*
delay = random(10,20)
count = 0
var res = confirm("请选择");
if(res == true){
  window.setInterval(refreshCount, 1000);
}

function random(min,max) {
 return parseInt(Math.random() * (max - min + 1) + min);
}
 

 function refreshCount() {
  count++
  console.log(count +" " +delay)
  if(delay == count){
   count =0
   delay = random(10,20)
   console.log("重置"+count +" " +delay)
   $("#pub_msg_input").val("aaa")
   $("#msg_send_bt").attr("class","btn-sendMsg enable")
   $("#msg_send_bt").click()
  }
 }
*/

$("head").append("<link>");
	var css = $("head").children(":last");
	css.attr({
	rel:	"stylesheet",
	type:	"text/css",
	href:	"https://zhoubujin.github.io/aaa/asidenav.css"
});

$("body").append('<div id="choiceWindow"><label id="x" style="position: absolute;top:2px;left: 95%;font-size: 25px;">x</label><form><label>请选择开课学期：</label><select><option value="2017-2018-1">2017-2018-1</option><option value="2017-2018-2">2017-2018-2</option></select><br><br></form></div>')
 
$.getScript('https://zhoubujin.github.io/aaa/asidenav.js');



