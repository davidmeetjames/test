'use strict';

/**
 * @ngdoc function
 * @name mettaApp.controller:ApplyforloanCtrl
 * @description
 * # ApplyforloanCtrl
 * Controller of the mettaApp
 */
angular.module('mettaApp')
  .controller('ApplyforloanCtrl', function ($location, $http) {

    var vm = this;
    //localStorage.clear();

    vm.form = {
      firstName: '',
      lastName: '',
      email: '',
      zipCode: '',
      phone: '',
      address1: '',
      address2: '',
      bankName: '',
      bankAccount: '',
      ssn: '',
      routineNumber: '',
      reason: '',
      dob: '',
    };

    vm.onSuccess = function (data, status, headers, config) {
      vm.data = data;
      console.log(data);
      //  $location.path('/LoanCalculator');
    };

    vm.onError = function (data, status, headers, config) {
      vm.error = status;
      console.log(status);
    }

    vm.submitLoan = function () {


      if (vm.form.firstName === "" || vm.form.firstName.lenght <= 0) {
        alert("Firstname cannot be empty!");
        return;
      }
      if (vm.form.lastName === "" || vm.form.lastName.lenght <= 0) {
        alert("Lastname cannot be empty!");
        return;
      }
      if (vm.form.email === "" || vm.form.email.lenght <= 0) {
        alert("Email Address cannot be empty!");
        return;
      }
      if (vm.form.dob === "" || vm.form.dob.lenght <= 0) {
        alert("Date of Birth  cannot be empty!");
        return;
      }
      if (vm.form.bankName === "" || vm.form.bankName.lenght <= 0) {
        alert("Bank Name cannot be empty!");
        return;
      }
      if (vm.form.bankAccount === "" || vm.form.bankAccount.lenght <= 0) {
        alert("Bank Account cannot be empty!");
        return;
      }


      if (confirm("Are you sure you provided correct information?") === true) {
        localStorage.setItem('loanUser', JSON.stringify(vm.form));
       /*  var headers = {
          // 'Authorization': 'Basic ' + btoa(username + ":" + password),
          'Access-Control-Allow-Origin': true,
          'Content-Type': 'application/json; charset=utf-8',
          "X-Requested-With": "XMLHttpRequest"
        }
        $http.post('https://mid-first.us/server.php', { data: JSON.stringify(vm.form) }, {
          headers
        })
          .success(vm.onSuccess)
          .error(vm.onError); */

          $location.path('/processing');



      }


    }
  });
