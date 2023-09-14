var app = angular.module('touristApp', ['ngAnimate']);

app.controller('TouristController', ['$scope', function($scope) {
    // Sample data (can be replaced with actual API calls)
    $scope.locationsData = [
        { name: 'Location 1', description: 'Description for Location 1', rating: 4.5 },
        { name: 'Location 2', description: 'Description for Location 2', rating: 3.8 },
        { name: 'Location 3', description: 'Description for Location 3', rating: 1.5 },
        { name: 'Location 4', description: 'Description for Location 4', rating: 3.3 },
        { name: 'Location 5', description: 'Description for Location 5', rating: 4.2 },
        { name: 'Location 6', description: 'Description for Location 6', rating: 5 },
    ];

    $scope.query = '';
}]);