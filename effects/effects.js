$(function() {
    
    var applyEffect = function() {
		eval($('#code').val());
		setTimeout("$('#target').fadeIn();", 2000);
	};

	$('#apply').click( applyEffect );
	
	var hideExamples = function() { 
		$('#examples').height("100px");
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
		applyEffect();
		hideExamples();
	});
});