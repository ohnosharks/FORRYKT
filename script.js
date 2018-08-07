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
			    	setTimeout(function(){
			    		setTimeout(function(){
			    			glitch();
			    		}, next*100);
			    	}, delay*100);
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

});