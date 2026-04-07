import BasePage from "./BasePage";

class CartPage extends BasePage {
  constructor() {
    super();
    this.cartIcon = "a.cart";
    this.checkoutButton = "a.btn-primary[href*='route=checkout/checkout']";
    this.cartTable = ".table-responsive";
    this.removeProductButton = "button.btn-danger";
    this.cartEmptyMessage = "#content p";
  }

  visit() {
    super.visit("index.php?route=checkout/cart");
  }

  proceedToCheckout() {
    this.getElement(this.cartIcon).click();
    this.getElement(this.checkoutButton).click();
  }

  removeFirstProduct() {
    this.getElement(this.removeProductButton).first().click();
  }

  getEmptyMessage() {
    return this.getElement(this.cartEmptyMessage);
  }
}

export default new CartPage();
