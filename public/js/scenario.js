$(function() {
	var $tabItem = $( ".main-tab__item" );
	
	$tabItem.click(function(e) {
		$tabItem.each(function(tabEl) {
			$tabItem[tabEl].classList.remove( "main-tab__item--active" );
		});
		$( this ).addClass( "main-tab__item--active" );
	});

	$tabItem.each(function(tabEl) {
		$tabItem[tabEl].classList.remove( "main-tab__item--active" );
		if ( $tabItem[tabEl].children[0].pathname == window.location.pathname ) {
			$tabItem[tabEl].classList.add( "main-tab__item--active" );
		}
	});
});