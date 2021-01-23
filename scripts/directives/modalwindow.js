'use strict';

/**
 * @ngdoc directive
 * @name mettaApp.directive:modalWindow
 * @description
 * # modalWindow
 */
angular.module('mettaApp')
  .directive('modalWindow', function () {
    return {
      templateUrl:'views/modal-window.html',
      restrict: 'E',
      scope:{
        show : '='
      },
      replace: true,
      transclude:true,
      link: function postLink(scope, element, attrs) {
        scope.windowStyle={};
        if(attrs.width){
          scope.windowStyle.width= attrs.width;
        }
        if(attrs.height){
          scope.windowStyle.height = attrs.height;
        }
        scope.hideModel = function(){
          scope.show = false;
        }
       // element.text('this is the modalWindow directive');
      }
    };
  });
