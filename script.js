var app = angular.module('myApp', []);
app.controller('firstControllerScope',
    function ($scope) {
        // Initialize the model variables
        $scope.firstName = "Sachin";
    });
app.controller('secondControllerScope',
    function ($scope) {
        // Initialize the model variables
        $scope.lastName = "Pilot";
        // Define utility functions
        $scope.getFullName = function () {
            return $scope.firstName + " " +
                $scope.lastName;
        };
    });
app.controller('thirdControllerScope',
    function ($scope) {
        $scope.middleName = "Ramesh";
        $scope.lastName = "Tendilkar";
        $scope.getFullName() = function () {
            return $scope.firstName + " " + $scope.middleName + " "
            + $scope.lastName;
        };

    });


app.controller('firstControllerObj', function ($scope) {
    // Initialize the model object
    $scope.firstModelObj = {
        firstName: "Sachin"
    };
});
app.controller('secondControllerObj', function ($scope) {
    // Initialize the model object
    $scope.secondModelObj = {
        lastName: "Pilot"
    };
    // Define utility functions
    $scope.getFullName = function () {
        return $scope.firstModelObj.firstName + " " +
            $scope.secondModelObj.lastName;
    };
});
app.controller('thirdControllerObj', function ($scope) {
    // Initialize the model object
    $scope.thirdModelObj = {
        middleName: "Ramesh",
        lastName: "Tendulkar"
    };
    // Define utility functions
    $scope.getFullName = function () {
        return $scope.firstModelObj.firstName + " " +
            $scope.thirdModelObj.middleName + " " +
            $scope.thirdModelObj.lastName;
    };
});