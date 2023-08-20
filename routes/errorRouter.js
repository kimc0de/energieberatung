import express from 'express';

const errorRouter = express.Router();

//The 404 Route (ALWAYS Keep this as the last route)
errorRouter.get('*', function(req, res){
    res.status(404).render('error', {
        title: 'Error | EEE. Karsten Diekmann',
    });
});

export default errorRouter;
