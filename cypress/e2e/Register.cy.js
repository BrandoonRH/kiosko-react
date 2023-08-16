///<reference types="cypress"/>
import Alert from '../../src/components/Alert'

describe('<Register/>', () => {
  it('<Register/> - Verificar pantalla de inicio y contenido de texto', () => {
    cy.visit('/auth/register')

    cy.get('[data-cy=titleRegister]')
      .should('exist')
      .invoke('text')
      .should('equal', 'Crea tu Cuenta'); 

    cy.get('[data-cy=paragraphRegister]')
      .should('exist')
      .invoke('text')
      .should('equal', 'Crea tu cuenta en Master Burguer llenando el formulario')
      .should('not.equal', 'Registrate') 
      
    cy.get('[data-cy=formRegister]')
      .should('exist')  
      

    cy.get('[data-cy=labelName]')
      .should('exist')    
      .invoke('text')
      .should('equal', 'Nombre:')
      .should('not.equal', 'Ingresa tu Nombre') 
    
    cy.get('[data-cy=inputName]')
      .should('exist') 
      .should('have.attr', 'type', 'text')
      .should('have.attr', 'name', 'name' )
      .should('have.attr', 'placeholder', 'Tu Nombre')
      
      
    cy.get('[data-cy=labelEmail]')
      .should('exist')  
      .invoke('text')
      .should('equal', 'Email:')
      .should('not.equal', 'Ingresa tu Email') 
      

    cy.get('[data-cy=inputEmail]')
      .should('exist') 
      .should('have.attr', 'type', 'email')
      .should('have.attr', 'name', 'email' )
      .should('have.attr', 'placeholder', 'Tu Email')

    cy.get('[data-cy=labelPassword]')
      .should('exist')  
      .invoke('text')
      .should('equal', 'Password:')
      .should('not.equal', 'Ingresa tu Password')
      

    cy.get('[data-cy=inputPassword]')
      .should('exist') 
      .should('have.attr', 'type', 'password')
      .should('have.attr', 'name', 'password' )
      .should('have.attr', 'placeholder', 'Tu Password')



    cy.get('[data-cy=labelPasswordConfirmation]') 
      .should('exist')  
      .invoke('text')
      .should('equal', 'Repite tu Password:')
      .should('not.equal', 'Ingresa tu Password Nuevamente')


    cy.get('[data-cy=inputPasswordConfirmation]')
      .should('exist')   
      .should('exist') 
      .should('have.attr', 'type', 'password')
      .should('have.attr', 'name', 'password_confirmation')

    cy.get('[data-cy=inputSubmit]')
      .should('exist')
      .should('have.attr', 'type', 'submit')
      .should('have.attr', 'value', 'Crear Cuenta')

    cy.get('[data-cy=linkLogin]')
      .should('exist')
      .should('contain', '¿Ya tienes cuenta? Inicia Sesión')
      .should('have.attr', 'href')
      .should('eq', '/auth/login')    
      .and('not.include', '#')

  });

  it('<Register/> Comprobar Eventos y Registro de Usuario no es ADMIN', () => {
    cy.visit('/auth/register'); 
    cy.get('[data-cy=inputSubmit]').click(); 

    cy.get('[data-cy=alert]').should('exist'); 

    //Llenado del Formulario 
    cy.get('[data-cy=inputName]').type('Nahomy Ramírez'); 
    cy.get('[data-cy=inputSubmit]').click(); 
    cy.get('[data-cy=alert]').should('exist'); 

    cy.get('[data-cy=inputEmail]').type('usuario@usuario.com');
    cy.get('[data-cy=inputSubmit]').click(); 
    cy.get('[data-cy=alert]').should('exist'); 

    cy.get('[data-cy=inputPassword]').type('123');  
    cy.get('[data-cy=inputPasswordConfirmation]').type('123');  
    cy.get('[data-cy=inputSubmit]').click(); 
    cy.get('[data-cy=alert]').should('exist'); 


  
    cy.get('[data-cy=formRegister]').within(() => {
      cy.get('[data-cy=inputName]').type('Nahomy Ramírez'); 
      cy.get('[data-cy=inputEmail]').type('usuario@usuario.com');
      cy.get('[data-cy=inputPassword]').type('admin1234*');  
      cy.get('[data-cy=inputPasswordConfirmation]').type('admin1234*');  
      cy.root().submit();
    });
    cy.get('[data-cy=textSpiner]').should('exist'); 
    cy.get('[data-cy=spinner]').should('exist'); 

    // Wait for intercepted HTTP request
    cy.intercept('POST', '/api/register').as('loginUser')
    cy.wait('@loginUser').then(({ request, response }) => {
      expect(response.statusCode).to.eq(200)
    })
    cy.wait(12000);
    cy.get('[data-cy=nameUserHome]').should('exist'); 
    cy.get('[data-cy=buttonCancelOrden]')
        .should('exist')
        .should('have.attr', 'type', 'button')
        .click();
   
  });

})