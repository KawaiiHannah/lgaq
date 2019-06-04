$( document ).ready( function() {
	
	// Add smooth scroll to smooth scrolling links
	$( '.js-scroll' ).on( 'click', function( e ) {

		// Prevent the jump
		e.preventDefault();

		var target = $( this ).attr( 'data-scroll-target' );
		var $target = $( target );
		
		// Scrolling...
		$( 'html, body' ).animate({
			scrollTop: $( $target ).offset().top
		}, 800, function(){
			window.location.hash = $target;
		});
	});
});