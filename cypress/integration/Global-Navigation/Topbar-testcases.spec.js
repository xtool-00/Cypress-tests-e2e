/// <reference types= "Cypress"/>

describe("Topbar tests",()=>{

it("Verify the name of the app is displayed",()=>{
    cy.viewport(1224,760);
    cy.visit('http://localhost:4200');
    cy.get('.navbar-start>span').contains('My Fleets');
  
})

it("Verify the links are displayed",()=>{
    cy.viewport(1224,760);
    cy.visit('http://localhost:4200');
    

})

})
