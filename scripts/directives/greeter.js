'use strict';

/**
 * @ngdoc directive
 * @name mettaApp.directive:greeter
 * @description
 * # greeter
 */
angular.module('mettaApp')
  .directive('greeter', function () {
    return {
      template: '<h2></h2>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('Directive Greeter');
      }
    };
  });
