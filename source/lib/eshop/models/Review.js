module.exports = function(sequelize, DataTypes) {
	var review = sequelize.define('eshop_reviews', {
			id: { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true},
			pd_id: { type: sequelize.INTEGER},
			user_id: { type: sequelize.INTEGER},
			rating: { type: sequelize.INTEGER},
			comment: { type: sequelize.STRING},
			comment_date: { type: sequelize.DATE}			   
		 });
	return review;
}
