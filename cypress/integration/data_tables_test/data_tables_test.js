import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";
Given("url git", () => {
  cy.visit("https://qa-environment.koalaresorthotels.com/Account/Logon");
});
Given("datalari kullanarak sayfaya gir", (dataTable) => {
  cy.get("#UserName").type(dataTable.rawTable[1][0]);
  cy.get("#Password").type(dataTable.rawTable[1][1]);

  //dataTable da tek parametre oldugu icin [1] [0] -> manager   ve [1][1] -> Manager1!  olmali
});
Given("login butonuna tikla", () => {
  cy.get("#btnSubmit").click();
});
Given("sayfaya girildigini onayla", () => {
  cy.get(".username").should("contain.text", "manager");
  //cy.get("#menuUsers > .title").should("contain.text", "User Management");  2.yol 
});
