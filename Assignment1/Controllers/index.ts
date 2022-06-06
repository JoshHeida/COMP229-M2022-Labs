import express from 'express';

export function displayHome(req: express.Request, res: express.Response, next: express.NextFunction) 
{
    res.render('index', { title: 'Express' });
}