Meteor.methods({
  newMessage: function (message) {
  	message.timestamp = Date.now();
    message.user = Meteor.userId();
    message.room = 'default';
    Messages.insert(message);
  }
})