const pool = require("../../lib/pool");

exports.searchDataAll = async () => {
    try {
        const sql = `SELECT * FROM boards`;
        const [result] = await pool.query(sql);
        // console.log(`searchDataAll result :`, result);
        return result;
    } catch (e) {
        throw new Error(`searchDataAll error ${e.message}`);
    }
};

exports.specifyData = async (id) => {
    try {
        const sql = `SELECT* FROM boards WHERE id=?`;
        const [[result]] = await pool.query(sql, [id]);
        // console.log(`specifyData result :`, result);
        return result;
    } catch (e) {
        throw new Error(`specifyData error ${e.message}`);
    }
};

exports.createData = async () => {
    try {
        const sql = `INSERT INTO boards(title, content, author) values('테스트하는중', 'teeesssttt', '보람');`;
        const [[result]] = await pool.query(sql);
        console.log(`createData result :`, result);
        return result;
    } catch (e) {
        throw new Error(`createData error ${e.message}`);
    }
};

// exports.update = async () => {
//     try {
//         const sql = `UPDATE boards SET WHERE`;
//         const result = await pool.query(sql);
//         console.log(`update result :`, result);
//         return result;
//     } catch (e) {
//         throw new Error(`update error ${e.message}`);
//     }
// };

// exports.delete = async () => {
//     try {
//         const sql = `DELETE FROM boards WHERE`;
//         const result = await pool.query(sql);
//         console.log(`delete result :`, result);
//         return result;
//     } catch (e) {
//         throw new Error(`delete error ${e.message}`);
//     }
// };
