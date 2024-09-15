import { expect } from 'chai';  // Import direct de expect depuis Chai
import request from 'supertest';
import app from '../app.js';  // Assurez-vous que votre app.js exporte correctement

describe('GET /api/messages', function () {
    let server;

    // Démarre le serveur avant chaque test
    beforeEach((done) => {
        server = app.listen(4000, done);  // Démarre le serveur
    });

    // Arrête le serveur après chaque test
    afterEach((done) => {
        server.close(done);  // Ferme le serveur
    });

    it('devrait retourner un tableau de messages', function (done) {
        request(server)
            .get('/api/messages')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                
                // Utiliser Chai pour les assertions
                expect(res.body).to.be.an('array');
                expect(res.body).to.have.lengthOf(2);
                done();
            });
    });
});
