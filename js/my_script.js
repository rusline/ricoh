var func = function()
{

    $('input:text, input:password').each(function(){
        var txtval = $(this).val();
        $(this).focus(function(){
						$(this).css({'color':'#000', 'font-style':'normal'});
            if($(this).val() == txtval){
                $(this).val('')
            }
        });
        $(this).blur(function(){
						$(this).css({'color':'#000', 'font-style':'normal'});
            if($(this).val() == ""){
                $(this).val(txtval);
            }
        });
    });

			
		
		//form
		$('.line select, .line input').styler();
		
		// Slider
		var i = $(window).width();
			if (i > 319){ $('#items > div').css({ width: i }); }
			$("#slider").scrollable({ circular: true, touch: false, easing: 'easeInOutBack', speed: 900}).navigator({ navi: '#navigation' });
			window.api = $("#slider").data("scrollable");
			$(window).resize(function() {
				var a = 1 + window.api.getIndex();
				var w = $(window).width();
				if (w > 319) {
					var l = a * w
					$('#items').css({ left: + - +l });
					$('#items > div').css({ width: w });
				} else {
					$('#items > div').css({ width: 300 });
				}
			});


};

$(func);


