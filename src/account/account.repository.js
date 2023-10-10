const pool = require("../../lib/pool");

exports.searchUser = async (user_id, user_pw) => {
    try {
        const sql = `select * from accouts where user_id=? and user_pw=?`;
        const [[result]] = await pool.query(sql, [user_id, user_pw]);
        console.log(`searchUser result :`, result);
        return result;
    } catch (e) {
        throw new Error("Repository Error" + e.message);
    }
};
