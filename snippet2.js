/*
You’ve got your woocommerce site up and running but there’s this really annoying thing happening when users click on the product image. The image opens in the same window, navigating away from the product page.

Here’s a quick fix using jquery. If you’re not familiar with child themes, download the Custom CSS/JS plugin and drop this into a javascript file!
*/
jQuery(document).ready(function( $ ){
	if ( $(".woocommerce-product-gallery__image").length ) {    //make sure the link element exists on the page
		$( ".woocommerce-product-gallery__image a" ).click(function( event ) {
			event.preventDefault();     //cancel the onclick action
		});
	}
});
