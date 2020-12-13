( function( $ ) {
	var $window = $( window );

	/*
	 * Toggle slide menu
	 */
	function slideControl() {
		$( '.menu-toggle' ).on( 'click', function( e ) {
			e.preventDefault();
			$( '.slide-menu' ).toggleClass( 'expanded' ).resize();
			$( 'body' ).toggleClass( 'sidebar-open' );
			$( this ).toggleClass( 'toggle-on' );
		} );
	}

	/*
	 * Close slide menu with escape key
	 */
	$( document ).keyup( function( e ) {
		if ( e.keyCode === 27 && $( '.slide-menu' ).hasClass( 'expanded' ) ) {
			$( 'body' ).removeClass( 'sidebar-open' );
			$( '.menu-toggle' ).removeClass( 'toggle-on' );
			$( '.slide-menu' ).removeClass( 'expanded' );
		}
	} );

	/*
	 * Wrap tiled gallery
	 */
	function galleryWrapper() {
		$( '.entry-content' ).find( '.tiled-gallery' ).each( function() {
			if ( ! $( this ).hasClass( 'gallery-wrapped' ) ) {
				$( this ).wrap( '<div class="tiled-gallery-wrapper"></div>' );
				$( this ).addClass( 'gallery-wrapped' );
				$( this ).resize();
			}
		} );
	}

	/*
	 * Add extra class to large images
	 */
	function outdentImages() {
		$( '.entry-content img' ).each( function() {
			var img = $( this ),
				caption = $( this ).closest( 'figure' ),
				new_img = new Image();

			new_img.src = img.attr('src');
			var img_width = new_img.width;

			if ( img_width >= 1000 && $( this ).parents( '[class^="wp-block-"]').length === 0 ) {

				$( this ).addClass( 'size-big' );
				$( this ).parents( 'p' ).addClass( 'size-big-wrapper' );

				if ( $.trim( $( this ).parents( 'p' ).text() ) != '' ) {
					$( this ).parents( 'p' ).contents().filter( 'a, img' ).wrap( '<span class="size-big-wrapper" />' );
					$( this ).parents( 'p' ).removeClass( 'size-big-wrapper' );
				}
			}
			if ( caption.hasClass( 'wp-caption' ) && img_width >= 1000 ) {
				$( this ).removeClass( 'size-big' );
				caption.addClass( 'caption-big' );
			}
		} );
	}

	/*
	 * Manage full-screen featured images
	 */
	function fullScreenImages() {
		var $entryBackground = $( '.entry-background' ),
			singleThumbnail = $( 'body' ).hasClass( 'single-thumbnail' );

		if ( ! singleThumbnail ) {
			return;
		}

		if ( 768 < $window.width() ) {
			$entryBackground.height( $window.height() + 'px' );
		} else {
			$entryBackground.height( 'auto' );
		}

		$( 'html, .single.single-thumbnail' ).height( 'auto' );
	}
	// Check if it's time to start the animation.
	function checkAnimation() {

		// 1st post
		var $welcome = $('.tag-welcome');

		// If the animation has already been started
		if ($welcome.hasClass('start-animation')) {
			// pass
		} else {
			if (isElementInViewport($welcome)) {
				// Start the animation
				$welcome.addClass('start-animation');
			}
		}
		// 2nd post
		var $aligment = $('.tag-alignment');

		// If the animation has already been started
		if ($aligment.hasClass('start-animation')) {
			// pass
		} else {
			if (isElementInViewport($aligment)) {
				// Start the animation
				$aligment.addClass('start-animation');
			}
		}
		// 3rd post
		var $balancing = $('.tag-balancing');

		// If the animation has already been started
		if ($balancing.hasClass('start-animation')) {
			// pass 
		} else {
			if (isElementInViewport($balancing)) {
				// Start the animation
				$balancing.addClass('start-animation');
			}
		}
		// 4th post
		var $store = $('.tag-store');

		// If the animation has already been started
		if ($store.hasClass('start-animation')) {
			// pass 
		} else {
			if (isElementInViewport($store)) {
				// Start the animation
				$store.addClass('start-animation');
			}
		}
	}
	function isElementInViewport(elem) {
		var $elem = $(elem);
	
		// Get the scroll position of the page.
		var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
		var viewportTop = $(scrollElem).scrollTop();
		var viewportBottom = viewportTop + $(window).height();
	
		// Get the position of the element on the page.
		if ($elem.length > 0 ) {
			var elemTop = Math.round( document.querySelector($elem.selector).getBoundingClientRect().top );
			var elemBottom = elemTop + $elem.height();
		
			return ((elemTop < viewportBottom/2) && (elemBottom > viewportTop));
		} else {
			return false
		}
		
	}
	//After DOM is ready
	$( document ).ready( function() {
		slideControl();
		fullScreenImages();
	} );

	// After page loads
	$window.load( function() {
		galleryWrapper();
		outdentImages();
	} );

	// On window scroll 

	// On window resize
	$window.on( 'resize', function() {
		fullScreenImages();
	});
	// Capture scroll events
	$(window).scroll(function(){
		checkAnimation();
	});
	// After infinite scroll loads
	$window.on( 'post-load', function() {
		galleryWrapper();
		outdentImages();
	} );

} )( jQuery );
