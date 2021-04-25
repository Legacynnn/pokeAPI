const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27018/pokeTry-mongo', {
    "auth": { "authSource": "admin" },
    "user": "root",
    "pass": "pass",
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, console.log('Database has been connected'))