$(function() {
    var allEvents = 'blur focus load resize scroll unload beforeunload click dblclick  mousedown mouseup mouseover mouseout mouseenter mouseleave change select  submit keydown keypress keyup error';
    $('#apply').click(function() {
        var $bindTargets = $('#target, input');
        $bindTargets.unbind();
        var events = $('#events').val();
        if (events == 'all') events = allEvents;
        $bindTargets.bind(events, function(evt) {
            var tgt = evt.target;
            var out = 'event: ' + evt.type + ' on ' + tgt.nodeName + ': ' + tgt.id;
            if (evt.data) out += ' data: ' + evt.data;
            $out = $('#out');
            $out.html(out + '<br/>' + $out.html());
        });
    });
    
    
});