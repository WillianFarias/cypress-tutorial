describe("Form test", () => {
  it("Can fill the form", () =>{
    //basta estar na tela para que o teste passe
    cy.visit("/");
    cy.get("form");


    cy.get('input[name="name"]')
      .type("Molly")
      .should("have.value", "Molly");
  });
});