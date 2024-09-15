const assert = require('assert');
const request = require('supertest');
const app = require('../app');  // Importe l'application Express

describe('GET /api/messages', function () {
    let server;

    // Démarre le serveur avant chaque test
    beforeEach((done) => {
        server = app.listen(4000, done);  // Démarre le serveur sur le port 4000
    });

    // Arrête le serveur après chaque test
    afterEach((done) => {
        server.close(done);  // Ferme le serveur après le test
    });

    it('devrait retourner un tableau de messages', function (done) {
        request(server)
            .get('/api/messages')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                assert.strictEqual(Array.isArray(res.body), true);
                done();
            });
    });
});
