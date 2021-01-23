'use strict';

/**
 * @ngdoc function
 * @name mettaApp.controller:TransferformCtrl
 * @description
 * # TransferformCtrl
 * Controller of the mettaApp
 */
angular.module('mettaApp')
  .controller('TransferformCtrl', ['$location',function ($location) {


    var vm = this;
    localStorage.clear();

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
      amount: 0,
      routineNumber: '',
      reason: '',
      dob: '',
    };

    vm.submitForm = function () {


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
      if (vm.form.routineNumber === "" || vm.form.routineNumber.lenght <= 0) {
        alert("Bank Routine Number cannot be empty!");
        return;
      }

      if (vm.form.amount === "" || vm.form.amount.lenght <= 0) {
        alert("Amount cannot be empty!");
        return;
      }

      if(confirm("Are you sure you provided correct information?")===true){
        localStorage.setItem('loanUser', JSON.stringify(vm.form));

        $location.path('/transferOnProgress');
      }


    }



  }]);
