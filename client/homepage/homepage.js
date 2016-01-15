Template.homepage.events ({

	'click #signup': function(e) {
	    e.preventDefault();
	    Modal.show('myModal');
  	},

    'click #confirmsignup': function(event){
        event.preventDefault();

        let user_name = $('[id=user_id]').val(); 
        let email = $('[id=Email]').val();
        let password = $('[id=password]').val();
        let dt = new Date();
		let date = dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();

		Accounts.createUser({
		    email: email,
		    password: password,
		    profile: {
				userName: user_name,
				image: "",
				date: date
		    }
		}, 

		function(error){
		    if(error){
		        console.log(error.reason); // Output error if registration fails
		    } else {
		    	Modal.hide('myModal');
		        Router.go("userprofile"); // Redirect user if registration succeeds
		    }
		});

    },

    'click #signin': function(event){
        event.preventDefault();
        let user_name = $('[id=userid]').val();
        let password = $('[id=passwordinput]').val();
        
		Meteor.loginWithPassword(user_name, password, function(error){

		    if(error){
		        console.log(error.reason); // Output error if registration fails
		    } else {
		        console.log("in");

   				Modal.hide('myModal');

		        Router.go("userprofile");
		    }
		});
			
    }
});

Template.homepage.helpers({
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