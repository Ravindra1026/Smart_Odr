class LoginPage 
{
    getEmail()
    {
       return cy.get('#email')
    }    
    getPassword()
    {
       return cy.get('#password')
    }
    getLoginButton()
    {
        return cy.get('button[type="submit"]')
    }


}

export default LoginPage;