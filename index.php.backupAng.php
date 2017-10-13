<!doctype html>
<html ng-app="sampleApp">
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.8/angular.min.js"></script>
    <script type="text/javascript">
      var sampleApp = angular.module('sampleApp', []); // Define new module for our application
 
      // Create new controller, that accepts two services $scope and $http
      function SampleCtrl($scope, $http) {
        $scope.date = "sample date"; // Bind data to $scope
 
        // Define new function in scope
        $scope.fetch = function() {
          // Use $http service to fetch data from the PHP web service
          $http.get('api.php').success(function(data) {
            $scope.date = data.date; // Bind the data returned from web service to $scope
          });
        }
 
      };
 
      SampleCtrl.$inject = ['$scope', '$http']; // Ask Angular.js to inject the requested services
 
      sampleApp.controller('SampleCtrl', SampleCtrl); // Initialize controller in pre-defined module
    </script>
  </head>
  <!-- Use our controller to control the page behaviour -->
  <body ng-controller="SampleCtrl">
    <div>
      <!-- When button is clicked the controller will use the fetch() in $scope
      <button ng:click="fetch()">Load date</button>
      <hr>
      <!-- {{date}} is bound to $scope.date and automatically updates when changed ($scope.fetch()) call -->
      <h1>Date is {{date}}!</h1>
    </div>
  </body>
</html>
