import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";
Given("url git", () => {
  cy.visit("https://www.paylinn.com/");
});
Given("login tikla", () => {
  cy.get('[href="/login"] > .header__option > .header__lineTwo').click();
});
Given("username ve password gir", () => {
  cy.get(
    ":nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
  ).type("User");

  cy.get(
    ":nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
  ).type("user");
});
Given("login butonuna tikla", () => {
  cy.get(".MuiButton-label").click();
});
Given("giris yapildigini onayla", () => {
  cy.get(".header__nav").should("contain.text", "Welcome");
});
