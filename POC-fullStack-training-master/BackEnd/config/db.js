const mongoose = require('mongoose');

const config = require('config');

const db = config.get('mongoURI');
console.log(db)

const connectDB = async() => {
    try {
        await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });

        console.log('db connected');
    } catch (err) {
        console.log(err.message);
        process.exit(1) //exit process with failure
    }
}

module.exports = connectDB;