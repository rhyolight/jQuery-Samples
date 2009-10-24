$(function() {
    
    $('.loading').ajaxStart(function() {
        $(this).show();
    }).ajaxStop(function() {
        $(this).fadeOut();
    });
    
    $('#trigger').click(function() {
        $.ajax({
            url: "http://localhost:8080/jQueryServer/ajax/ajaxUrl/",
            data: "id=1",
            success: function(obj, status) {
                alert(status);
            }
        });
    });
});