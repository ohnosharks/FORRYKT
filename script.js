jQuery(document).ready(function($) {
	

	setTimeout(function(){
		glitch();
	}, 2000);


	function glitch(){
		$(".main").glitch({
		    amount: 10,
		    complete: function(canvas){
		    	$(".glitch").html('').append(canvas);
		    	var x = Math.floor(Math.random() * 20) + 1;
		    	if(x>15){
		    		var delay = (Math.random() * 2) + 1;
			    	var next = Math.floor(Math.random() * 5) + 1;
			    	// setTimeout(function(){
			    		setTimeout(function(){
			    			glitch();
			    		}, next*50);
			    	// }, delay*10);
		    	} else {
			    	var delay = (Math.random() * 2) + 1;
			    	var next = Math.floor(Math.random() * 5) + 1;
			    	setTimeout(function(){
			    		$(".glitch").html('');
			    		setTimeout(function(){
			    			glitch();
			    		}, next*1000);
			    	}, delay*200);
		    	}
		    }
		});
	}


	$("form").on('submit', function(){
		var $this = $(this);
		var val = $this.find('input[type="email"]').val();
		$this.find('input[type="submit"]').val('Tilmelder..');
		$.ajax({
			url: 'https://forrykt.taokitamoto.dk/submit.php',
			type: 'POST',
			data: {mail: val},
		})
		.done(function(data) {
			setTimeout(function(){
				$(".submit").hide();
				$(".done").show();
			}, 1000);
		});
		
		return false;
	});

	$(".pragtfuldt").on('click', function(){
		$(".mail-box").hide();
		$(".submit").show();
		$(".open-tilmeld").show();
		$(".submit").find('input[type="email"]').val('');
		$(".done").hide();
	});

	$(".open-tilmeld").on('click', function(){
		$(this).hide();
		$(".mail-box").show();
	});


});