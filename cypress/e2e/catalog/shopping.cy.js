import ProductPage from "../../pages/ProductPage";

describe("Shopping & Catalog", () => {
  const searchTerm = "iPhone";

  beforeEach(() => {
    cy.visit("/");
  });

  it("should search for a product and filter results", () => {
    ProductPage.search(searchTerm);
    cy.get("h1.h4").should("contain", "Search - " + searchTerm);
    cy.get(".product-thumb .caption a").first().should("contain", searchTerm);
  });

  it("should add a product to the cart from the product page", () => {
    ProductPage.search(searchTerm);
    ProductPage.selectProduct(2);
    ProductPage.addToCart();
  });
});
