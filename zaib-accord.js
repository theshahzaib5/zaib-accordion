$(document).ready(function() {
  $(".accord .accord-head").click(function(e) {
	  $(".accord .accord-body").slideUp();
    $(".accord .accord-head").removeClass('arrow-up');
    if($(this).parent().find(".accord-body").is(":hidden")){
		  $(this).parent().find(".accord-body").slideDown("slow");
      $(this).addClass('arrow-up');
	  }
	  else{
		  $(this).parent().find(".accord-body").slideUp("slow");
      $(this).removeClass('arrow-up');
	  }
  });
});
