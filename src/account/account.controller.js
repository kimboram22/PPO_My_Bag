const accountService = require("./account.service");

exports.getSignin = (req, res) => {
    res.render("account/signin.html");
};

exports.postSignin = async (req, res, next) => {
    try {
        const result = await accountService.signin(req.body);
        console.log("accountcontroller error :", result);

        if (result.isSignin) {
            return res.redirect("/board/list");
        } else {
            return res.redirect("/account/signup");
        }
    } catch (e) {
        next();
    }
};

exports.getSignout = (req, res) => {};

exports.getSignup = (req, res) => {
    res.render("account/signup.html");
};
exports.getMypae = (req, res) => {
    res.render("account/mypage.html");
};

exports.getSignout = (req, res) => {};

// exports.postSignup = (req, res) => {};

// exports.getModify = (req, res) => {};
// exports.postModify = (req, res) => {};
// exports.postDelte = (req, res) => {};
