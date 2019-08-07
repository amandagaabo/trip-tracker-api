// health 
module.exports.getHealth = (req, res, next) => {
    res.send({
        status: 200,
        success: true,
        message: 'API is healthy'
    })
};
