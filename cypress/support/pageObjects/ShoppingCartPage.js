class ShoppingCartPage {

	getCheckoutButton() {
		return cy.contains('Checkout');
	}

	getSubtotals() {
		return cy.get('tr td:nth-child(4) strong');
	}

	getTotal() {
		return cy.get('h3 strong');
	}

}

export default ShoppingCartPage;