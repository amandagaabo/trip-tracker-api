// health 
module.exports.getHealth = function getHealth (req, res, next) {
    res.status(200).send({
        success: true,
        message: 'API is healthy'
    })
};
