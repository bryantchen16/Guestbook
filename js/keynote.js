$(function() { //要用jQuery的語法，要把程式包在這裡面

	//設定按下留言按鈕的事件
	$("#addNote").on("click", function(event){
		leaveNote();
	});
	
	//設定在留言方塊上按Enter建的事件
	$("#note").on("keyup", function(event){
		var enterKey = 13;
		if (event.keyCode == enterKey) {
			leaveNote();
		}
	});

	//留言
	function leaveNote() {

		var usernameElement = $("#username"); //取出HTML中ID為content的元素
		var noteElement = $("#note"); //取出HTML中ID為note的元素
		var contentElement = $("#content"); //取出HTML中ID為content的元素

		var username = usernameElement.val(); //取任何表單元素的值
		var note = noteElement.val(); //取任何表單元素的值
		var orginalContent = contentElement.html(); //取出該元素的HTML內容

		var newContent;

		if (note != "") {

			var isFirstTime = orginalContent == ""; //布林值 true / false
			var noteContent = username + " : " + note + " " + new Date();

			if (isFirstTime) { 
				newContent = noteContent;
			}
			else {
				newContent = noteContent 
					+ "<br>" 
					+ orginalContent; //將舊的訊息串上換行符號還有新訊息
			}

	        noteElement.val(""); //清除留言文字
			contentElement.html(newContent); //更新留言板
		}
	}
});