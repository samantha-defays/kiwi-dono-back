import { expect } from 'chai';
import request from 'supertest';
import app from '../app.js';

describe('GET /api/messages', function () {
    let server;

    beforeEach((done) => {
        server = app.listen(4000, done);
    });

    afterEach((done) => {
        server.close(done);
    });

    it('devrait retourner un tableau de messages', function (done) {
        request(server)
            .get('/api/messages')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                
                expect(res.body).to.be.an('array');
                expect(res.body).to.have.lengthOf(2);
                done();
            });
    });
});
