'use strict';

/**
 * @ngdoc function
 * @name mettaApp.controller:BreakdownCtrl
 * @description
 * # BreakdownCtrl
 * Controller of the mettaApp
 */
angular.module('mettaApp')
  .controller('BreakdownCtrl', ['$location',function ($location) {

    var vm= this;
    vm.form= JSON.parse(localStorage.getItem('loanUser'));
    vm.loan = JSON.parse(localStorage.getItem('loan-data'));

    vm.canShow = true;

    vm.toggle= function(){
      vm.canShow = !vm.canShow;
    }


  }]);
