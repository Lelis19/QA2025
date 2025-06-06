/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("que eu acesso o site de Transparência do RN", () => {
    cy.visit('http://www.transparencia.rn.gov.br/')
})

When('clico no icone da aba de navegação', () => {
  cy.get('button[aria-label="Navbar"]').click();
});

And("preencho o campo de busca com pesquisa válida", (termo) => {
  cy.get('#q').type("educação");
});

And("clico no botão de busca", () => {
    cy.get('#button-addon3 > .fa-solid').click()
})

Then("devo ver resultado relacionado à pesquisa válida", () => {
  cy.get('#content.container-fluid.container').within(() => {
    cy.get('li').should('have.length.greaterThan', 2);
  });
});


And("preencho o campo de busca com pesquisa inválida", (termo) => {
  cy.get('#q').type("adsdsada");
});

Then("devo ver resultado relacionado à pesquisa inválida", () => {
  cy.get('#content.container-fluid.container').within(() => {
    cy.get('li').should('have.length', 2);
  });
});

Then("devo ver mensagem de campo obrigatório", () => {
  cy.get('#q').should('have.prop', 'validationMessage').and('not.be.empty');
});