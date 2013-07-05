$(function() {

	//留言
	function leaveNote() {
		var note = $("#note"); //取出HTML中ID為note的元素
		var message = note.val(); //取任何表單元素的值
		var content = $("#content"); //取出HTML中ID為content的元素
		var orginalContent = content.html(); //取出該元素的HTML內容
		var newContent;

		if (message != "") {
			//代表第一次
			if (orginalContent == "") {
				newContent = message + " " + new Date();
			}
			else {
				newContent = orginalContent 
					+ "<br>" + message + " " + new Date(); //將舊的訊息串上換行符號還有新訊息
			}

	        note.val(""); //清除留言文字
			content.html(newContent); //更新留言板
		}
	}

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
});