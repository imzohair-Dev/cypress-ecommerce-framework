import BasePage from "./BasePage";

class RegisterPage extends BasePage {
  constructor() {
    super();
    this.firstNameInput = "#input-firstname";
    this.lastNameInput = "#input-lastname";
    this.emailInput = "#input-email";
    this.telephoneInput = "#input-telephone";
    this.passwordInput = "#input-password";
    this.passwordConfirmInput = "#input-confirm";
    this.agreeCheckbox = "label[for='input-agree']";
    this.continueButton = "input.btn-primary[value='Continue']";
  }

  visit() {
    super.visit("index.php?route=account/register");
  }

  register(user) {
    this.type(this.firstNameInput, user.firstName);
    this.type(this.lastNameInput, user.lastName);
    this.type(this.emailInput, user.email);
    this.type(this.telephoneInput, user.telephone || "1234567890");
    this.type(this.passwordInput, user.password);
    this.type(this.passwordConfirmInput, user.password);
    this.click(this.agreeCheckbox);
    this.click(this.continueButton);
  }
}

export default new RegisterPage();
