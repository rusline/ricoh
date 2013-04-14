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

		$('ul.tabs').delegate('li:not(.current)', 'click', function() {
		$(this).addClass('current').siblings().removeClass('current')
			.parents('div.section').find('div.box').hide().eq($(this).index()).fadeIn(150);
			return false;
		});

		$(".checkboxclass").click(function(){
        if($(this).is(":checked")){
            $(this).next("label").addClass("labelselected");
        }else{
            $(this).next("label").removeClass("labelselected");
        }
    });

		$(".radioclass").click(function(){
			 if($(this).is(":checked")){
            $(".radioselected:not(:checked)").removeClass("radioselected");
            $(this).next("label").addClass("radioselected");
			  }

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


