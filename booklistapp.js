  Books15 = new Mongo.Collection("books15");

if (Meteor.isClient) {
  Meteor.subscribe('cCodes', function() {
    //console.log(Books15.find({ }, {fields: {cCode: 1, _id: 0}}).fetch())
    var readCountries = Books15.find({ }, {fields: {cCode: 1, _id: 0}}).fetch()
    var countryFill = _.reduce(readCountries, function(fills, country) { fills[country.cCode] = {fillKey: 'hasReadFrom'}; return fills; }, {})
    //console.log(countryFill);
    //console.log('hi homer!')

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

  Meteor.subscribe('titleAuthor', function() {
    //console.log(Books15.find({ }, {fields: {num: 1, title: 1, authorFirst: 1, authorLast: 1, _id: 0}}).fetch())
    var readBooks = (Books15.find({ }, {fields: {num: 1, title: 1, authorFirst: 1, authorLast: 1, copyright: 1}}))
    
    readBooks.forEach(function (book) {
      //console.log(book.title + ", " + book.authorFirst + " " + book.authorLast);
      var readList = (book.title + ", " + book.authorFirst + " " + book.authorLast);
    })
    })

  Template.rows.helpers({
        displayRow: function ( ) {
          var readBooks = (Books15.find({ }, {sort: {num: 1}}, {fields: {num: 1, title: 1, authorFirst: 1, authorLast: 1, copyright: 1}}))
          //console.log(readBooks.fetch())
          return readBooks.fetch()
        }
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
    Meteor.publish('titleAuthor', function(){
      console.log('Publishing 2')
      console.log(Books15.find({ }, {fields: {num: 1, title: 1, authorFirst: 1, authorLast: 1, copyright: 1}}).fetch())
      return Books15.find({ }, {fields: {num: 1, title: 1, authorFirst: 1, authorLast: 1, copyright: 1}})
    })
  })
}
