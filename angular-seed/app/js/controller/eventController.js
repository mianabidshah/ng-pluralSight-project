
eventsApp.controller("eventController", function($scope){

   $scope.event = {

       name: 'AngularJS Workshops',
       date: new Date().toLocaleDateString(),
       time: new Date().toLocaleTimeString(),
       location : {

           address: '5973 Featherhead Crescent',
           city: 'Mississauga'
       },
       sessions : [

           {
               name: 'AngularJS $scope',
               duration: '30 Minutes',
               level: 'Beginners',
               voteCount: 0
           },
           {
               name: 'Testing with Karma',
               duration: '45 Minutes',
               level: 'Advance',
               voteCount: 0
           },
           {
               name: 'Services and Factories',
               duration: '30 Minutes',
               level: 'Medium',
               voteCount: 0

           },
           {
               name: 'ng Directives and Filters',
               duration: '55 Minutes',
               level: 'Advance',
               voteCount: 0

           }
       ]
   }

    $scope.voteCountUp = function(session){

        session.voteCount++;
    }

    $scope.voteCountDown = function(session){

        if(session.voteCount > 0)
            session.voteCount--;
    }
});
