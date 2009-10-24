$(function() {

	var applySelector = function() {
		$('*').removeClass('highlight');
		var selector = $('#selector').val();
		var toEval = selector + ".addClass('highlight');";
		eval(toEval);
	};

	$('#apply').click( applySelector );

	$('#source').val($('#content').html());

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
		$('#selector').val(preText);
		applySelector();
		hideExamples();
	});

});
