import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";

describe("User Authentication & Registration", () => {
  const user = {
    firstName: "Cypress",
    lastName: "User",
    email: `test_user_${Date.now()}@mailinator.com`,
    telephone: "1234567890",
    password: "Password123!",
  };

  it("should successfully register a new user", () => {
    RegisterPage.visit();
    RegisterPage.register(user);
    cy.url().should("include", "route=account/success");
    cy.get("h1.page-title").should("contain", "Your Account Has Been Created!");
  });

  it("should fail to login with invalid credentials", () => {
    LoginPage.visit();
    LoginPage.login("invalid@email.com", "wrongpassword");
    LoginPage.getErrorMessage()
      .should("be.visible")
      .invoke("text")
      .should("match", /Warning: (No match for E-Mail Address and\/or Password|Your account has exceeded allowed number of login attempts)/i);
  });
});
