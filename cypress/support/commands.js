import LoginPage from "../pages/LoginPage";

Cypress.Commands.add("login", (email, password) => {
  LoginPage.visit();
  LoginPage.login(email, password);
});

Cypress.Commands.add("searchProduct", (productName) => {
  cy.get("#search").type(`${productName}{enter}`);
});

Cypress.Commands.add("addToCart", (productName) => {
  cy.searchProduct(productName);
  cy.get(".product-item-info").first().click();
  cy.get(".swatch-option.text").first().click();
  cy.get(".swatch-option.color").first().click();
  cy.get(".action.tocart.primary").click();
  cy.get(".message-success").should("be.visible");
});
