$( document ).ready(function() {
	
// menu -----------------

    jQuery('.toggle-nav').click(function(e) {
		
        jQuery(this).toggleClass('active');
        jQuery('.main-header nav ul').toggleClass('active');
 
        e.preventDefault();
    });
// menu -----------------



}); //document.ready