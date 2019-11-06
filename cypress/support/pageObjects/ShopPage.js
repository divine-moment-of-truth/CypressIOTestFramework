class ShopPage {

	getAllPhoneTypes() {
		return cy.get('h4.card-title');
	}

	getPhoneAddButton() {
		return cy.get('button.btn.btn-info');
	}

	getCheckoutButton() {
		return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link');
	}

}

export default ShopPage;