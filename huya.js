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
<div>
    <svg width="0" height="0">
        <defs>
            <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo"></feColorMatrix>
                <feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite>
            </filter>
        </defs>
    </svg>
    <div class="aside-nav bounceInUp animated" id="aside-nav">
        <label for="" class="aside-menu" title="按住拖动">菜单</label>

        <a href="javascript:void(0)" title="返回首页" class="menu-item menu-first">首页</a>
        <a href="javascript:void(0)" title="QQ咨询" class="menu-item menu-second">QQ</a>
        <a href="javascript:void(0)" title="一键预约" class="menu-item menu-third">预约</a>
        <a href="javascript:void(0)" title="微信公众号" class="menu-item menu-line menu-fourth">关注<br>微信</a> <!-- *跳到商家微信推广* -->
    </div>
</div>  

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





