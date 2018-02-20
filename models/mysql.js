
var db = require("../config/db");
var orm = require("orm");
//拼接 連接mysql的 uri
var uri = "mysql://"+db.user+":"+db.password+"@"+db.host+"/"+db.database;
//連接數據庫
var conn = orm.connect(uri,function (err, db) {

    if(err)
    {
        return console.error('Connection error: ' + err);
    }

});
module.exports = conn;
