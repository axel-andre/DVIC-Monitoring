import db from '../../config/db'

const schema = new db.Schema({
    name: String,
    hourlyRate: {
        type: Number,
        required: false,
        default: 0
    },
    tasks: {
        type: Array,
        required: false,
        default: []
    },
    client: {
        type: db.Types.ObjectId,
        ref: 'Client'
    },
    description: {
        type: String,
        required: true,
    }
}, { timestamps: { createdAt: 'created_at' }});

export default db.model('Project', schema)