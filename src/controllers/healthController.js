module.exports.getHealth = (req, res, next) => {
    return res.send({
        status: 200,
        success: true,
        message: 'API is healthy'
    })
};