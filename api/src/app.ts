import * as express from 'express'
import { Application, Router, Request, Response, NextFunction } from 'express'
import * as morgan from 'morgan'

import MainRouter from './features'
import bodyParser = require('body-parser')


export default class App {
    public app: Application = express()
    private port: number;
    public MainRouter: Router = MainRouter;
    constructor(port: number) {
        this.port = port;
        this.configureDependencies();
        this.configureRoutes();
    }

    private configureDependencies() {
        this.app.use(morgan("dev"))
        this.app.use(bodyParser.urlencoded({ extended: true }))
        this.app.use(bodyParser.json())
        this.app.use((req: Request, res: Response, next: NextFunction)=>{
            res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
            next();
        });
    }

    private configureRoutes() {
        this.app.use('/', this.MainRouter)
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Application listening on port ${this.port}`)
        })
    }
}