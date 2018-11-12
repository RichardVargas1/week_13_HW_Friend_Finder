
var express = require("express");
var friendsData = require('../data/friends.js');

module.exports = function(app) {
	//whenever the user goes to the api/tables url go ahead and display the tableData in json format
	app.get('/api/friends', function(req, res) {
		res.json(friendsData);
	});
    // The app.post request handles when a user submits a form and thus submits data to the surver
    app.post('/api/friends', function (req, res) {
        // loop through all of the possible options
        var bestFriendMatch = {
          friendName: "",
          friendPicture: "",
          friendDifference: 100
        };

        // To take the result of the user's survey POST and parse it
        var userData = req.body;
        var userScores = userData.scores;
        // To take the results of the user's name and photo, other than the survey questions, to post and parse it
        var userNewName = userData.name;
        var userNewPicture = userData.photo;

        // The variable used to calculate the difference b/n the user's socres and the scores of each user
        var totalFriendDifference = 0;

        //loop through the friends data array of objects to get each friends scores
        for (var i = 0; i < friendsData.length - 1; i++) {
          totalFriendDifference = 0;

          //loop through that friends score and the users score and calculate the absolute difference between the two and push that to the total difference variable set above
          for (var j = 0; j < 10; j++) {
            // We calculate the difference between the scores and sum them into the totalDifference
            totalFriendDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendsData[i].scores[j]));
            // If the sum of differences is less then the differences of the current "best match"
            if (totalFriendDifference <= bestFriendMatch.friendDifference) {

                // Reset the bestMatch to be the new friend. 
                bestFriendMatch.name = friendsData[i].name;
                bestFriendMatch.photo = friendsData[i].photo;
                bestFriendtMatch.friendDifference = totaFriendlDifference;
            }
          }
        }

        // Pushing to save the user's data to the established database
        friendsData.push(newFriend);
		    res.json(bestFriendMatch);
    });
};
