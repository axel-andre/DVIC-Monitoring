import db from '../../config/db'
import { stringify } from 'querystring';

const schema = new db.Schema({
    name: String,
    email: String,
    address: {
        type: String,
        required: false
    }
}, { timestamps: { createdAt: 'created_at' }});

export default db.model('Client', schema)