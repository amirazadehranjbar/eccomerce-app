const mongoose = require('mongoose');

const dbConnection = async () => {

    mongoose.connect(process.env.MONGODB_URI, {}).then(() => {
        console.log("Connected to MongoDB");
    }).catch(err => {
        console.log(err);
    });

}





// export
module.exports = dbConnection;