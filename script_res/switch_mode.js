	
// Load theme according to localStorage
if(localStorage.getItem("theme") == "dark"){
	$("#switchTheme").html("White theme");
	$("#switchTheme").val("white");
	loadTheme("dark");
}else{
	$("#switchTheme").val("dark");
	loadTheme("white");
}


$(function(){

	$("#switchTheme").on("click", function(){
		
		if($(this).val() == "dark"){
			$(this).html("White theme");
			this.value = "white";
			//	We load the dark theme
			loadTheme("dark");
			localStorage.setItem("theme","dark");
		}else{
			$(this).html("Dark theme");
			this.value = "dark";
			// We load the white theme
			loadTheme("white");
			localStorage.setItem("theme","white");
		}
	});
	
})

function loadTheme(color){
	$('body').removeClass();
	$('body').addClass(color);
}