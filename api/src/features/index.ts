import { Router, Request, Response, NextFunction } from 'express'
import { paths } from './constants'
import CoreRouter from '../helpers/router';
import ProjectRouter from './projects';
import ClientRouter from './clients';

class MainRouter extends CoreRouter { 
    constructor() {
        super();
        this.declareSubRouters();
        this.declareBaseRoute();
    }

    private declareSubRouters() {
        this.router.use(paths.PROJECT, ProjectRouter.getRouter())
        this.router.use(paths.CLIENTS, ClientRouter.getRouter())
    }
    private declareBaseRoute(){
        this.router.use('/', (req: Request, res: Response, next: NextFunction) => {
            return res.send('Welcome to the API!')
        })
    }
}
export default new MainRouter().router;