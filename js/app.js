var app = angular.module('myApp', []);
//http://192.70.175.128/Public/cgaAPI.nsf/api.xsp/liveproceedings/floor/house
app.controller("SectionCtrl", function($scope, $http) {
  $scope.house = [];
  $scope.senate = [];
  $http({method: 'GET', url: '/live_proceedings_house.json'}).success(function(data) {
  //$http({method: 'GET', url: 'http://192.70.175.128/Public/cgaAPI.nsf/api.xsp/liveproceedings/floor/house?callback=JSON_CALLBACK'}).success(function(data) {
    $scope.house.sections = [];
    $scope.house.chamber = data.chamber;
    angular.forEach(data.sections, function(value, key) {
        console.log(value);
        $scope.house.sections.push(value);
    });
  }).error(function(error) {
    console.log("there seems to be a problem in the house, eh.");
    console.log(error);
  });
  $http({method: 'GET', url: '/live_proceedings_senate.json'}).success(function(data) {
    $scope.senate.sections = [];
    $scope.senate.chamber = data.chamber;
    angular.forEach(data.sections, function(value, key) {
        console.log(value);
        $scope.senate.sections.push(value);
    });
  }).error(function(error) {
    console.log("there seems to be a problem, eh.");
    console.log(error);
  });
});
