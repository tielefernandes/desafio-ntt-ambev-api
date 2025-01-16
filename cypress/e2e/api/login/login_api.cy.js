describe('Testes do endpoint login', () => {

    it('Deve logar com sucesso (status 200)', () => {
        cy.request({
            method: 'POST',
            url: '/login',
            body: {
                email: 'tielefernandes@gmail.com',
                password: 'Senha@123'
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('message', 'Login realizado com sucesso');
            expect(response.body).to.have.property('authorization')
        })
    });


    it('Não deve logar com senha inválida (status 401)', () => {
        cy.request({
            method: 'POST',
            url: '/login',
            body: {
                email: 'fulano@qa.com',
                password: 'senha_errada'
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(401);
            expect(response.body).to.have.property('message', 'Email e/ou senha inválidos'); 
        });
    });
});