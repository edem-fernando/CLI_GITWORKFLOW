$("form > button").on("mouseenter",function(){
	$(this).css({
		cursor				: "pointer",
		background			: "#000",
		color 				: "#FFF"
	});
});
$("form > button").on("mouseout",function(){
	$(this).css({
		padding 				: "10px 40px !important",
		border					: "none",
		background 				: "darkorange",
		color 					: "#FFF",
		"font-weight" 			: "1em",
		"margin-top"			: "10px",
		"border-radius"			: "5px",
		"-moz-border-radius" 	: "5px",
		"-webkit-border-radius"	: "5px",		
		"font-weight" 			: "700"
	});
});
$("article form").on('submit',function(){
	if($("#name").val() == 0) {
		alert("Preencha os dados corretamente");
		return false;
	} else if($("#email").val() == 0 && $("textarea").val() == 0) {
		alert("Preencha os dados corretamente");
		return false;
	}
});