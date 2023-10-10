const boardService = require("./board.service");

exports.getList = async (req, res, next) => {
    try {
        const result = await boardService.fetchAllBoards();
        res.render("board/list.html", {list: result});
    } catch (e) {
        next();
    }
};

exports.getView = async (req, res, next) => {
    try {
        const {id} = req.query;
        // console.log("controller id :", id);
        const result = await boardService.specifyView(id);
        // console.log("getview result :", result);
        res.render("board/view.html", {...result});
    } catch (e) {
        next();
    }
};

exports.getWrite = (req, res) => {
    res.render("board/write.html");
};

// exports.getModify = (req, res) => {
//     res.render("board/modify.html");
// };
