eventsApp.factory('eventData', function () {

    return{
        event: {

            name: 'AngularJS Workshops',
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
            location: {

                address: '5973 Featherhead Crescent',
                city: 'Mississauga'
            },
            sessions: [

                {
                    name: 'AngularJS $scope',
                    duration: 1,
                    level: 'Beginners',
                    voteCount: 0
                },
                {
                    name: 'Testing with Karma',
                    duration: 2,
                    level: 'Advance',
                    voteCount: 0
                },
                {
                    name: 'Services and Factories',
                    duration: 2,
                    level: 'Medium',
                    voteCount: 0

                },
                {
                    name: 'ng Directives and Filters',
                    duration: 3,
                    level: 'Advance',
                    voteCount: 0

                }
            ]
        }
    };
});
