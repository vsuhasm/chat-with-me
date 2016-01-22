Template.messages.helpers({
  messages: function(){
  	var room = Session.get('curroom');
  	return Rooms.findOne({name: room});
  }
});

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});

Template.registerHelper('currentChannel', function () {
	return Session.get('channel');
});

Template.registerHelper('currentRoom', function () {
	return Session.get('curroom');
});

Template.registerHelper('currentRoomVis', function () {
	var room = Session.get('curroom');
	return Rooms.findOne({name: room}).visible;
});

Template.registerHelper("timestampToTime", function (timestamp) {
	var date = new Date(timestamp);
	var hours = date.getHours();
	var minutes = "0" + date.getMinutes();
	var seconds = "0" + date.getSeconds();
	return hours + ':' + minutes.substr(minutes.length-2) + ':' + seconds.substr(seconds.length-2);
});

Template.registerHelper("usernameFromId", function (userId) {
	var user = Meteor.users.findOne({_id: userId});
	if (typeof user === "undefined") {
		return "Anonymous";
	}

	return user.username;
});

Template.listings.events ({

	'click #logout': function(e) {
	    e.preventDefault();
	    Meteor.logout(Session.set("ses", false));
	    Router.go('/');
  	}
});

Template.listings.helpers({
	channels: function () {
		return Channels.find();
	},

	friends: function() {
		var room = Session.get('curroom');
		var onlinemem = [];
		var mem = Rooms.findOne({name: room}).members;
		var i;
		for (i = 0; i < mem.length; i++) {
		    if (Meteor.users.findOne({$and:[{username: mem[i].username}, 
		    	{"status.online": true}]})) {
		    	
		    	onlinemem.push(mem[i]);
		    }
		}

		return onlinemem;

	}
});

Template.channel.helpers({
	active: function () {
		if (Session.get('channel') === this.name) {
			return "active";
		} else {
			return "";
		}
	}
});

Meteor.subscribe("userStatus");
