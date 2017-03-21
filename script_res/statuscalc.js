$( document ).ready(function() {
    var d = new Date();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    notloadedyet = true;
    if($('body').prop("loaded")){
    	notloadedyet = false;
    }
    if(month == 4 && day == 1 && notloadedyet){
    	//it's april fools motherfuckers
   		//buckle up
   		$('body').empty();
   		$('body').load("statuscalc.html", function(){
        $('body').prop("loaded", true)
        $('#reverse').click(function(){
          $('body').empty();
          $('body').load("standardbody.html");
        })        
      });
    }
});