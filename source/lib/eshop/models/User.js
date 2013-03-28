module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define("eshop_users", {
        id: { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        first_name: { type: sequelize.STRING},
        last_name: { type: sequelize.STRING},
		email: { type: sequelize.STRING},
		password: { type: sequelize.STRING},
		phone: { type: sequelize.STRING}
    });
    return user;
}
