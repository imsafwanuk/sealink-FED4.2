// changes the height and content-font-size of slide1 when resized or on load
$(window).on("load resize ", function() {
	var width= $("#slide1").width();

	if(width<=320)
	{
		$("#slide1").height(width+400);
		$("#slide1").css("background-size", "100% 100%");
		$("#slide3").css("background-size", "100% 100%");
	}
	else if(width>320 && width <= 375)
	{	
		$("#slide1").height(width+250);
		$("#slide1").css("background-size", "100% 100%");
		$("#slide3").css("background-size", "100% 100%");
	}
	else if(width>375 && width <= 425)
		$("#slide1").height(width+190);
	else if(width>425 && width <= 450)
		$("#slide1").height(width+250);
	else if(width>450 && width<=600)
	{
		$("#slide1").height(width+250);
	}
	else if(width>470 && width<=550)
	{
		$("#slide1").height("1px");
	}
	else if(width>550 && width<=600)
	{
		$("#slide1").height(0);
	}
	else if(width>600 && width<=768)
	{
		$("#slide1").height(width*0.88);
	}
	else if(width>768 && width<=800)
	{
		$("#slide1").height(width*0.7);
	}
	else if(width>800 && width<=964)
	{
		$("#slide1").height(width*0.6);
	}
	else if(width>986 && width<=1100)
	{
		$("#slide1").height(width*0.7);	
	}
	else if(width>1100 && width<=1300)
	{
		$("#slide1").height(width*0.6);
	}
	else if(width>1300)
	{
		$("#slide1").height(width*0.4);	
	}
});

var slides;				//contains slide 1,2,3
var links;				//contains navbar links
var currentSlide=1;		//stores current slide
var goToSlide=1;		//stores which slide to go next

$(document).ready(function()
{
	slides = $(".slide");
	links = $("ul.nav li");
	
	// event fires when nav links are clicked
	$(links).click(function(e){
		// 	e.preventDefault();
		goToSlide = $(this).attr("data-slide");
		scrollPage(goToSlide);
	});

	// event fires when any of the arrows are clicked
	$(".arrow").click(function(){
		// if any down arrows are pressed, get the current siide and ++
		var arrow = $(this).attr("data-arrow");
		if( arrow[0] == "d")
			goToSlide = arrow[arrow.length-1];
		else	// if any up arrows are pressed, get the current siide and --
			goToSlide = arrow[arrow.length-1];

		scrollPage(goToSlide);
	});
});


// webpage gets scrolled to the given 'dataslide' using jquery animate method
function scrollPage(dataslide) {
	if(dataslide == 1)
        $("html,body").animate({ scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top-40}, 'slow');
    else if(dataslide == 2)
    	$("html,body").animate({ scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top-40}, 'slow');
    else
    	$("html,body").animate({ scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top}, 'slow');
    currentSlide = dataslide;
    }