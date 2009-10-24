$(function() {
    
    var cssApplication = function() {
        var $tgt = $('#target');
        $tgt.find('*').andSelf().attr('style', '');  // clear style of #target and all children        
        $tgt.css({'border' : '1px solid black'});   // reset css of #target
        eval($('#code').val()); // apply the user input
        
        /*
        // write out the CSS style of #target for reference
        var styleString = "";
        var cssStyleDeclaration = $tgt.get()[0].style;
        $.each(cssStyleDeclaration, function(i, name) {
            styleString += name + ": " + cssStyleDeclaration.getPropertyValue(name) + "<br/>";
        });
        $('#attrs').html(styleString);
        */
    };
    
    cssApplication();
    
    $('#apply').click(cssApplication);
    
    var hideExamples = function() { 
		$('#examples').height("300px");
		$('#examples').css("overflow", "hidden");
	};

	$('#examples ul').hover(
		function() { 
			$('#examples').height("50%");
			$('#examples').css("overflow", "scroll");
		},
		hideExamples
	);

	$('#examples li').hover(
		function() { $(this).addClass('hover'); },
		function() { $('#examples li').removeClass('hover'); }
	).click(function() {
		var preText = $(this).find('pre').html();
		preText = preText.replace(/&gt;/g,'>').replace('&lt;', '<');
		$('#code').val(preText);
		cssApplication();
		hideExamples();
	});
    
});