$(function() {
    alert('Adding live event handler...');
    $('li').live('click', function(evt) {
       alert('li ' + evt.target.id + ' clicked'); 
    });
    
    $('#addListItem').click(function() {
        var cnt = $('li').length;
        $('ul').append('<li id="li_' + cnt + '">Here is a list item</li>');
    });
});