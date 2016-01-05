if (Meteor.isClient) {
  Template.chatroom.events({
    "click #menu-toggle": function (e) {
      e.preventDefault();
      $('#wrapper').toggleClass('toggled');
    },

    "keypress input": function(e) {
      if (e.charCode == 13) {
        e.stopPropagation();
        var mess = $('#msg').val();
        $('#message-history').append('<a href="#" class="list-group-item">'+mess+'</a>');
        $('#msg').val("");
      }
    }
  });
}