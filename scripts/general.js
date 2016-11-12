$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 650, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

$(document).ready(function() {
       $(".css-elements").slideToggle('none');      
   });

$(document).ready(function() {
   $("a.css-el").click(function() {
       $(".css-elements").slideToggle('fast');      
   }) ;
    
});




