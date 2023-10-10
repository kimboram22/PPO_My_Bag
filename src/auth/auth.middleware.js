const jwt = require("../../lib/jwt");

exports.auth = async (req, res, next) => {
    try {
        const {token} = req.cookies;
        if (!token) return next();

        const payload = jwt.verify(token, "salt");
        if (!payload) return res.status(401).send(`token 인증이 필요합니다!`);
    } catch (e) {
        next();
    }
};
