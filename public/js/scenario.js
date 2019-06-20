$(function() {
	var $tabItem = $( ".main-tab__item" );
	
	$tabItem.click(function() {
		$tabItem.each(function(tabEl) {
			$tabItem[tabEl].classList.remove( "main-tab__item--active" );
		});
		$( this ).addClass( "main-tab__item--active" );
	});

});