module.exports.getUser = (req, res, next) => {
    res.send({
        status: 200,
        data: {
            uuid: '1234-5667-1234',
            firstName: 'Amanda',
            lastName: 'Test',
            email: 'amandatest@yahoo.com',
            joinDate: '2013-03-25'
        }
    })
};
