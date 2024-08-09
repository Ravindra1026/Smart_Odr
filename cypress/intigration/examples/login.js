import LoginPage from './pageObjects/loginPage'

describe('SmartOdr', function () {

    before(() => {

        cy.viewport(1920, 1080);
        cy.fixture('example').then(function (data) {

            this.data = data
        })

    })

    it('Login Test', function () {
        const loginPage = new LoginPage()
        cy.visit('https://dev.smartodr.in/login');
        loginPage.getEmail().type('ravindra1026@mailinator.com');
        cy.wait(2000);
        loginPage.getPassword().type('Test@12345');
        cy.wait(2000);
        loginPage.getLoginButton().click();






    })

})