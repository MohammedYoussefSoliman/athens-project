$(".lineParentH").mouseover(function() {
	$(this).find('.lineThrough').animate({width:'100%'},200, stop());
});
$(".lineParent").mouseleave(function() {
	$(this).find('.lineThrough').animate({width:'0'},200, stop());
});

$(".nav-link").mouseover(function() {
	$(this).find('.lineThroughA').animate({width:'100%'},200, stop());
});
$(".nav-link").mouseleave(function() {
	$(this).find('.lineThroughA').animate({width:'0'},200, stop());
});

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});



