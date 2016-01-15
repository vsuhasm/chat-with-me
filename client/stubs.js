Meteor.methods({
  newMessage: function (message) {
  	message.timestamp = Date.now();
    message.user = Meteor.userId();
    message.room = Session.get('curroom');
    Messages.insert(message);
  }
})