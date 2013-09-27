var func = function()
{
		
		//
		$(document).on("click", ".serial-n .title a", function(e) {
			e.preventDefault();			
			$(this).parent().find('span').replaceWith(function(index, oldHTML){
				return $('<a href="#"></a>').html(oldHTML);
			});
			$(this).replaceWith(function(index, oldHTML){
				return $('<span></span>').html(oldHTML);
			});
			$("div.sp").slideToggle("fast");
			$("div.insp").slideToggle("fast");
		});

		$(".insp").hide();
		
		// enter
		$('.enter-link').click(function(){
			 $('div.enter-drop').toggle();
			 $(this).toggleClass("act");
		})
		$('.enter-drop em').click(function(){
			 $('div.enter-drop').toggle();
			 $('.enter-link').removeClass("act");
		})
		
		// incomp
		$('.incomp').click(function(){
			var tx = $(this).html();
			 $(this).find('div.dropinput').toggle();

		})
		
		$('.dtitle').click(function(){
			var tx = $(this).find('div.drop-title').html();
				$('.dropinput').slideUp("slow");
				$(this).parents('div.incomp').find('input').val(tx);
		});
		$('.dinn').click(function(){
			var tx = $(this).find('div.inn span').html();
				$('.dropinput').slideUp("slow");
				$(this).parents('div.incomp').find('input').val(tx);
		});
		
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
        $(this).	blur(function(){
						$(this).css({'color':'#000', 'font-style':'normal'});
            if($(this).val() == ""){
                $(this).val(txtval);
            }
        });
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
	
	
		// reg
		$(".u-name").each(function(i, item){
			$(item).bind("click", function(e){
			 e.preventDefault();
			 $(".u-name").removeClass("act");
			 $(this).addClass("act");
			 $(".hide-block").hide();
			 $(".hide-block").eq(i).show();
			});
		});	
		
		$(".hide-name-drop").click(function(e){
			$("div.u-name").removeClass("act");
			$(".hide-block").fadeOut("fast");
		e.preventDefault();	
		});
	
		
		// Ball		
		$(".history-b").each(function(i, item){
			$(item).bind("click", function(e){
			 e.preventDefault();
			 $(".history-b").removeClass("act");
			 $(this).addClass("act");
			 $(".hide-block").hide();
			 $(".hide-block").eq(i).show();
			});
		});	
		
		$(".hide-history-drop").click(function(e){
			$("div.history-b").removeClass("act");
			$(".hide-block").fadeOut("fast");
		e.preventDefault();	
		});
		
		// More
		$(".more-link").each(function(i, item){
			$(item).bind("click", function(e){
			 e.preventDefault();
			 $(".more-link").removeClass("act");
			 $(this).addClass("act");
			 $(".more-txt").hide();
			 $(".more-txt").eq(i).show();
			});
		});	
		
		//
		$(".mlink").click(function(e){
				$(this).hide();
				$(this).next("div.mdrop").slideToggle("fast");
			e.preventDefault();	
		});
		
		$(".hide-mdrop").click(function(e){
				$(".mlink").show();
				$(this).parents("div.mdrop").hide();
			e.preventDefault();	
		});
		

		
		// view-popup
		$('.view-link').click(function(){
				$('.overlay').fadeIn('fast',function(){
						$('.view').animate({'top':'250px'},500);
				});
		});
		// answer-popup
		$('.answer-link').click(function(){
				$('.overlay').fadeIn('fast',function(){
						$('.answer').animate({'top':'250px'},500);
				});
		});
		
		// canceled-popup
		$('.canceled').click(function(){
				$('.overlay').fadeIn('fast',function(){
						$('.zachet-p').animate({'top':'250px'},500);
				});
		});
		
		// zachet-popup
		$('.zachet').click(function(){
				$('.overlay').fadeIn('fast',function(){
						$('.fail-p').animate({'top':'250px'},500);
				});
		});
		
		// deluser-popup
		$('.deluser').click(function(){
				$('.overlay').fadeIn('fast',function(){
						$('.deluser-p').animate({'top':'250px'},500);
				});
		});
		
		// addball-popup
		$('.addball').click(function(){
				$('.overlay').fadeIn('fast',function(){
						$('.addball-p').animate({'top':'250px'},500);
				});
		});
		
		// mes-popup
		$('.mes').click(function(){
				$('.overlay').fadeIn('fast',function(){
						$('.mes-p').animate({'top':'250px'},500);
				});
		});
		
		// activate-popup
		$('.activate').click(function(){
				$('.overlay').fadeIn('fast',function(){
						$('.activate-p').animate({'top':'250px'},500);
				});
		});
		
		
		$('.close-popup, .overlay').click(function(){
				$('.answer, .view').animate({'top':'-2000px'},500,function(){
						$('.overlay').fadeOut('fast');
				});
		});
		
				
		jQuery('.scroll-pane').jScrollPane();
	
		
		// textarea
		$('textarea').elastic();

		
		
		
		

};

$(func);


