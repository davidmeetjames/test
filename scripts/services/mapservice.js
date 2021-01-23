'use strict';

/**
 * @ngdoc service
 * @name mettaApp.mapService
 * @description
 * # mapService
 * Service in the mettaApp.
 */
angular.module('mettaApp')
  .service('mapService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var positions = [
      { lat: -23.630153, lng: -46.563964 },
      { lat: -23.625828, lng: -46.571946 },
      { lat: -23.634006, lng: -46.576066 },
      { lat: -23.624883, lng: -46.564209 }
    ];

    return {
      all: function () {
        return positions;
      },
      message: function(){
        return 'Hello from map Service at '+ Date.now();
      }
    }
  });
