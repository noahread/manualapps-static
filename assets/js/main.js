;(function( window, document ) {
	window.MANUALAPPS = window.MANUALAPPS || {};

	MANUALAPPS.init = function() {

		// Initialize Utility and Common functions
		MANUALAPPS.util.init();
		MANUALAPPS.common.init();

		// Add "data-page" to body tag to trigger page-specific function
		var page = document.body.getAttribute( "data-page" );

		if (MANUALAPPS[page] && typeof MANUALAPPS[page]["init"] === "function") {
			MANUALAPPS[page]["init"]();
		}
	};

	/*
	 * Utility/Helper
	 */
	MANUALAPPS.util = {
		init: function() {
			var _this = this;
		}
	};

	/*
	 * Common/Site-Wide
	 */
	MANUALAPPS.common = {
		init: function() {
			var _this = this;
			$("article").fitVids();
			$("article p").fitVids();
			$('#contact-form').submit(function(ev) {
			    // Prevent the form from actually submitting
			    ev.preventDefault();

			    // Get the post data
			    var data = $(this).serialize();

			    // Send it to the server
			    $.post('/', data, function(response) {
			        if (response.success) {
			            $('#thanks').addClass("active");
			        } else {
			            // response.error will be an object containing any validation errors that occurred, indexed by field name
			            // e.g. response.error.fromName => ['From Name is required']
			            alert('An error occurred. Please try again.');
			        }
			    });
			});
		}
	};

	/*
	 * Page-Specific
	 */
	MANUALAPPS.home = {
		init: function() {
			var _this = this;
		}
	};

	MANUALAPPS.init();
})( window, document );