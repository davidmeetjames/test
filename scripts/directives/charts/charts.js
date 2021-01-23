'use strict';

/**
 * @ngdoc directive
 * @name mettaApp.directive:charts/charts
 * @description
 * # charts/charts
 */
angular.module('mettaApp')
  .directive('charts/charts', function () {
    return {
      template: '<div></div>',
      restrict: 'EA',
      scope: {
        config: '='
      },
      link: function postLink(scope, element, attrs) {
        if(!scope.config.type) scope.config.type='line';

        //generate c3 chart data
        var chartData = scope.config;
        chartData.bindto = '#' + attrs.id;

        var chart = c3.generate(chartData);
        scope.$on('c3.resize',function( e, data ){
             chart.resize();
        });

      }
    };
  });
