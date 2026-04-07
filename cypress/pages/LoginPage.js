import BasePage from "./BasePage";

class LoginPage extends BasePage {
  constructor() {
    super();
    this.emailInput = "#input-email";
    this.passwordInput = "#input-password";
    this.signInButton = "input.btn-primary[value='Login']";
    this.errorMessage = ".alert-danger";
  }

  visit() {
    super.visit("index.php?route=account/login");
  }

  login(email, password) {
    this.type(this.emailInput, email);
    this.type(this.passwordInput, password);
    this.click(this.signInButton);
  }

  getErrorMessage() {
    return this.getElement(this.errorMessage);
  }
}

export default new LoginPage();
