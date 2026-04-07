import BasePage from "./BasePage";

class CheckoutPage extends BasePage {
  constructor() {
    super();
    this.guestCheckoutRadio = "label[for='input-account-guest']";
    this.firstNameInput = "#input-payment-firstname";
    this.lastNameInput = "#input-payment-lastname";
    this.emailInput = "#input-payment-email";
    this.telephoneInput = "#input-payment-telephone";
    this.address1Input = "#input-payment-address-1";
    this.cityInput = "#input-payment-city";
    this.postcodeInput = "#input-payment-postcode";
    this.countrySelect = "#input-payment-country";
    this.regionSelect = "#input-payment-zone";
    this.agreeCheckbox = "label[for='input-agree']";
    this.continueButton = "#button-save";
    this.confirmOrderButton = "#button-confirm";
    this.orderSuccessHeader = "#common-success h1";
  }

  fillShippingAddress(data) {
    this.click(this.guestCheckoutRadio);
    cy.get(this.firstNameInput, { timeout: 10000 }).filter(":visible").first().type(data.firstName);
    cy.get(this.lastNameInput).filter(":visible").first().type(data.lastName);
    cy.get(this.emailInput).filter(":visible").first().type(data.email);
    cy.get(this.telephoneInput).filter(":visible").first().type(data.telephone);
    cy.get(this.address1Input).filter(":visible").first().type(data.street);
    cy.intercept("POST", /.*route=extension\/maza\/checkout\/address\/update.*/).as("addressUpdate");
    cy.get(this.countrySelect).filter(":visible").first().select(data.country);
    cy.get(this.regionSelect, { timeout: 10000 }).filter(":visible").first().should("not.be.disabled").select(data.region);
    cy.wait("@addressUpdate");
    cy.get(this.cityInput, { timeout: 10000 }).scrollIntoView().type(data.city, { force: true });
    cy.get(this.postcodeInput).scrollIntoView().type(data.postcode, { force: true });
    this.click(this.agreeCheckbox);
  }

  proceedToPayment() {
    this.click(this.continueButton);
  }

  placeOrder() {
    this.click(this.confirmOrderButton);
  }

  getOrderSuccessMessage() {
    return this.getElement(this.orderSuccessHeader);
  }
}

export default new CheckoutPage();
