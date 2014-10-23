$(function(){
		
		var sliderInterval = setInterval(function() {
     		nextImg();
		}, 6000);
		
		$('.nav-arrow').click(function(){
			if($(this).attr('id') == 'arrow-left'){
				prevImg();
			}else{
				nextImg();
			}
			
			clearInterval(sliderInterval);
			
		});
		
		$('#nav-bar').delay(100).hover(function() {
			$('#nav-bar > a').css('height', '28px');
		}, function() {
			$('#nav-bar > a').css('height', '0px');
		});
		$('#nav-bar a').click(function(){
			var thisIndex = $(this).index(),
				thisAttr = $(this).html();

				// console.log(thisAttr);
			
			if(thisIndex < $('#nav-bar a.active').index()){
				prevDot(thisIndex);
			}else if(thisIndex > $('#nav-bar a.active').index()){
				nextDot(thisIndex);
			}
			
			$('#nav-bar a.active').removeClass('active');
			$(this).addClass('active');
			
			clearInterval(sliderInterval);
			
		});
	});
	
	function prevImg(){
		var curIndex = $('#image-slider li.active-img').index();
		
		if(curIndex === 0){
			$('#image-slider li:last-child').addClass('next-img').animate({
				left: 0
			}, function(){
				$('#image-slider li.active-img').removeClass('active-img').css('left', '-690px');
				$('#image-slider li.next-img').attr('class', 'active-img');
				
				var nextIndex = $('#image-slider li.active-img').index();
				
				$('#dots li.active').removeClass('active');
				$('#dots li').eq(nextIndex).addClass('active');
				$('#nav-bar a.active').removeClass('active');
				$('#nav-bar a').eq(nextIndex).addClass('active');
			});
		}else{
			$('#image-slider li.active-img').prev().addClass('next-img').animate({
				left: 0
			}, function(){
				$('#image-slider li.active-img').removeClass('active-img').css('left', '-690px');
				$('#image-slider li.next-img').attr('class', 'active-img');
				
				var nextIndex = $('#image-slider li.active-img').index();
				
				$('#dots li.active').removeClass('active');
				$('#dots li').eq(nextIndex).addClass('active');
				$('#nav-bar a.active').removeClass('active');
				$('#nav-bar a').eq(nextIndex).addClass('active');
			});
		}
	}
	
	function nextImg(){
		var curIndex = $('#image-slider li.active-img').index();
		
		if(curIndex == $('#image-slider li').length - 1){
			$('#image-slider li:first-child').addClass('next-img').css('left', 690).animate({
				left: 0
			}, function(){
				$('#image-slider li.active-img').removeClass('active-img').css('left', '-690px');
				$('#image-slider li.next-img').attr('class', 'active-img');
				
				var nextIndex = $('#image-slider li.active-img').index();
				
				$('#dots li.active').removeClass('active');
				$('#dots li').eq(nextIndex).addClass('active');
				$('#nav-bar a.active').removeClass('active');
				$('#nav-bar a').eq(nextIndex).addClass('active');
			});
		}else{
			$('#image-slider li.active-img').next().addClass('next-img').css('left', 690).animate({
				left: 0
			}, function(){
				$('#image-slider li.active-img').removeClass('active-img').css('left', '-690px');
				$('#image-slider li.next-img').attr('class', 'active-img');
				
				var nextIndex = $('#image-slider li.active-img').index();
				
				$('#dots li.active').removeClass('active');
				$('#dots li').eq(nextIndex).addClass('active');
				$('#nav-bar a.active').removeClass('active');
				$('#nav-bar a').eq(nextIndex).addClass('active');
			});
		}
	}
	
	function prevDot(newIndex){
		$('#image-slider li').eq(newIndex).addClass('next-img').css('left', 690).animate({
			left: 0
		}, function(){
			$('#image-slider li.active-img').removeClass('active-img').css('left', '-690px');
			$('#image-slider li.next-img').attr('class', 'active-img');
		});
	}
	
	function nextDot(newIndex){
		$('#image-slider li').eq(newIndex).addClass('next-img').css('left', 690).animate({
			left: 0
		}, function(){
			$('#image-slider li.active-img').removeClass('active-img').css('left', '-690px');
			$('#image-slider li.next-img').attr('class', 'active-img');
		});
	}