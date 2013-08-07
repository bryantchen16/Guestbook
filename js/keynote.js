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

		if (note != "") {

			var isFirstTime = orginalContent == ""; //布林值 true / false
			var dateTime = new Date;
			var day = dateTime.getFullYear()+'/'+dateTime.getMonth()+'/'+dateTime.getDate()+'   '+dateTime.getHours()+':'+dateTime.getMinutes()+':'+dateTime.getSeconds();;
			// var noteContent = username + " : " + note + "  (" + day+ ")";

			var source   = $("#entry-template").html();
			var template = Handlebars.compile(source);

			var item = {
				name: username,
				note: note
			};

			var newContent = template(item);
			$("#content").prepend($(newContent)); //把新的內容塞到content的最上邊

	        noteElement.val(""); //清除留言文字
		}
	}
});