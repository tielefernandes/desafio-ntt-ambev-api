describe('Testes do endpoint login', () => {

    beforeEach(() => {
        cy.fixture('login_data').then((loginData) => {
            cy.wrap(loginData).as('loginData');
        });
    });


    it('Deve logar com sucesso (status 200)', () => {
        cy.get('@loginData').then((loginData) => {
            cy.request({
                method: 'POST',
                url: '/login',
                body: loginData.usuarioValido,
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('message', 'Login realizado com sucesso');
                expect(response.body).to.have.property('authorization')
            });
        });
    });


    it('Não deve logar com senha inválida (status 401)', () => {
        cy.get('@loginData').then((loginData) => {
            cy.request({
                method: 'POST',
                url: '/login',
                body: loginData.usuarioSenhaInvalida,
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(401);
                expect(response.body).to.have.property('message', 'Email e/ou senha inválidos');
            });
        });
    });
});