const mongoose = require('mongoose');

const dbConfig = async () => {
    mongoose
        .connect(process.env.MONGODB_URI)
        .then(() => console.log("Database connected successfully"))
        .catch((error) => console.error("Database connection failed", error));
}

module.exports = dbConfig;