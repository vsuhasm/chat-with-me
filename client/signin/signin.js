Template.signin.events ({

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
		    friends: [],
		    profile: {
		    	username: user_name,
				image: "",
				date: date
		    }
		},

		function(error){
		    if(error){
		        console.log(error.reason); // Output error if registration fails
		    } else {
		        Router.go("/userprofile"); // Redirect user if registration succeeds
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
		        Router.go("/userprofile");
		    }
		});
			
    }
});