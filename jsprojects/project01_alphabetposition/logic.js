$(document).ready(function(){
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	$("#clickme").click(function(){
		var user = $("#letter").val().toLowerCase();
		if (user.length == 0 || user == " "){
			$("#returnposition").empty().append("enter a letter");
		} else if (alphabet.indexOf(user)+1 == 0 || alphabet.indexOf(user) == -1){
			$("#returnposition").empty().append(user + " is not a letter!");
			
		} else {
		$("#returnposition").empty().append(alphabet.indexOf(user)+1);
		}
	})
})