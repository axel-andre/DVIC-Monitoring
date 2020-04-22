import App from './app'
import * as dotenv from 'dotenv';
const environment = dotenv.config();

if (!environment.error) {
    const app = new App(8080);
    app.listen();
} else {
    throw environment.error
}