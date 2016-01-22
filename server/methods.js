Meteor.methods({
  newMessage: function (message, curoom) {
  	message.timestamp = Date.now();
    message.user = Meteor.userId();
    message.room = curoom;
    Messages.insert(message);
    Rooms.update({name: curoom}, {$push: {message_history: message}});
  },

  newRoom: function (room) {
  	room.timestamp = Date.now();
    room.admin = Meteor.userId();
    room.message_history = [];
    Rooms.insert(room);
  }
})