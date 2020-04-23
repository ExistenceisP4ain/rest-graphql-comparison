import express from 'express';
import data from './store';
import cors from 'cors';

const app = express(); // instanciranje aplikacije
const port = 3200; // port na kojem će web server slušati

app.use(cors());
app.use(express.json());

// users
app.get('/korisnici', (req, res) => res.json(data.users));
app.get('/korisnici/:id', (req, res) => res.json(data.one_user));
app.post('/korisnici', (req, res) => {
    res.statusCode = 201;
    res.setHeader('Location', '/korisnici/1234');
    res.send();
});

// oglasi
app.get('/oglasi', (req, res) => res.json(data.oglasi));

// oglas
app.get('/oglasi/:naslov/:oglas', (req, res) => res.json(data.pretragaOglasa));
app.get('/oglasi/istekli/:oglas', (req, res) => res.json(data.istekliOglas));

// unos oglasa
app.put('/oglasi/:oglas', (req, res) => {
    let data = req.body;

    if (!data.oglasid) {
        res.statusCode = 400;
        return res.json({
            error: 'There are parameters missing.',
        });
    }

    res.statusCode = 201;
    res.setHeader('Location', '/oglasi/posao-u-infobipu/003512341234');
    res.send();
});

app.listen(port, () => console.log(`Slušam na portu ${port}!`));
