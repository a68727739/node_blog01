
var User = require("../models/user");

/**
 * 根據用戶名字獲取用戶信息
 * @param name
 * @param callback
 * @returns {*}
 */
exports.getUserInfo = function(name,callback){

    if(name.length == 0)
    {
        return callback(null,[]);
    }
    User.find({username :name },callback);
};
