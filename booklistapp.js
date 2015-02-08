  Books15 = new Mongo.Collection("books15");

if (Meteor.isClient) {
  Meteor.subscribe("books15");

 aOrigins = db.books15.group(
   {
     key: { cCode: 1 },
     reduce: function( curr, result ) {
                 result.total += 1;
             },
     initial: { total : 0 }
   }
)


  $(document).ready(function(){
    var map = new Datamap({element: $('#container')[0],
      fills: {
        defaultFill: "#d6d0c3"
      },

      geographyConfig: {
        highlightOnHover: false
      }

  });

})
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup

  });
}
