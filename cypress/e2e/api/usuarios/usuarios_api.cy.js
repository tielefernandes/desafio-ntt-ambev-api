describe('Testes do endpoint usuário by id', () => {
    let usuarioId; // Variável para armazenar o ID do usuário criado

    before(() => {

        cy.request({
            method: 'POST',
            url: '/usuarios',
            body: {
                nome: `UsuarioTeste${Date.now()}`,
                email: `teste${Date.now()}@qa.com`, 
                password: 'teste',
                administrador: 'true'
            }
        }).then((response) => {
            usuarioId = response.body._id; // Salva o ID do usuário criado
            cy.wrap(usuarioId).as('usuarioId')
        });
    });

    after(function() {
        // Deleta o usuário criado para o teste
        cy.request({
            method: 'DELETE',
            url: `/usuarios/${this.usuarioId}`
        });
    });

    it('Deve retornar um usuário específico (GET)', function() {
        cy.request('GET', `/usuarios/${this.usuarioId}`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('nome');
            expect(response.body).to.have.property('email');
            expect(response.body).to.have.property('_id', this.usuarioId);
        });
    });
})