Template.userprofile.helpers({
    username: function () {
      // Show newest tasks at the top
      return Meteor.user().emails[0].address;
    },

    created: function () {
      // Show newest tasks at the top
      return Meteor.user().createdAt;
    }
});


Template.userprofile.events ({

	'click #logout': function(e) {
	    e.preventDefault();
	    Meteor.logout(Session.set("ses", false));
	    Router.go('/signin');
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