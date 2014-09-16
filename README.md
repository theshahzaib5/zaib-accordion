zaib-accordion
==============
Please add all the files required.

you are making accordion with jquery so that please make sure jquery library is included in the html file. as following or as you wish.
<script type="text/javascript" src="jquery-1.11.1.js"></script>

when done with adding jquery library do these simple steps to make zaib-accordion.

<script type="text/javascript">
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
</script>
