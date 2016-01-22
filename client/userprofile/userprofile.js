Template.userprofile.helpers({
    username: function () {
      // Show newest tasks at the top
      var user = Session.get('user');
      return Meteor.users.findOne({'username': user}).username.toString();
    },

    created: function () {
      // Show newest tasks at the top
      var user = Session.get('user');
      return Meteor.users.findOne({'username': user}).createdAt.toString();

    },

    lastseen: function () {
      // Show newest tasks at the top
      var user = Session.get('user');
      return Meteor.users.findOne({'username': user}).services.resume.loginTokens[0].when.toString();
    },

    rooms: function() {
      return Rooms.find({});
    }
});


Template.userprofile.events ({

	'click #logout': function(e) {
	    e.preventDefault();
	    Meteor.logout(Session.set("ses", false));
	    Router.go('/');
  	}
});


if (Meteor.isServer) {
	Meteor.publish("userData", function () {
  		if (this.userId) {
    		return Meteor.users.find({_id: this.userId},
                             {fields: {'other': 1, 'things': 1}});
  		} else {
    		this.ready();
  		}
	});
}

if (Meteor.isClient) {
	Meteor.subscribe("userData");
};

Meteor.subscribe("allUsernames");