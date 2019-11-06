class DeliveryPage {
	
	getCountryBox() {
		return cy.get('#country');
	}

	getCountrySuggestion() {
		return cy.get('.suggestions > ul > li > a');
	}

	getAgreeCheckbox() {
		return cy.get('#checkbox2');
	}

	getPurchaseButton() {
		return cy.get('input[type="submit"]');
	}

	getSuccessText() {
		return cy.get('.alert');
	}
}

export default DeliveryPage;