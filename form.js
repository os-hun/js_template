
$("input[id='name']").keyup(function () {
	if($(this).val() == ""){
		$(this).css("border","1px solid red");
		$("#name").css("transition","all 0.3s ease-in-out");
	}else{
		$(this).css("border","1px solid #00d4ff");
		$("#name").css("transition","all 0.3s ease-in-out");
	}
});

$("input[id='email']").keyup(function () {
	if($(this).val() == ""){
		$(this).css("border","1px solid red");
		$("#email").css("transition","all 0.3s ease-in-out");
	}else{
		$(this).css("border","1px solid #00d4ff");
		$("#email").css("transition","all 0.3s ease-in-out");
	}
});
$("input[id='email']").keyup(function () {
	if(!$(this).val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)){
		$(this).css("border","1px solid red");
		$("#email").css("transition","all 0.3s ease-in-out");
	}else{
		$(this).css("border","1px solid #00d4ff");
		$("#email").css("transition","all 0.3s ease-in-out");
	}
});
$("textarea[id='msg']").keyup(function () {
	if($(this).val() == ""){
		$(this).css("border","1px solid red");
		$("#phone").css("transition","all 0.3s ease-in-out");
	}else{
		$(this).css("border","1px solid #00d4ff");
		$("#phone").css("transition","all 0.3s ease-in-out");
	}
});

function check_form(){
	var name = $("input[id='name']").val();
	var email = $("input[id='email']").val();
	var textarea = $("textarea[id='msg']").val();
	var error_msg = "";

	if(name == ""){
		error_msg = error_msg + "名前が未入力です。入力してください。\n";
		$("input[id='name']").css("border", "1px solid red");
	}
	if(email == ""){
		error_msg = error_msg + "メールアドレスが未入力です。入力してください。\n";
		$("input[id='email']").css("border", "1px solid red");
	}
	if(textarea == ""){
		error_msg = error_msg + "お問い合わせ内容が未入力です。入力してください。\n";
		$("textarea[id='msg']").css("border", "1px solid red");
	}
	if(error_msg == ""){
		error_msg = true;
		//ダミーiframe, google formに変移させないで自分の表示したいものを表示する。
		document.myForm.submit();
		document.getElementById('myform').style.display = 'none';
		document.getElementById('black').style.display = 'block';
		document.getElementById('thxMessage-one').style.display = 'block';
		document.getElementById('thxMessage-two').style.display = 'block';
		document.getElementById('thxMessage-box').style.transform = 'translateY(0%)';
		document.getElementById('btn-line').style.display = 'block';
		document.getElementById('close').style.display = 'block';
	}else{
		alert(error_msg)
	}
}





