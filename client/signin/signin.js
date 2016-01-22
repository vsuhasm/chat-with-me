Template.signin.events ({

    'click #confirmsignup': function(event){
        event.preventDefault();

        let username = $('[id=user_id]').val(); 
        let email = $('[id=Email]').val();
        let password = $('[id=password]').val();
        let dt = new Date();
		let date = dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();


		Accounts.createUser({
			username: username,
	        email: email,
	        password: password,
	        friends: ["scott", "John", "Luis", "Mary"]
		},


		function(error){
		    if(error){
		        console.log(error.reason); // Output error if registration fails
		    } else {
		        Router.go("/" + username + "/profile"); // Redirect user if registration succeeds
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
		        Router.go("/" + user_name + "/profile");
		    }
		});
			
    }
});