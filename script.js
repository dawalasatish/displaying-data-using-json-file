var app = angular.module('myApp',[]);
app.controller('myCtrl',['$scope','myService',function($scope,myService){
    $scope.getFunctionData = function(){
        myService.getData().then(function (response) {
            $scope.myWelcome = response.resources;
            console.log($scope.myWelcome);
        });
    }
    $scope.getFunctionData();
        
}]);

app.factory('myService',['$http','$q',function($http,$q){
    return{
        getData: function(){
            var deferred = $q.defer();
            $http.get('https://api.myjson.com/bins/6o0rk').success(function(response){
                deferred.resolve(response);
            }).error(function(err){
                deferred.reject(err);
            })
            return deferred.promise;
        }
    }
}])