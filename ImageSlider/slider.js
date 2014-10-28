$(function() {
	var sliderInterval = setInterval(function() {
		nextImg();
	}, 8000);

	$('#nav-bar').delay(100).hover(function() {
		$('#nav-bar > a').css('height', '28px');
	}, function() {
		$('#nav-bar > a').css('height', '0px');
	});

	$('#nav-bar a').click(function(dj) {
		var thisIndex = $(this).index();
		dj.preventDefault();
		// console.log(thisAttr);

		if (thisIndex < $('#nav-bar a.activeTab').index()) {
			prevDot(thisIndex);
		} else if (thisIndex > $('#nav-bar a.activeTab').index()) {
			nextDot(thisIndex);
		}

		$('#nav-bar a.activeTab').removeClass('activeTab');
		$(this).addClass('activeTab');

		// To keep the slider going after tab click
		// clearInterval(sliderInterval);
	});
});

function prevImg() {
	var curIndex = $('#image-slider li.active-img').index();

	if (curIndex === 0) {
		$('#image-slider li:last-child').addClass('next-img').animate({
			left: 0
		}, function() {
			$('#image-slider li.active-img').removeClass('active-img').css('left', '-690px');
			$('#image-slider li.next-img').attr('class', 'active-img');

			var nextIndex = $('#image-slider li.active-img').index();

			// $('#dots li.active').removeClass('active');
			// $('#dots li').eq(nextIndex).addClass('active');
			$('#nav-bar a.activeTab').removeClass('activeTab');
			$('#nav-bar a').eq(nextIndex).addClass('activeTab');
		});
	} else {
		$('#image-slider li.active-img').prev().addClass('next-img').animate({
			left: 0
		}, function() {
			$('#image-slider li.active-img').removeClass('active-img').css('left', '-690px');
			$('#image-slider li.next-img').attr('class', 'active-img');

			var nextIndex = $('#image-slider li.active-img').index();

			// $('#dots li.active').removeClass('active');
			// $('#dots li').eq(nextIndex).addClass('active');
			$('#nav-bar a.activeTab').removeClass('activeTab');
			$('#nav-bar a').eq(nextIndex).addClass('activeTab');
		});
	}
}

function nextImg() {
	var curIndex = $('#image-slider li.active-img').index();

	if (curIndex == $('#image-slider li').length - 1) {
		$('#image-slider li:first-child').addClass('next-img').css('left', 690).animate({
			left: 0
		}, function() {
			$('#image-slider li.active-img').removeClass('active-img').css('left', '-690px');
			$('#image-slider li.next-img').attr('class', 'active-img');

			var nextIndex = $('#image-slider li.active-img').index();

			// $('#dots li.active').removeClass('active');
			// $('#dots li').eq(nextIndex).addClass('active');
			$('#nav-bar a.activeTab').removeClass('activeTab');
			$('#nav-bar a').eq(nextIndex).addClass('activeTab');
		});
	} else {
		$('#image-slider li.active-img').next().addClass('next-img').css('left', 690).animate({
			left: 0
		}, function() {
			$('#image-slider li.active-img').removeClass('active-img').css('left', '-690px');
			$('#image-slider li.next-img').attr('class', 'active-img');

			var nextIndex = $('#image-slider li.active-img').index();

			// $('#dots li.active').removeClass('active');
			// $('#dots li').eq(nextIndex).addClass('active');
			$('#nav-bar a.activeTab').removeClass('activeTab');
			$('#nav-bar a').eq(nextIndex).addClass('activeTab');
		});
	}
}

function prevDot(newIndex) {
	$('#image-slider li').eq(newIndex).addClass('next-img').css('left', 690).animate({
		left: 0
	}, function() {
		$('#image-slider li.active-img').removeClass('active-img').css('left', '-690px');
		$('#image-slider li.next-img').attr('class', 'active-img');
	});
}

function nextDot(newIndex) {
	$('#image-slider li').eq(newIndex).addClass('next-img').css('left', 690).animate({
		left: 0
	}, function() {
		$('#image-slider li.active-img').removeClass('active-img').css('left', '-690px');
		$('#image-slider li.next-img').attr('class', 'active-img');
	});
}