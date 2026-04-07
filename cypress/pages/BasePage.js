class BasePage {
  visit(path = "") {
    cy.visit(path);
  }

  getElement(selector) {
    return cy.get(selector);
  }

  click(selector) {
    this.getElement(selector).filter(":visible").first().click();
  }

  type(selector, text) {
    this.getElement(selector).filter(":visible").first().type(text);
  }
}

export default BasePage;
