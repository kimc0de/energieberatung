import express from 'express';
import httpStatus from 'http-status-codes';

const errorRouter = express.Router();

//The 404 Route (ALWAYS Keep this as the last route)
errorRouter.get('*', function(req, res){
    let errorCode = httpStatus.NOT_FOUND;
    let errorMessage = "Wir entschuldigen uns! Die Seite, auf die Sie zugreifen wollten, konnte nicht gefunden werden."
    res.status(errorCode);
    res.render('error', {
        errorCode: errorCode,
        errorMessage: errorMessage,
        title: 'Error | EEE. Karsten Diekmann',
        description: 'Wir entschuldigen uns! Die Seite, auf die Sie zugreifen wollten, konnte nicht gefunden werden.'
    });
});

export default errorRouter;
