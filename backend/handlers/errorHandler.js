const errorHandler = (err, req, res, next) => {
    if (err) {

        if (err.message) {
            res.status(400).json({message: err.message});
        } else {
            res.status(400).json({message: err});
        }


    } else {
        next();
    }
};

module.exports = errorHandler;