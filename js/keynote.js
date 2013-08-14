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

		var username = $("#username").val(); //取任何表單元素的值
		var note = $("#note").val(); //取任何表單元素的值

		if (note != "") {

			var noteHtml = getNoteHtml(username, note, getTime());

			$("#content").prepend(noteHtml); //把新的內容塞到content的最上邊

	        $("#note").val(""); //清除留言文字
		}
	}

	function getNoteHtml(username, note, postTime) {
		var source   = $("#message-template").html();
		var template = Handlebars.compile(source);

		var item = {
			"name" : username,
			"note" : note,
			"postTime" : postTime
		};

		return template(item);
	}

	function getTime() {
		var dateTime = new Date;
		var day = dateTime.getFullYear() + '/' + dateTime.getMonth() + '/' + dateTime.getDate() + '   ' + 
			dateTime.getHours()+ ':' + dateTime.getMinutes() + ':' + dateTime.getSeconds();

		return day;
	}
});