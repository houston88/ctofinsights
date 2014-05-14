'use strict';

angular.module('carmellaPizzaApp')

  .controller('MainCtrl', function ($scope, $http) {

    $scope.getReviews = function() {
      $http.get('https://devinternal-prf.intuit.com/apip/remote/pzl7/api/insightService/insights',{
        dataType: 'json'
      }).success(function (data) {
          console.log(data);

          var transData = [];

          for (var i=0; i<data.length; i++) {
            var myData = {};
            myData.title = data[i].content;
            try {
              myData.location = data[i].metadata.location;
              myData.sales = JSON.parse(data[i].metadata.sales);
              //myData.salesVolume = JSON.parse(data[i].metadata.salesVolume);
              //myData.salesSource = JSON.parse(data[i].metadata.salesSource);

              transData.push(myData);
            } catch (e) {
              // okay
            }
          }

          $scope.reviews = transData;
        }).error(function () {
          console.log('Error!');
        });
    };
    $scope.getReviews();

    $scope.newReview = {
      'feedType': 'CTOF',
      metadata: {}
    };

    $scope.postReview = function() {
      $scope.newReview.feedType = 'CTOF';
      $http.post('',$scope.newReview).success($scope.getReviews());
    };


  });
