describe('My First Test Suite', function() {
	
	it('My First Test Case', function() {
		Cypress.config('pageLoadTimeout', 16000);
		// Navigate to GREENKART Shopping test website
		// cy.visit(Cypress.env('url') + '/angularpractice/');
		cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
		cy.get('.search-keyword').type('ca');
		cy.wait(2000);
		cy.get('.product').should('have.length',5)
		cy.get('.product:visible').should('have.length', 4);

		// Parets - child chaining
		cy.get('.products').as('productLocator');		// Creates an alias called 'productLocator'
		cy.get('@productLocator').find('.product').should('have.length', 4);	// using the 'productLocator' alias instead of .products
		
		// clicks on the 3rd product
		cy.get(':nth-child(3) > .product-action > button').click();

		// gets the child of the 'products' class which is 'product', then eq = 2 means that it selects the second product
		cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').then(function() {
			console.log('sf');
		})

		cy.get('@productLocator').find('.product').each(($el, index, $list) => {
			const textVeg = $el.find('h4.product-name').text();

			if (textVeg.includes('Cashews')) {
				$el.find('button').click();
			}
		})

		// asset that logo text is 'GREENKART'
		cy.get('.brand').should('have.text', 'GREENKART');

		// Get logo text and print to console
		cy.get('.brand').then(function(logoElement) {
			cy.log(logoElement.text());
		});


	});


});