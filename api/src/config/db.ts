import * as mongoose from 'mongoose'
import * as dotenv from 'dotenv';

dotenv.config();

const { DB_USER, DB_HOST, DB_PASSWORD, DB_NAME } = process.env;
const SERVER_ADDRESS = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(SERVER_ADDRESS, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Successfully connected to the database');
});

export default mongoose;