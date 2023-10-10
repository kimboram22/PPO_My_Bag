const boardRepository = require("./board.repository");

exports.fetchAllBoards = async () => {
    try {
        const result = await boardRepository.searchDataAll();
        // console.log(`fetchAllBoards result :`, result);
        return result;
    } catch (e) {
        throw new Error(`fetchAllBoards error ${e.message}`);
    }
};

exports.specifyView = async (id) => {
    try {
        const result = await boardRepository.specifyData(id);
        // console.log(`specifyView result :`, result);
        return result;
    } catch (e) {
        throw new Error(`specifyView error ${e.message}`);
    }
};

exports.createBoard = async (id) => {
    try {
        const result = await boardRepository.createData();
        console.log(`createBoard result :`, result);
        return result;
    } catch (e) {
        throw new Error(`createBoard error ${e.message}`);
    }
};

// exports.updateBoard = async () => {
//     try {
//     } catch (e) {
//         throw new Error(`fetchAllBoards error ${e.message}`);
//     }
// };

// exports.deleteBoard = async () => {
//     try {
//     } catch (e) {
//         throw new Error(`fetchAllBoards error ${e.message}`);
//     }
// };
