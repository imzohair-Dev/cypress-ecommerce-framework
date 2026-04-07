import CheckoutPage from "../../pages/CheckoutPage";
import ProductPage from "../../pages/ProductPage";

describe("Checkout Process (E2E)", () => {
  const user = {
    email: `test_user_${Date.now()}@mailinator.com`,
    firstName: "Test",
    lastName: "User",
    telephone: "1234567890",
    street: "123 Test St",
    city: "Los Angeles",
    region: "California",
    postcode: "90001",
    country: "United States",
  };

  it("should complete a full checkout as a guest", () => {
    cy.visit("index.php?route=product/product&product_id=78");
    cy.wait(1000);
    ProductPage.addToCart();
    cy.wait(2000);
    cy.get(".form-row > :nth-child(2) > .btn").click({ force: true });
    CheckoutPage.fillShippingAddress(user);
    CheckoutPage.proceedToPayment();
    cy.get("#button-confirm", { timeout: 10000 }).should("be.visible").click();
    CheckoutPage.getOrderSuccessMessage()
      .should("be.visible")
      .and("contain", "Your order has been placed!");
  });
});
