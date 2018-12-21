$('#bio').click( function() {
    $(this).addClass('active-btn');
    $('.timeline').hide();
    $('.bio').show();
    $(this).siblings().removeClass('active-btn');
});

$('#timeline').click( function() {
    $(this).addClass('active-btn');
    $('.bio').hide();
    $('.timeline').show();
    $(this).siblings().removeClass('active-btn');
});