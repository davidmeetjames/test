'use strict';

/**
 * @ngdoc function
 * @name mettaApp.controller:LoancalculatorCtrl
 * @description
 * # LoancalculatorCtrl
 * Controller of the mettaApp
 */
angular.module('mettaApp')
  .controller('LoancalculatorCtrl', ['$uibModal', '$location', function ($uibModal, $location) {
    var vm = this;

    if (localStorage.getItem("isRefresh")) {

    } else {
      localStorage.setItem("isRefresh", true);
      window.location.reload();
    }
    vm.loan = {
      principal: 0,
      intrest: 0,
      upfront: 0,
      loanRate: 0.267,
      duration: null,
    }
    vm.intrest = 0;
    vm.upfrontFee = 0;
    vm.loanRate = 0.267;

    vm.form = JSON.parse(localStorage.getItem('loanUser'));



    vm.slider = {
      value: 5000,
      min: 5000,
      max: 50000,
      options: {
        floor: 5000,
        ceil: 50000,
        translate: function (value) {
          vm.loan.principal= value;
         vm.loan.upfront = vm.upfrontFee = (vm.slider.value * 10) / 100;
         vm.loan.intrest = vm.intrest = (vm.slider.value * vm.loanRate * vm.slider2.value) / 100.0;
         localStorage.setItem('loan-data',JSON.stringify(vm.loan));
          return '$' + value
        },
      }
    };


    vm.slider2 = {
      value: 12,
      min: 12,
      max: 36,
      options: {
        floor: 12,
        ceil: 36,
        translate: function (value) {
          vm.loan.duration= value;
          vm.loan.intrest = vm.intrest = (vm.slider.value * vm.loanRate * vm.slider2.value) / 100.0;
          localStorage.setItem('loan-data',JSON.stringify(vm.loan));
          return value + ' months'
        },
      }
    };

    vm.decline = function () {

      $location.path('/CoronavirusReliefOptions');

    }

    vm.openSummary = function () {
      console.log('Clicked ');

      $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title-bottom',
        ariaDescribedBy: 'modal-body-bottom',
        templateUrl: 'stackedModal.html',
        size: 'sm',
        controller: function ($scope) {
          $scope.name = 'bottom';
        }
      });
    }

  }]);
