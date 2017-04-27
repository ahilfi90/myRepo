$( document ).ready(function() {

//menu scroll ----------------------------
$(function menuSectionJump(){ 
	
	$('nav a').click(function(e){
		
		var sectionID = e.currentTarget.id + "Section";
		
		$("html body").animate({
			
			scrollTop: $("#" + sectionID).offset().top - 60
		}, 1000);
		
	});
	
});
//menu scroll ----------------------------

//button scroll ---------------------------
$(function buttonSectionJump(){ 
	
	$('.intro-container a').click(function(){ 
		
		var sectionID = "kursSection";
		
		$("html body").animate({
			
			scrollTop: $("#" + sectionID).offset().top
		}, 1000);
		
	});
	
});
//button scroll----------------------------

//Scroll Up Icon --------------------------
$(function scrollUp(){ 
	
	$('.scroll-up img').click(function(){ 
			
		$("html body").animate({scrollTop: 0}, 700);
		
	});
	
});
//Scroll Up Icon-------------------------

//header-background scroll --------------
$(window).scroll(function(){ 
	
	var scrollTop = $(this).scrollTop();
	$('.intro-container-background').css('top', -(scrollTop * .4) + "px")
	
	});
//header-background scroll ---------------

//fixed menu -----------------------------
function fixedMenu(){
	
	var nav =$('.main-header-container').offset().top+50;
	var yOffset = window.pageYOffset;
	if(nav < yOffset){
		$('.main-header').css({"padding":"7px 40px 5px 20px ","background":"rgba(255,255,255,0.985)"})
		$('.logo img').css({"height":"80px"})
		$('.main-header nav').css({"padding-top":"20px"})
		
	}else{
		$('.main-header').css({"padding":"20px", "background":"rgba(255,255,255,0.7)", "transition":".5s"})
		$('.logo img').css({"height":"130px", "transition":".5s"})	
		$('.main-header nav').css({"padding-top":"40px", "transition":".5s"})		
		}
	}
	
	window.addEventListener('scroll',fixedMenu);
	
//fixed menu -----------------------------


});// document.ready
