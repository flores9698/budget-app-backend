const guardModel = require('../models/guardModel');


const guard = async (req, res, next) => {
    if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token provided' });
    }
    const token = req.headers.authorization.split(' ')[1];
    const user = await guardModel.verifyUserToken(token);
    if (user) {
        req.user = user;
        next();
    }
    else {
        return res.status(401).json({ message: 'Invalid token' });
    }



}

module.exports = guard;
