///<reference types="cypress"/>


describe('<Login/>', () => {

  it('<Login/> - Verificar pantalla de inicio y contenido de texto', () => {
    cy.visit('/auth/login'); 

    //Revisar que el Formulario Exista
    cy.get('[data-cy=formLogin]')
      .should('exist')

    cy.get('[data-cy=title]')
      .should('exist')
      .invoke('text')
      .should('equal', 'Iniciar Sesión'); 

    cy.get('[data-cy=paragraphLogin]')
      .should('exist')
      .invoke('text')
      .should('equal', 'Para realizar un pedido, Inicia Sesión'); 

    cy.get('[data-cy=labelEmail]')
      .should('exist')
      .invoke('text')
      .should('equal', 'Email:'); 

    cy.get('[data-cy=labelPassword]')
      .should('exist')
      .invoke('text')
      .should('equal', 'Password:'); 

    cy.get('[data-cy=inputSubmitSession]')
      .should('exist')
      .should('have.attr', 'value', 'Iniciar Sesión');   

    cy.get('[data-cy=linkRegister]')
      .should('exist')
      .invoke('text')
      .should('equal', '¿Aún no tienes cuenta? Registrate');   

  }); 

  it('<Login/> Comprobar Inputs', () => {
    cy.visit('/auth/login'); 
    cy.get('[data-cy=inputEmail]')
       .should('exist')
       .should('exist')
       .should('have.attr', 'type', 'email')
    
    cy.get('[data-cy=inputPassword]')
       .should('exist')
       .should('have.attr', 'type', 'password')   

    cy.get('[data-cy=inputSubmitSession]')
       .should('have.attr', 'type', 'submit')

    cy.get('[data-cy=linkRegister]')
       .should('exist')
       .should('contain', '¿Aún no tienes cuenta? Registrate')
       .should('have.attr', 'href')
       .should('eq', '/auth/register')    
       .and('not.include', '#')
  });

  
  it('<Login/> Comprobar Eventos ', () => {
    cy.visit('/auth/login'); 
    cy.get('[data-cy=inputSubmitSession]').click(); 
    cy.get('[data-cy=alert]').should('exist'); 

    cy.get('[data-cy=formLogin]').within(() => {
      cy.get('[data-cy=inputEmail]').type('usu@usuario.com');
      cy.get('[data-cy=inputPassword]').type('admin1234*');  
      cy.root().submit();
    });
    cy.get('[data-cy=alert]').should('exist').invoke('text').should('equal', 'Esa Cuenta no Existe'); 

    cy.get('[data-cy=formLogin]').within(() => {
      cy.get('[data-cy=inputPassword]').type('admin1234*');  
      cy.root().submit();
    });
    cy.get('[data-cy=alert]').should('exist').invoke('text').should('equal', 'El Email es Obligatorio'); 

    cy.get('[data-cy=formLogin]').within(() => {
      cy.get('[data-cy=inputEmail]').type('admin@admin.com');
      cy.root().submit();
    });
    cy.get('[data-cy=alert]').should('exist').invoke('text').should('equal', 'El password es Obligatorio'); 

    cy.get('[data-cy=formLogin]').within(() => {
      cy.get('[data-cy=inputEmail]').type('admin@admin.com');
      cy.get('[data-cy=inputPassword]').type('admin123*');  
      cy.root().submit();
    });
    cy.get('[data-cy=textSpiner]').should('exist'); 
    cy.get('[data-cy=spinner]').should('exist'); 

    cy.intercept('POST', '/api/login').as('loginUser')
    cy.wait('@loginUser').then(({ request, response }) => {
      expect(response.statusCode).to.eq(200)
    })

  });



})