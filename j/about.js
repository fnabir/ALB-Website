(function ($) {
"use strict";
$(window).on('scroll', function () {
window.setInterval( function(){
var scroll = $(window).scrollTop();
if (scroll < 400) {
$("#sticky-header").removeClass("sticky");    
} else {
$("#sticky-header").addClass("sticky");  
}
},10);
});
})(jQuery);
$(document).ready(function(){
var menu = $('ul#navigation');
if(menu.length){
menu.slicknav({
prependTo: ".mobile_menu",
closedSymbol: '+',
openedSymbol:'-'
});
}
});
var a = 0;
$(window).scroll(function() {
var oTop = $('#counter').offset().top - window.innerHeight;
if (a == 0 && $(window).scrollTop() > oTop) {
$('.counter-count').each(function() {
var $this = $(this),
countTo = $this.attr('data-count');
$({
countNum: $this.text()
}).animate({
countNum: countTo
},
{
duration: 3000,
easing: 'swing',
step: function() {
$this.text(Math.floor(this.countNum));
},
complete: function() {
$this.text(this.countNum);   
}
});
});
a = 1;
}
});