  Books15 = new Mongo.Collection("books15");

if (Meteor.isClient) {
  Meteor.subscribe('cCodes', function() {
    console.log(Books15.find({ }, {fields: {cCode: 1, _id: 0}}).fetch())
    var readCountries = Books15.find({ }, {fields: {cCode: 1, _id: 0}}).fetch()
    var countryFill = _.reduce(readCountries, function(fills, country) { fills[country.cCode] = {fillKey: 'hasReadFrom'}; return fills; }, {})
    console.log(countryFill);
    console.log('hi homer!')

    var map = new Datamap({element: $('#container')[0],
      fills: {
        hasReadFrom: "#ABDDA4",
        defaultFill: "#d6d0c3"
      },

      data: 
        countryFill,
    

      geographyConfig: {
        highlightOnHover: false
      }

  });
  })


  // $(document).ready(function(){
  //   console.log('hi homer!')
  //   var map = new Datamap({element: $('#container')[0],
  //     fills: {
  //       hasReadFrom: "#ABDDA4",
  //       defaultFill: "#d6d0c3"
  //     },

  //     data: {
  //       USA: {fillKey: "hasReadFrom"},
  //     },

  //     geographyConfig: {
  //       highlightOnHover: false
  //     }

  // });

// })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    Meteor.publish('cCodes', function(){
      console.log('Publishing')
      console.log(Books15.find({ }, {fields: {cCode: 1}}).fetch())
      return Books15.find({ }, {fields: {cCode: 1}})
    })
  })
}
