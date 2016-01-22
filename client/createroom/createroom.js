var memb = [];

Template.createroom.events ({	

	'click #confirmcreate': function(event){
        event.preventDefault();
        let roomname = $('[id=room]').val();
        let visible = $('input[name=vis]:checked').val();
        let usrs = memb;
        let usrlen = usrs.length;
        Meteor.call('newRoom', {
          name: roomname,
          visible: visible,
          members: usrs,
          numMem: usrlen
        });
		Session.set('curroom', roomname);
		memb = [];
		Router.go('/' + roomname);	
    },


    "autocompleteselect input": function(event, template, doc) {
    	memb.push(doc);
    	$('#addmem').val("");
  	}
});

Template.createroom.helpers({
  settings: function() {
    return {
      limit: 10,
      rules: [
        {
          collection: Meteor.users,
          field: 'username',
          matchAll: true,
          template: Template.standardLegends
        }
      ]
    };
  }
});
