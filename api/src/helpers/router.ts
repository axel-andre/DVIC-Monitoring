import { Router } from 'express'

export default class CoreRouter {
    public router: Router = Router();

    public getRouter() {
        return this.router;
    }
}