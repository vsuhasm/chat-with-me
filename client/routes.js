

Router.route('/', 'homepage');
Router.route('/signin', 'signin');
Router.route('/userprofile', 'userprofile');
Router.route('/room', 'app');
Router.route('/createroom', 'createroom');
Router.route('/chatroom', 'chatroom');

Router.route('/:room', function () {
	Session.set('curroom', this.params.room);
	this.render('app');
});

Router.route('/:username/profile', function () {
	Session.set('user', this.params.username);
	this.render('userprofile');
});





