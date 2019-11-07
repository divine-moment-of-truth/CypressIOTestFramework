/// <reference types="Cypress" />

describe('My First Test Suite', function() {
	
	it('My Fourth Test Case - alert popups', function() {

		Cypress.config('pageLoadTimeout', 16000);

		// Navigate to https://rahulshettyacademy.com/AutomationPractice/ website
		cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

		// Alert popups

		// Click 'Alert' button to bring up the alert popup window
		cy.get('#alertbtn').click();

		// When the alert popup appears (window:alert) assert that the text being displayed in the alert popup is correct
		cy.on('window:alert', (str) => {
			// Mocha asertion
			expect(str).to.equal('Hello , share this practice page and share your knowledge');
		});

		///////////////////////////////////

		// Click 'Confirm' button to bring up the confirm popup window
		cy.get('[value="Confirm"]').click();

		// When the confirm popup appears (window:alert) assert that the text being displayed in the confirm popup is correct
		cy.on('window:confirm', (str) => {
			// Mocha asertion
			expect(str).to.equal('Hello , Are you sure you want to confirm?');
		});

		///////////////////////////////

		// Switch Tab - Cypress does not like opening up new tabs so there is a work around - remove HTML 'target' attribute
		// Remove target attribute from html element to prevent the page being opened in a new tab
		cy.get('#opentab').invoke('removeAttr', 'target').click();

		////////

		// Assert url si correct
		cy.url().should('include', 'qaclickacademt');

		// Go back page
		cy.go('back');

	});


});