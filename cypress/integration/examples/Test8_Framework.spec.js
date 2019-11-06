/// <reference types="Cypress" />

import HomePage from '../../support/pageObjects/HomePage';
import ShopPage from '../../support/pageObjects/ShopPage';
import ShoppingCartPage from '../../support/pageObjects/ShoppingCartPage';
import DeliveryPage from '../../support/pageObjects/DeliveryPage';

describe('My Test Suite Framework', function() {

	// runs once before all tests in the block
	before(function() {
		cy.fixture('data_file_user').then(function(data) {
			this.data=data
		});
	});

	it('My First Test', function() {
		Cypress.config('pageLoadTimeout', 8000);

		const homePage = new HomePage();
		const shopPage = new ShopPage();
		const shoppingCartPage = new ShoppingCartPage();
		const deliveryPage = new DeliveryPage();

		// Navigate to AngularPractice Web site
		cy.visit(Cypress.env('url') + '/angularpractice/');

		cy.get('input[name="name"]:nth-child(2)').type(this.data.name);

		// Set the gender from the drop down list
		homePage.getGender().select(this.data.gender);

		// Assert that two way binding input box is equal to the value entered in the Name input box
		homePage.getTwoWayDataBindiningBox().should('have.value', this.data.name);

		// Assert that Name input box entered name has a length of 2 or greater
		homePage.getEditBox().should('have.attr', 'minLength', '2');

		// Assert that radio buttons are in disabled mode
		homePage.getEntrepreneaurRadioButtons().should('be.disabled');

		// Navigate to Shop Page by clicking 'Shop' button in navigation bar
		homePage.getShopTab().click();

		// Loop through each phone type. Click the 'Add' button for the 'Blackberry' phone
		/* shopPage.getAllPhoneTypes().each(($el, index, $list) => {
			if ($el.text().includes('Blackberry')) {
				shopPage.getPhoneAddButton().eq(index).click();
			}
		}) */

		// Use the 'support/commands' command function to add a single phone to shopping kart - This loops through each phone type. Click the 'Add' button for the 'Blackberry' phone
		// cy.selectProduct('Blackberry');

		// Loop through list of phones (product names in the 'fixtures/ data_file_user.json data file and add them to shopping kart) 
		this.data.productName.forEach(function(element) {
			cy.selectProduct(element);
		})

		// Click Checkout button
		shopPage.getCheckoutButton().click();

		var addedUpTotal = 0;

		// Validate that subt total of each phone adds up to total displayed on page
		shoppingCartPage.getSubtotals().each(($el, index, $list) => {
			const actualText = $el.text();
			var subTotal = actualText.split(" ");
			subTotal = subTotal[1].trim();
			addedUpTotal = Number(addedUpTotal) + Number(subTotal);

		}).then(function() {
			cy.log(addedUpTotal);
		});

		// Get total from shopping cart page
		shoppingCartPage.getTotal().then(function(element) {
			const totalAmount = element.text()
			var result = totalAmount.split(" ");
			var totalPrice = result[1].trim();

			// Assert that two total equal each other
			expect(Number(totalPrice)).to.equal(addedUpTotal)
		});

		// When Shopping cart page opens click the 'Checkout' button
		shoppingCartPage.getCheckoutButton().click();

		// When Delivery Page opens click on the Country input box and type 'India'
		deliveryPage.getCountryBox().type('India');

		// When country suggestion drop down appears select the suggested country
		deliveryPage.getCountrySuggestion().click();

		// Check the Agree checkbox
		deliveryPage.getAgreeCheckbox().click({force: true});

		// Click the 'Purchase' button
		deliveryPage.getPurchaseButton().click();

		// Assert that Success text is displayed on page
		deliveryPage.getSuccessText().then(function(element) {
			const actualText = element.text();
			expect(actualText.includes('Success')).to.be.true;
		})



	});
});