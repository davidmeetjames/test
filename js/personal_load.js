
var personal_loan = angular.module('personal_loan', ['rzSlider']);


personal_loan.controller('PersonalLoanController', PersonalLoanController);

function PersonalLoanController($scope) {
    var vm = this;
    vm.totalAmountPayable = 0;
    vm.repayment = 0;

    vm.priceSlider = {
        min:10000,
        max:25000,
        value: 10000,
        options: {
            floor: 10000,
            ceil: 25000
        }
    }

    vm.priceSlider2 = {
        min:12,
        max:60,
        value: 12,
        options: {
            floor: 12,
            ceil: 60
        }
    }

    $scope.$on('slideEnded', function() {
        var intrest= vm.priceSlider.value * 0.0092 * vm.priceSlider2.value;
        vm.totalAmountPayable = vm.priceSlider.value  + intrest;

        vm.repayment = vm.totalAmountPayable / vm.priceSlider2.value;
      })

}