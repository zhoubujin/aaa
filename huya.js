function random(min,max) {
    return parseInt(Math.random() * (max - min + 1) + min);
}

$("#pub_msg_input").val("aaa")
$("#msg_send_bt").attr("class","btn-sendMsg enable")
$("#msg_send_bt").click()
