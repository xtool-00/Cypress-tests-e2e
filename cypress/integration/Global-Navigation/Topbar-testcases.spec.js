/// <reference types= "Cypress"/>

describe("Topbar tests",()=>{

it("Verify the name of the app is displayed",()=>{
  cy.visit('');
  cy.get('.navbar-start>span').contains('My Fleets');
  
})

it("Verify the links are displayed",()=>{
 cy.visit('');
 cy.get('a.navbar-item.is-link:nth-of-type(1)').should('contain','Dashboard');
 cy.get('a.navbar-item.is-link:nth-of-type(2)').should('contain','Resources');
 cy.get('a.navbar-item.is-link:nth-of-type(3)').should('contain','People');
 cy.get('a.navbar-item.is-link:nth-of-type(4)').should('contain','Places');
 cy.get('a.navbar-item.is-link:nth-of-type(5)').should('contain','Groups');

 cy.get('#notificationBtn');
 cy.get('#helpBtn');
 })

 it ("Verify Links are clickable and user is directed to the expected Url",()=>{
    cy.visit('');
    cy.get('a.navbar-item.is-link:nth-of-type(1)').click().url().should('include','/dashboard');
    cy.get('a.navbar-item.is-link:nth-of-type(2)').click().url().should('include','/resources');
    cy.get('a.navbar-item.is-link:nth-of-type(3)').click().url().should('include','/people');
    cy.get('a.navbar-item.is-link:nth-of-type(4)').click().url().should('include','/places');
    cy.get('a.navbar-item.is-link:nth-of-type(5)').click().url().should('include','/groups');
    cy.get('#notificationBtn').click();
    cy.get('#helpBtn').click();
 })
})
