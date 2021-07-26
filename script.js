$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#button1').fadeIn();
    } else {
        $('#button1').fadeOut();
    }
});
$(document).ready(function() {
    $("#button1").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});