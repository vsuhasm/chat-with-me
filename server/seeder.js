Meteor.startup(function() {

  if (Meteor.users.find({}).count() === 0) {
    _(10).times(function(n) {
      var usern = Fake.word();
      var em = usern+"@"+"gmail.com";
      Accounts.createUser({
        username: usern,
        email: em,
        password: "dummypassword",
        friends: ["scott", "John", "Luis", "Mary"]
      });
    });

    Accounts.createUser({
      username: 'John',
      email: 'john@gmail.com',
      password: "dummypassword",
      friends: ["scott", "John", "Luis", "Mary"]
    });

    Accounts.createUser({
      username: 'Bob',
      email: 'bob@gmail.com',
      password: "dummypassword",
      friends: ["scott", "John", "Luis", "Mary"]
    });

    Accounts.createUser({
      username: 'Mary',
      email: 'mary@gmail.com',
      password: "dummypassword",
      friends: ["scott", "John", "Luis", "Mary"]
    });

  }


  Factory.define('message', Messages, {
    text: function() {
    	return Fake.sentence();
    },
    user: Meteor.users.findOne()._id,
    timestamp: Date.now(),
    channel: 'general',
    room: 'default'
  });

  // Add this if you want to remove all messages before seeding
  Messages.remove({});

  if (Messages.find({}).count() === 0) {
    _(5).times(function(n) {
      Factory.create('message');
    });
  }

  Factory.define('room', Rooms, {
    name: function() {
      return Fake.word();
    },
    admin: Meteor.users.findOne()._id,
    timestamp: Date.now(),
    members: function() {
      return Meteor.users.find({}).fetch();
    },
    message_history: function() {
      return Messages.find({}).fetch();
    },
    visible: 'public',
    numMem: function() {
      return Meteor.users.find({}).fetch().length;
    }
  });

  if (Rooms.find({}).count() === 0) {
    _(3).times(function(n) {
      Factory.create('room');
    });
  }
});