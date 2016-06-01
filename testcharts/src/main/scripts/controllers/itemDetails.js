'use strict';
angular
    .module('RetailApp')
    .controller(
        'ItemDetailsController', ['$scope', '$http', '$location', '$route', '$routeParams', '$modal',
            function ($scope, $http, $location, $route, $routeParams, $modal) {
                $scope.proRating = "1";
                $scope.conRating = "1";
                $scope.dataLoaded = false;
                $http.get('/service/item/').success(function (data) {
                    $scope.item = data.CatalogEntryView[0];
                    $scope.conDate = new Date($scope.item.CustomerReview[0].Con[0].datePosted);
                    $scope.proDate = new Date($scope.item.CustomerReview[0].Pro[0].datePosted);
                    $scope.primaryDataImg = $scope.item.Images[0].PrimaryImage[0].image;
                    $scope.conRating = $scope.item.CustomerReview[0].Con[0].overallRating;
                    $scope.proRating = $scope.item.CustomerReview[0].Pro[0].overallRating;
                    $scope.dataLoaded = true
                    $scope.slides = $scope.item.Images[0].AlternateImages;
                    console.log($scope.slides)
                });

                $scope.quantity = 1;
                $scope.getNum = function (val) {
                    console.log(val);
                    return parseInt(val);
                }
                $scope.updatePrimaryImg = function (src) {
                    console.log(src);
                    $scope.primaryDataImg = src;
                };


            }]).directive('starRating',
    function () {
        return {
            restrict: 'A',
            template: '<ul class="rating">'
            + '	<li ng-repeat="star in stars" ng-class="star" class="glyphicon glyphicon-star grey">'
            + '</li>'
            + '</ul>',
            scope: {
                ratingValue: '=',
                max: '=',
                onRatingSelected: '&'
            },
            link: function (scope, elem, attrs) {
                console.log(scope.ratingValue);
                var updateStars = function () {
                    scope.stars = [];
                    for (var i = 0; i < scope.max; i++) {
                        scope.stars.push({
                            filled: i < scope.ratingValue
                        });
                    }
                };
                scope.$watch('ratingValue',
                    function (oldVal, newVal) {
                        if (newVal) {
                            updateStars();
                        }
                    }
                );
            }
        };
    }
);
