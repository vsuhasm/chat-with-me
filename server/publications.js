
Meteor.publish('messages', function (channel) {
	return Messages.find({channel: channel});
});

Meteor.publish('channels', function () {
	return Channels.find();
});

Meteor.publish("allUsernames", function () {
  return Meteor.users.find({}, {fields: {
  	"createdAt": true,
  	"profile": true,
  	"services": true,
  	"username": true,
  }});
});

Meteor.publish("userStatus", function() {
  return Meteor.users.find({ "status.online": true });
});

