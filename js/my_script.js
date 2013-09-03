var func = function()
{
			//form
		$('.line select, .line input').styler();
		
		
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
			 $('div.enter-drop').show();
			})
		});
		
		var n = 0;
		$("div.enter-drop").bind("mouseenter",function(){
			$(this).show();
		}).bind("mouseleave",function(){
			$(this).hide();
		});
			
		
		// delete
		$('.del').click(function(e){
				e.preventDefault();
				$(this).parents(".serial-list li").animate({ opacity: 'hide' }, "slow", function() {$(this).detach()});
		});
		
		// message
		$('.message-box span').click(function(){
				$(this).parents(".message-box div").animate({ opacity: 'hide' }, "slow");
		});
		
		
		// faq
		$(".support-full div.s-top").click(function(){
			$(this).next("div.s-bot").slideToggle("slow")
			.siblings("div.s-bot:visible").slideUp("slow");
			$(this).toggleClass("active");
			$(this).siblings("div.s-top").removeClass("active");
			return false;
		});
		
		
		// popup
		$('.popup-link').click(function(){
				$('.overlay').fadeIn('fast',function(){
						$('.popup-box').animate({'top':'250px'},500);
				});
		});
		$('.close-popup, .overlay').click(function(){
				$('.popup-box').animate({'top':'-2000px'},500,function(){
						$('.overlay').fadeOut('fast');
				});
		});
	
	
		// 
		$(".u-name").click(function(e){
				$(this).addClass("act").parents("div.u-drop-box").addClass("act");
				$(this).next("div.u-name-drop").fadeIn("fast");
			e.preventDefault();	
		});
		
		$(".hide-name-drop").click(function(e){
				$(this).parents("div.u-drop-box").removeClass("act");
				$("div.u-name").removeClass("act");
				$("div.u-name-drop").fadeOut("fast");
			e.preventDefault();	
		});
		
		
		
		// textarea
		$('textarea').elastic();

		
		
		

};

$(func);


