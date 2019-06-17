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
$.getScript('https://zhoubujin.github.io/aaa/asidenav.js');

var f = function () {/*
<body> 
<div>这是一个主界面</div><br>
<button id="btn">点击这里实现弹窗</button>
<div id="choiceWindow">
	<label id="x" style="position: absolute;top:2px;left: 95%;font-size: 25px;">x</label>
	<form>
		<label>请选择开课学期：</label>&nbsp &nbsp  &nbsp 
		<select>
			<option value="2017-2018-1">2017-2018-1</option>
			<option value="2017-2018-2">2017-2018-2</option>
		</select><br><br>

	</form>
</div>
<div id="backGround"></div>
</body> 
*/};

var multiline = function (fn) {
    var str = fn.toString().split('\n');
    // console.log(str);
    return str.slice(1, str.length - 1 ).join('\n');
}

var test = multiline(f)

let div = document.createElement('div');
div.id="div1"
div.innerHTML = test
document.body.appendChild(div)





