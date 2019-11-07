/// <reference types="Cypress" />

describe('My First Test Suite', function() {
	
	it('My Second Test Case', function() {

		Cypress.config('pageLoadTimeout', 16000);
		// Navigate to GREENKART Shopping test website
		cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
		cy.get('.search-keyword').type('ca');
		cy.wait(2000);

		// Parets - child chaining
		cy.get('.products').as('productLocator');		// Creates an alias called 'productLocator'
		cy.get('@productLocator').find('.product').each(($el, index, $list) => {
			const textVeg = $el.find('h4.product-name').text();

			if (textVeg.includes('Cashews')) {
				$el.find('button').click();
			}
		})

		// click on shopping cart icon
		cy.get('.cart-icon > img').click();

		// click on PROCEED TO CH£CKOUT
		cy.contains('PROCEED TO CH£CKOUT').click();

		// click 'Place Order' button
		cy.contains('Place Order').click();

	});


});