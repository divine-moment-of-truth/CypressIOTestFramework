/// <reference types="Cypress" />

describe('My First Test Suite', function() {
	
	it('My Sixth Test Case - Mouse Hover Over', function() {

		Cypress.config('pageLoadTimeout', 16000);

		// Navigate to https://rahulshettyacademy.com/AutomationPractice/ website
		cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

		// Mouse hOver
		cy.get('.mouse-hover-content').invoke('show');

		cy.contains('Top').click({ force: true });
		cy.url().should('include', 'top')

	});


});