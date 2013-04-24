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

		// enter
		$('.enter-link').each(function(i, item){
			$(item).bind('mouseover', function(e){
			 e.preventDefault();
			 $('div.enter-drop').toggle();
			})
		});
		
		
		//form
		$('.line select, .line input').styler();
		
		

		
		
		

};

$(func);


