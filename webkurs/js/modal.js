$( document ).ready(function() {
	
// Modal Wiki----------------------------------------------------------	
	var modal = document.getElementById('myModal');
	
	var trigger = document.getElementById("wiki");
	
	var shutDown = document.getElementById("closeWiki");
	
	trigger.onclick = function() {
		modal.style.display = "block";
	}
	
	shutDown.onclick = function() {
		modal.style.display = "none";
	}
	
	
// Modal Kopfkino----------------------------------------------------------
	var modal2 = document.getElementById('myModal2');
	
	var trigger2 = document.getElementById("kopfkino");
	
	var shutDown2 = document.getElementById("closeKopfKino");
	
	
	trigger2.onclick = function() {
		modal2.style.display = "block";
	}
	
	shutDown2.onclick = function() {
		modal2.style.display = "none";
		iframe_src = $('#kopfKinoVideo iframe').attr('src');
		 $('#kopfKinoVideo iframe').attr('src', '');
		 $('#kopfKinoVideo iframe').attr('src', iframe_src);
  	}
	
	
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal2) {
			modal2.style.display = "none";
			 iframe_src = $('#kopfKinoVideo iframe').attr('src');
			 $('#kopfKinoVideo iframe').attr('src', '');
			 $('#kopfKinoVideo iframe').attr('src', iframe_src);
		}else if(event.target == modal){
			modal.style.display = "none";
			}
	}

//Slideshow ------------------------------------------------------------
      
	  $(function () {
		  // Slideshow 
		  $("#slider1").responsiveSlides({
			auto: false,
			pager: false,
			nav: true,
			speed: 500,
			namespace: "callbacks",
			before: function () {
			  $('.events').append("<li>before event fired.</li>");
			},
			after: function () {
			  $('.events').append("<li>after event fired.</li>");
			}
		  });
	
		});

});//Doc ready ------------------------------------