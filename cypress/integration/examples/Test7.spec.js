/// <reference types="Cypress" />

describe('My First Test Suite', function() {
	
	it('My Seventh Test Case - Switch Tab', function() {

		Cypress.config('pageLoadTimeout', 16000);

		// Navigate to https://rahulshettyacademy.com/AutomationPractice/ website
		cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

		// Switch Tab 
		cy.get('#opentab').then(function() {
			const url = $el.prop('href');
			cy.visit(url);
		});


	});


});