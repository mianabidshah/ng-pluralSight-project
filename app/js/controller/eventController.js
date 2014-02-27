
eventsApp.controller("eventController", function($scope, eventData){

    $scope.sorter = 'name';

   $scope.event = eventData.event;
    $scope.voteCountUp = function(session){

        session.voteCount++;
    }

    $scope.voteCountDown = function(session){

        if(session.voteCount > 0)
            session.voteCount--;
    }
});
