describe("API Interception & Request Validation", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should intercept the search suggestion API call", () => {
    cy.intercept("GET", /.*route=extension\/maza\/product\/product\/autocomplete.*/).as("searchSuggestions");
    cy.get("#search input[name='search']").first().type("iPhone", { delay: 100 });
    cy.wait("@searchSuggestions").then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
      expect(interception.request.url).to.include("filter_name=iPhone");
    });
  });

  it("should validate the cart summary API response", () => {
    cy.intercept("POST", /.*route=checkout\/cart\/add.*/).as("addToCart");
    cy.get(".product-thumb").first().find("button.btn-cart").click({ force: true });
    cy.wait("@addToCart").then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
      expect(interception.response.body).to.have.property("success");
    });
  });
});
