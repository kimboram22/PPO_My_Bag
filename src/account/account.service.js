const accountRepository = require("./account.repository");
const jwt = require("../../lib/jwt");

exports.signin = async (user_id, user_pw) => {
    try {
        const result = await accountRepository.searchUser(user_id, user_pw);
        console.log("accountservice signin error:", result);
        if (!result) return {isSignin: false, data: null};

        const token = jwt.sign({id: result.user_id});
        return {isSignin: true, data: token};
    } catch (e) {
        throw new Error("accountService Error" + e.message);
    }
};

exports.signup = async () => {
    try {
    } catch (e) {
        throw new Error("accountService Error" + e.message);
    }
};

exports.updateUser = async () => {
    try {
    } catch (e) {
        throw new Error("accountService Error" + e.message);
    }
};

exports.deleteUser = async () => {
    try {
    } catch (e) {
        throw new Error("accountService Error" + e.message);
    }
};
