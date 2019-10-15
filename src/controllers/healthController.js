module.exports.getHealth = (req, res, next) => {
    return res.send({
        status: 'running'
    })
};
