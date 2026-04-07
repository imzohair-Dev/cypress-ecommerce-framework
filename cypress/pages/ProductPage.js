import BasePage from "./BasePage";

class ProductPage extends BasePage {
  constructor() {
    super();
    this.searchInput = "#search input[name='search']";
    this.searchButton = "button.type-text";
    this.productItem = ".product-thumb";
    this.productLink = ".product-thumb .caption a";
    this.addToCartButton = "#entry_216842 button.btn-cart";
    this.successMessage = ".alert-success";
  }

  search(productName) {
    this.type(this.searchInput, productName);
    this.click(this.searchButton);
  }

  selectProduct(index = 0) {
    this.getElement(this.productLink).eq(index).click();
  }

  addToCart() {
    cy.get(this.addToCartButton).filter(":visible").first().invoke("removeAttr", "disabled").click({ force: true });
  }

  addToCartThumbnail(index = 0) {
    this.getElement(this.productItem).eq(index).find("button.btn-cart").click({ force: true });
  }

  getSuccessMessage() {
    return this.getElement(this.successMessage);
  }
}

export default new ProductPage();
