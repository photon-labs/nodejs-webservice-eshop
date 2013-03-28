var Sequelize = require("sequelize");
var underscore = require("underscore");
var utility = require("../utility");
var sequelize;


exports.configure = function(currentEnv) {

    var dbConfig = utility.getConfigByName(currentEnv, 'Database');
    var password = "";

    if (!underscore.isEmpty(dbConfig.password)) {
        password = dbConfig.password.toString();
    }

    sequelize = new Sequelize(dbConfig.dbname.toString(), dbConfig.username.toString(), password, {
        // custom host; default: localhost
        host: dbConfig.host.toString(),

        // custom port; default: 3306
        port: dbConfig.port.toString(),

        // disable logging; default: true
        logging: false,

        // max concurrent database requests; default: 50
        maxConcurrentQueries: 100,

        // specify options, which are used when sequelize.define is called
        // the following example is basically the same as:
        // sequelize.define(name, attributes, { timestamps: false })
        // so defining the timestamps for each model will be not necessary
        define: { timestamps: false },

        // similiar for sync: you can define this to always force sync for models
        sync: { force: false }
    });
}

exports.getSequelize = function(currentEnv) {
    return sequelize;
}