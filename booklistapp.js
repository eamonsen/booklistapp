if (Meteor.isClient) {
  books15 = new Mongo.Collection("2015");
  $(document).ready(function(){
    console.log('ready')
    var map = new Datamap({element: $('#container')[0]});

})
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup

  });
}
