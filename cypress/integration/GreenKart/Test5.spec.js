/// <reference types="Cypress" />

describe('My First Test Suite', function() {
	
	it('My Fifth Test Case - Data Tables', function() {

		Cypress.config('pageLoadTimeout', 16000);

		// Navigate to https://rahulshettyacademy.com/AutomationPractice/ website
		cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

		// Data Table

		// Get text from a cell in a data table
		cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
			const text = $el.text();
			if (text.includes('Python')) {

				cy.get('tr td:nth-child(2)').get(index).next().then(function(price) {
					const priceText = price.text();
					expect(priceText).to.equal('25');
				})
			}
		});


	});


});