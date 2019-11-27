module.exports = {
  getAllusers(req, res) {
    return res.render('usersList', { data: 'reached /userList index route!' });
  },
};


// const { User, Wallet, Adress, Comment } = require('../models');
// module.exports = {
//   getAllUsers(req, res) {
//   	//edit this to include only from a btc type
//   	//specifically req.body.crypto (or req.query.crypto) should have
//   	//string of crypto that you want to see comments of
//   	User.findAll({
//   		where: {
//   			expert: 1,
//   		},
//   	}).then(users => {
//   		//I know I'm storing it twice Tomai don't take away points :(
//   		//userIds is just a list of id keys for the DB to pully only comments
//   		//from those users
//  		// idMap is just a map for instant access for a User's name since Comments
//  		// only carry the id of the user who made them
//   		var userIds = [];
//   		var idMap = {};
//   		users.forEach(user => {
//   			userIds.push(user.id);
//   			idMap[user.id] = user.name;
//   		});
//   		Comment.findAll({
//   			where: {
//   				userId: userIds,
//   			},
//   			order: [
//   				//sort fetched list of entries by timestamp in descending order "DESC"
//   				['createdAt', 'DESC'],
//   			],
//   		}).then(comments => {
//   			//console.log(userIds);
//   			//console.log(comments);
//   			// commentToSend will carry list of Comment objects with the
//   			// following attributes: name, text, prediction, and time (time is not workign atm)
// 		  	var commentToSend = [];
// 		  	//need this or else all comments get displayed 
// 		   	var commentLimit = 4;
// 		   	//for each comment in fetched comments, we push to commentToSend
// 		   	//(TODO:Alvaro) Make sure only one comment for each user is fetched
// 		   	//as-is an expert can spam and take the comment space from other experts
// 		   	comments.forEach(comment => {
// 		   		console.log(comment.createdAt);
// 		   		var comm = {
// 		   			name: idMap[comment.userId],
// 		   			text: comment.text,
// 		   			prediction: comment.prediction,
// 		   			//CURRENTLY CANNOT ACCESS CREATEDAT ATTRIBUTE
// 		   			//MAY NEED TO REBUILD DATABASE
// 		   			//HATE TIMESTAMPS REEEE
// 		   			time: comment.createdAt,
// 		   		}
// 		   		if (commentLimit > 0){
// 		   			commentToSend.push(comm);
// 		  	 			commentLimit--;
// 		   		}
// 		   	});
// 		   	return res.render('comments', {
// 		   		comments: commentToSend,
// 		   	});
//   		});
//   	});
//   },
// };