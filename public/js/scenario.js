var $boolean = false;

$(function() {
	var $tabItem = $( ".main-tab__item" ),
			$headerLogo = $( "#header__logo" );

	$tabItem.click(function(e) {
		$tabItem.each(function(tabEl) {
			$tabItem[tabEl].classList.remove( "main-tab__item--active" );
		});
	
		setTimeout(callFunction, 1);

		$( this ).addClass( "main-tab__item--active" );
	});

	$headerLogo.click(function(e) {
		$tabItem.each(function(tabEl) {
			$tabItem[tabEl].classList.remove( "main-tab__item--active" );
		});	
		$( $tabItem[0] ).addClass( "main-tab__item--active" );
	});

	$tabItem.each(function(tabEl) {
		$tabItem[tabEl].classList.remove( "main-tab__item--active" );
		if ( $tabItem[tabEl].children[0].pathname == window.location.pathname ) {
			$tabItem[tabEl].classList.add( "main-tab__item--active" );
		}
	});

	callFunction();

	function callFunction() {
		if ( window.location.pathname == "/question" ) {
			$questionHead = $( ".question__head" );
			$questionHead.click(function(e) {
				$questionHead.each(function(el) {
					$( $questionHead[el] ).next().hide( "slow" );
				});
				$el = $( this ).next();
				$el.slideToggle();
			});
		}
	}

});