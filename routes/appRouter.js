import express from 'express';

const router = express.Router();
const DEFAULT_TITLE = 'Energieberatung, Energieausweis, iSFP | EEE. Karsten Diekmann';

router.get('/', (req, res) => {
    res.render('home', {
        title: DEFAULT_TITLE,
    });
});

router.get('/about', (req, res) => {
    res.render('about', {
        title: `${DEFAULT_TITLE} | Über mich`,
    });
});

router.get('/kontakt', (req, res) => {
    res.render('contact', {
        title: `Kontakt | ${DEFAULT_TITLE}`,
    });
});

router.get('/datenschutz', (req, res) => {
    res.render('privacy', {
        title: `Datenschutz | ${DEFAULT_TITLE}`,
    });
});

router.get('/dienstleistungen/energieausweis', (req, res) => {
    res.render('energieausweis', {
        title: 'Energieausweis | EEE. Karsten Diekmann',
    });
});

router.get('/dienstleistungen/energieberatung', (req, res) => {
    res.render('energieberatung', {
        title: 'Energieberatung | EEE. Karsten Diekmann',
    });
});

router.get('/impressum', (req, res) => {
    res.render('imprint', {
        title: 'Impressum | EEE. Karsten Diekmann',
    });
});

router.get('/dienstleistungen/isfp', (req, res) => {
    res.render('isfp', {
        title: 'iSFP | EEE. Karsten Diekmann',
    });
});

router.get('/danke', (req, res) => {
    res.render('thanks', {
        title: DEFAULT_TITLE,
    });
});

export default router;
