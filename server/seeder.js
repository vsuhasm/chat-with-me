Meteor.startup(function() {

  Meteor.users.remove({});
  
  Accounts.createUser({
    username: "scotchio",
    email: "scotchio@example.com",
    password: "dummypassword",
    friends: ["scott", "scotch"]
  });

  Accounts.createUser({
    username: "scott",
    email: "scott@example.com",
    password: "dummypassword",
    friends: ["scotchio", "scotch"]
  });

  Accounts.createUser({
    username: "scotch",
    email: "scotch@example.com",
    password: "dummypassword",
    friends: ["scott", "scotchio"]
  });

  Accounts.createUser({
    username: "scotchy",
    email: "scotchy@example.com",
    password: "dummypassword",
    friends: ["scott", "scotchio"]
  });

  Accounts.createUser({
    username: "scotchin",
    email: "scotchin@example.com",
    password: "dummypassword",
    friends: ["scott", "scotchio"]
  });

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
    _(10).times(function(n) {
      Factory.create('message');
    });
  }

  Channels.remove({});
  Channels.insert({
    name: "general"
  });
  Channels.insert({
    name: "random"
  });
});