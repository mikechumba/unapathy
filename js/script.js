$('#bio').click( function() {
    $('.timeline').hide();
    $('.bio').show();
});

$('#timeline').click( function() {
    $('.bio').hide();
    $('.timeline').show();
    $('timeline').addCss('.active');
});