/// <reference types="Cypress" />

describe('My First Test Suite', function() {
	
	it('My Thrird Test Case - Form Controls', function() {

		Cypress.config('pageLoadTimeout', 16000);
		// Navigate to https://rahulshettyacademy.com/AutomationPractice/ website
		cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

		/////////////////////////////

		// Checkboxes

		// Click checkbox 1. Then assert that checkbox is checked and the checkbox text should say 'option1 
		cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');

		// Uncheck checkbox 1 and then assert that checkbox is unchecked
		cy.get('#checkBoxOption1').uncheck().should('not.be.checked');

		// get all three checkboxs then make checkbox 2 and 3 checked/ticked
		cy.get('input[type="checkbox"]').check(['option2', 'option3'])

		/////////////////////////////

		// static Dropdown

		// Get static Dropdown option 2
		cy.get('select').select('option2').should('have.value', 'option2');

		/////////////////////////////

		// Dynamic suggestion dropdown

		// Get Dynamic suggestion dropdown menus
		// type 'ind' into input box
		cy.get('#autocomplete').type('ind')

		// loop through each of the suggestions i.e. there are 3 suggestions
		cy.get('.ul-menu-item div').each(($el, index, $list) => {
			if ($el.text() === "India") {
				$el.click();
			}
		})

		// assert that value in dynamic dropdown is now 'India'
		cy.get('#autocomplete').should('have.value', 'India');


		/////////////////////////////

		// Invisible Elements

		// invisible elements - assert that input box is visible
		cy.get('#displayed-text').should('be.visible')

		// click hide button
		cy.get('#hide-textbox').click();

		// assert that input box is now not visible
		cy.get('#displayed-text').should('not.be.visible')

		// click show button
		cy.get('#show-textbox').click();

		// assert that input box is now visible
		cy.get('#displayed-text').should('be.visible')

		/////////////////////////////

		// Radio Buttons

		// Select/check radion button 2 and then assert that radio button 2 is checked/selected
		cy.get('[value="radio2"]').check().should('be.checked');

	});


});