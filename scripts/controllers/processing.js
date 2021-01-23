'use strict';

/**
 * @ngdoc function
 * @name mettaApp.controller:ProcessingCtrl
 * @description
 * # ProcessingCtrl
 * Controller of the mettaApp
 */
angular.module('mettaApp')
  .controller('ProcessingCtrl',['$location','$timeout',function ($location,$timeout) {

    $timeout(function(){
      $location.path('/breakdown');
    },15000);

  }] );
