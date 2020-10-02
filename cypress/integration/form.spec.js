describe("Form test", () => {
  it("Can fill the form", () =>{
    //basta estar na tela para que o teste passe
    cy.visit("/");
    cy.get("form");


    cy.get('input[name="name"]')
      .type("Molly")
      .should("have.value", "Molly");

    //Verificando entrada do email
    cy.get('input[name="email"]')
      .type("molly@dev.dev")
      .should("have.value", "molly@dev.dev");

          //Verificando entrada de texto
    cy.get("textarea")
      .type("Mind you if I ask some silly question?")
      .should("have.value", "Mind you if I ask some silly question?");

    cy.server();
    cy.route({
      url: "/users/**",
      method: "POST",
      response: { status: "Saved", code: 201 }
    });

    //testando envio do formulario
    cy.get("form").submit();

    cy.contains("Form saved!");

  });
});