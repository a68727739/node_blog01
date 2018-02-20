
var Tags = require("../models/tags");
var moment = require('moment');

/**
 * 獲取標籤列表
 * @param callback
 */
exports.getTagsList = function(callback){

    Tags.find(callback);
};
/**
 * 添加標籤
 * @param tagname
 * @param callback
 */
exports.addTag = function(tagname,callback){

    var newRecord = {};
    newRecord.tagname = tagname;
    newRecord.created_at = moment().format('YYYY-MM-DD HH:mm:ss');
    Tags.create(newRecord, function(err, results) {

       return callback(err,results);

    });
};
/**
 * 更新標籤
 * @param id
 * @param tagname
 * @param callback
 */
exports.updateTag = function (id,tagname,callback){

    Tags.find({id:id},function(err,tag){

        tag[0].tagname = tagname;
        tag[0].save(function(err,result){

            return callback(err,result)
        });
    });
};
