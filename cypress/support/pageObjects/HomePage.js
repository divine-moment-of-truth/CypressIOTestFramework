class HomePage {

	getEditBox() {
		return cy.get('input[name="name"]:nth-child(2)');
	}

	getTwoWayDataBindiningBox() {
		return cy.get(':nth-child(4) > .ng-untouched');
	}

	getGender() {
		return cy.get('select');
	}

	getEntrepreneaurRadioButtons() {
		return cy.get('#inlineRadio3');
	}

	getShopTab() {
		return cy.get(':nth-child(2) > .nav-link');
	}


}

export default HomePage;