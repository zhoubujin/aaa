delay = random(10,20)
count = 0
function random(min,max) {
 return parseInt(Math.random() * (max - min + 1) + min);
}
 
 window.setInterval(refreshCount, 1000);
 function refreshCount() {
  count++
  alert(count +" " +delay)
  if(delay == count){
   count =0
   delay = random(10,20)
   alert("重置"+count +" " +delay)
   $("#pub_msg_input").val("aaa")
   $("#msg_send_bt").attr("class","btn-sendMsg enable")
   $("#msg_send_bt").click()
  }
 }
