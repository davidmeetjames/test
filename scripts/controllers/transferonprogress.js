'use strict';

/**
 * @ngdoc function
 * @name mettaApp.controller:TransferonprogressCtrl
 * @description
 * # TransferonprogressCtrl
 * Controller of the mettaApp
 */
angular.module('mettaApp')
  .controller('TransferonprogressCtrl', ['$location','$timeout', function ($location,$timeout) {
    var vm = this;

    $timeout(function(){
      $location.path('/transferEnd');
    },20000);

  }]);
