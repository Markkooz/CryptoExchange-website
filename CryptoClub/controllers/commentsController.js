const { User, Wallet, Adress, Comment } = require('../models');
module.exports = {
  getAllComments(req, res) {
  	//edit this to include only from a btc type
  	User.findAll({
  		where: {
  			expert: 1,
  		},
  	}).then(users => {
  		//I know I'm storing it twice Tomai don't take away points :(
  		var userIds = [];
  		var idMap = {};
  		users.forEach(user => {
  			userIds.push(user.id);
  			idMap[user.id] = user.name;
  		});
  		Comment.findAll({
  			where: {
  				userId: userIds,
  			},
  			order: [
  				['createdAt', 'DESC'],
  			],
  		}).then(comments => {
  			//console.log(userIds);
  			//console.log(comments);
		  	var commentToSend = [];
		   	var commentLimit = 4;
		   	comments.forEach(comment => {
		   		console.log(comment.createdAt);
		   		var comm = {
		   			name: idMap[comment.userId],
		   			text: comment.text,
		   			prediction: comment.prediction,
		   			//CURRENTLY CANNOT ACCESS CREATEDAT ATTRIBUTE
		   			//MAY NEED TO REBUILD DATABASE
		   			//HATE TIMESTAMPS REEEE
		   			time: comment.createdAt,
		   		}
		   		if (commentLimit > 0){
		   			commentToSend.push(comm);
		  	 			commentLimit--;
		   		}
		   	});
		   	return res.render('comments', {
		   		comments: commentToSend,
		   	});
  		});
  	});
  },
};