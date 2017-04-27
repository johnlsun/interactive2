  	$( document ).ready(function() {
  		// b1--------------
		$('.b1').click(function() {
		    $(".textbox1").fadeIn();
		    $(".thinblack").fadeIn();
		});
		$('.closebttn').click(function() {
		    $(".textbox1").fadeOut();
		    $(".thinblack").fadeOut();
		});
		$('.thinblack').click(function() {
		    $(".textbox1").fadeOut();
		    $(".thinblack").fadeOut();
		});


		// b2--------------
		$('.b2').click(function() {
		    $(".textbox2").fadeIn();
		    $(".thinblack").fadeIn();
		});
		$('.closebttn').click(function() {
		    $(".textbox2").fadeOut();
		    $(".thinblack").fadeOut();
		});
		$('.thinblack').click(function() {
		    $(".textbox1").fadeOut();
		    $(".thinblack").fadeOut();
		});


		// b3--------------
		$('.b3').click(function() {
		    $(".textbox3").fadeIn();
		    $(".thinblack").fadeIn();
		});
		$('.closebttn').click(function() {
		    $(".textbox3").fadeOut();
		    $(".thinblack").fadeOut();
		});
		$('.thinblack').click(function() {
		    $(".textbox1").fadeOut();
		    $(".thinblack").fadeOut();
		});


		//tbox hover-----------
		$('.tbox').mouseenter(function() {
		    $(".squares").fadeIn();
		});
		$('.tbox').mouseleave(function() {
		    $(".squares").fadeOut();
		});


// video
		
    $("#playbttn").click(function(){

	  $(this).hide();	    	
      $("#pausebttn").show();	
      $("#video1")[0].play();

    });

    $("#pausebttn").click(function(){

	  $(this).hide();	
      $("#playbttn").show();	
      $("#video1")[0].pause();

    });

    $(".closebttn").click(function(){

	  $("#pausebttn").hide();	
      $("#playbttn").show();	
      $("#video1")[0].pause();

    });

    $("#video1").on('ended', function(){

      $("#playbttn").show();	
      $("#pausebttn").hide();

    });

	});
