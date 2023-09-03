import express from 'express';

const router = express.Router();
const DEFAULT_TITLE = 'Energieberatung, Energieausweis, iSFP | Ihr Energieberater aus Detmold | Karsten Diekmann';
const DEFAULT_DESCRIPTION = 'Verbessern Sie die Energieeffizienz Ihrer Immobilie mit den Experten-Services: Energieberatung, Energieausweis und individuelle iSFP-Empfehlungen. EEE. Diekmann - Ihr Energieberater aus Detmold.'

router.get('/', (req, res) => {
    res.render('home', {
        title: DEFAULT_TITLE,
        description: 'Verbessern Sie die Energieeffizienz Ihrer Immobilie mit den Experten-Services: Energieberatung, Energieausweis und individuelle iSFP-Empfehlungen. EEE. Diekmann - Ihr Energieberater aus Detmold.'
    });
});

router.get('/about', (req, res) => {
    res.render('about', {
        title: `Über mich | Karsten Diekmann | Energieberater aus Detmold`,
        description: 'Erfahren Sie mehr über mich und meine Qualifikationen als Energieberater. Ich bin Ihr Ansprechpartner für Energieberatung, Energieausweis und iSFP-Empfehlungen in Detmold und Umgebung.'
    });
});

router.get('/kontakt', (req, res) => {
    res.render('contact', {
        title: `Kontakt | Karsten Diekmann | Energieberater aus Detmold`,
        description: 'Kontaktieren Sie mich für eine Energieberatung, einen Energieausweis oder iSFP-Empfehlungen. Buchen Sie jetzt Ihren Termin für eine Energieberatung Deutschlandweit oder in Detmold und Umgebung.'
    });
});

router.get('/dienstleistungen/energieausweis', (req, res) => {
    res.render('energieausweis', {
        title: 'Energieausweis | Karsten Diekmann | Energieberater aus Detmold',
        description: 'Im Rahmen des Individuellen Sanierungsfahrplans (iSFP) können Sie vom Energieausweis besonders profitieren. Sie unsere Energieausweis-Dienstleistungen und erhalten Sie wertvolle Einblicke in die Energieeffizienz Ihrer Immobilie.'
    });
});

router.get('/dienstleistungen/energieberatung', (req, res) => {
    res.render('energieberatung', {
        title: 'Energieberatung | Karsten Diekmann | Energieberater aus Detmold',
        description: 'Professionelle Energieberatung in Detmold. Optimieren Sie Ihre Energieeffizienz und senken Sie Kosten. Erfahren Sie mehr über unsere maßgeschneiderten Lösungen und transparenten Energieberatung Kosten.'
    });
});

router.get('/impressum', (req, res) => {
    res.render('imprint', {
        title: 'Impressum | Karsten Diekmann | Energieberater aus Detmold',
        description: DEFAULT_DESCRIPTION,
    });
});

router.get('/dienstleistungen/isfp', (req, res) => {
    res.render('isfp', {
        title: 'iSFP | Karsten Diekmann | Energieberater aus Detmold',
        description: 'Individueller Sanierungsfahrplan (iSFP) für Detmold und Umgebung. Planen Sie gezielte Energiesanierung mit maßgeschneiderten Maßnahmen. Erfahren Sie mehr über unseren iSFP-Service und wie er Ihnen hilft, Ihre Immobilie effizient zu modernisieren.'
    });
});

router.get('/danke', (req, res) => {
    res.render('thanks', {
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
    });
});

router.get ('/sitemap.xml', function(req, res) {
    res.sendFile('sitemap.xml', {root: './public'});
})

router.get('/quelleangaben', function(req, res){
    res.render('source', {
        title: 'Quellenangaben | EEE. Karsten Diekmann',
        description: DEFAULT_DESCRIPTION,
    });
});

router.get('/datenschutz', function(req, res){
    res.sendFile('Datenschutzerklaerung_Diekmann_Energieberatung.pdf', {root: './src/public/pdf'});
});

export default router;
