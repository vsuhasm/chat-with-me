Template.createroom.events ({

	'click #confirmcreate': function(event){
        event.preventDefault();
        let roomname = $('[id=room]').val();
        let visible = $('input[name=vis]:checked').val();
		Session.set('curroom', roomname);
		Router.go('/room');	
    }
});

