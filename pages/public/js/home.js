var myapp = angular.module("myapp",[]);

myapp.controller("cont",function($scope,$http){
    $scope.tab=[];
    $http.get("http://localhost:3000/employee").success(function(data){
        console.log(data.employees);
        for(var i=0;i<data.employees.length;i++){
            $scope.tab.push(data.employees[i].firstName);
        }
    });
});