	
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
			//	We remove the css file for the white theme
			$("#whiteThemeCss1").remove();
			$("#whiteThemeCss2").remove();
			$("#whiteThemeCss3").remove();
			loadTheme("dark");
			localStorage.setItem("theme","dark");
		}else{
			$(this).html("Dark theme");
			this.value = "dark";
			$("#darkThemeCss1").remove();
			$("#darkThemeCss2").remove();
			$("#darkThemeCss3").remove();
			loadTheme("white");
			localStorage.setItem("theme","white");
		}
	});
	
})

function loadTheme(color){
	
	var head = document.getElementsByTagName('HEAD')[0];  
  
        // Create new links element 
        var link1 = document.createElement('link'); 
		var link2 = document.createElement('link'); 
	    var link3 = document.createElement('link');
		
        // Set the attributes for links element  
        link1.rel = 'stylesheet';  
        link2.rel = 'stylesheet';  
        link3.rel = 'stylesheet';  
      
        link1.type = 'text/css'; 
		link2.type = 'text/css'; 
		link3.type = 'text/css'; 
		
		link1.id = color + "ThemeCss1";
		link2.id = color + "ThemeCss2";
		link3.id = color + "ThemeCss3";
	  
        link1.href = 'script_res/' + color + '_select2.css';  
		link2.href = 'script_res/' + color + '_ap_calc.css';  
		link3.href = 'script_res/' + color + '_nb_calc.css';  

		
        // Append links element to HTML head 
        head.appendChild(link1); 
		head.appendChild(link2);  
		head.appendChild(link3);  
}