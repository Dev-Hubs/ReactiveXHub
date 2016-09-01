'use strict';

/* App Module */
var RxHubApp = angular.module('RxHubApp', [
  'ngRoute',
  'RxHubController'
]);

RxHubApp.config(['$routeProvider',
  function($routeProvider) {
      $routeProvider.
      when('/observable', {
          templateUrl: 'prerendered/observable/default.html',
      }).
      when('/observable/create', {
          templateUrl: 'prerendered/observable/create.html',
          controller: 'buttonsController',
          data: {
              prefill: 2,
              href_ext: "https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/merge.md"
          }
      }).

      when('/operators', {
          templateUrl: 'prerendered/operators/default.html',
      }).
      when('/operators/transforming', {
          templateUrl: 'prerendered/operators/transforming/default.html',
      }).
      when('/operators/transforming/buffer', {
          templateUrl: 'prerendered/operators/transforming/buffer.html',
          controller: 'buttonsController',
          data: {
              prefill: 2,
              href_ext: "https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/merge.md"
          }
      }).
      when('/operators/transforming/flatMap', {
          templateUrl: 'prerendered/operators/transforming/flatMap.html',
          controller: 'buttonsController',
          data: {
              prefill: 2,
              href_ext: "https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/merge.md"
          }
      }).
      when('/operators/transforming/groupBy', {
          templateUrl: 'prerendered/operators/transforming/groupBy.html',
          controller: 'buttonsController',
          data: {
              prefill: 2,
              href_ext: "https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/merge.md"
          }
      }).
      when('/operators/transforming/map', {
          templateUrl: 'prerendered/operators/transforming/map.html',
          controller: 'buttonsController',
          data: {
              prefill: 1,
              href_ext: "https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/merge.md"
          }
      }).
      when('/operators/transforming/scan', {
          templateUrl: 'prerendered/operators/transforming/scan.html',
          controller: 'buttonsController',
          data: {
              prefill: 1,
              href_ext: "https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/merge.md"
          }
      }).
      when('/operators/filtering', {
          templateUrl: 'prerendered/operators/combining/default.html',
      }).
      when('/operators/filtering/debounce', {
          templateUrl: 'prerendered/operators/filtering/debounce.html',
          controller: 'buttonsController',
          data: {
              prefill: 1,
              href_ext: "https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/merge.md"
          }
      }).
      when('/operators/filtering/distinct', {
          templateUrl: 'prerendered/operators/filtering/distinct.html',
          controller: 'buttonsController',
          data: {
              prefill: 1,
              href_ext: "https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/merge.md"
          }
      }).
      when('/operators/filtering/elementAt', {
          templateUrl: 'prerendered/operators/filtering/elementAt.html',
          controller: 'buttonsController',
          data: {
              prefill: 1,
              href_ext: "https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/merge.md"
          }
      }).
      when('/operators/filtering/filter', {
          templateUrl: 'prerendered/operators/filtering/filter.html',
          controller: 'buttonsController',
          data: {
              prefill: 1,
              href_ext: "https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/merge.md"
          }
      }).
      when('/operators/filtering/first', {
          templateUrl: 'prerendered/operators/filtering/first.html',
          controller: 'buttonsController',
          data: {
              prefill: 1,
              href_ext: "https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/merge.md"
          }
      }).
      when('/operators/filtering/ignoreElements', {
          templateUrl: 'prerendered/operators/filtering/ignoreElements.html',
          controller: 'buttonsController',
          data: {
              prefill: 1,
              href_ext: "https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/merge.md"
          }
      }).
      when('/operators/filtering/last', {
          templateUrl: 'prerendered/operators/filtering/last.html',
          controller: 'buttonsController',
          data: {
              prefill: 1,
              href_ext: "https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/merge.md"
          }
      }).
      when('/operators/combining', {
          templateUrl: 'prerendered/operators/combining/default.html',
      }).
      when('/operators/combining/and_then_when', {
          templateUrl: 'prerendered/operators/combining/and_then_when.html',
          controller: 'buttonsController',
          data: {
              prefill: 3,
              href_ext: "https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/merge.md"
          }
      }).
      when('/operators/combining/merge', {
          templateUrl: 'prerendered/operators/combining/merge.html',
          controller: 'buttonsController',
          data: {
              prefill: 2,
              href_ext: "https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/merge.md"
          }
      }).
      when('/operators/combining/startWith', {
          templateUrl: 'prerendered/operators/combining/startWith.html',
          controller: 'buttonsController',
          data: {
              prefill: 1,
              href_ext: "https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/merge.md"
          }
      }).
      when('/operators/combining/zip', {
        templateUrl: 'prerendered/operators/combining/zip.html',
        controller: 'buttonsController',
        data: {
            prefill: 2,
            href_ext: "https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/merge.md"
        }
      }).
      when('/operators/error_handling', {
          templateUrl: 'prerendered/operators/error_handling/default.html',
      }).
      when('/operators/error_handling/catch', {
          templateUrl: 'prerendered/operators/error_handling/catch.html',
          controller: 'buttonsController',
          data: {
              prefill: 2,
              href_ext: "https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/merge.md"
          }
      }).
      when('/operators/error_handling/retry', {
          templateUrl: 'prerendered/operators/error_handling/retry.html',
          controller: 'buttonsController',
          data: {
              prefill: 2,
              href_ext: "https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/merge.md"
          }
      }).
      when('/operators/conditional', {
          templateUrl: 'prerendered/operators/conditional/default.html',
      }).
      when('/operators/conditional/skipUntil', {
          templateUrl: 'prerendered/operators/conditional/skipUntil.html',
          controller: 'buttonsController',
          data: {
              prefill: 2,
              href_ext: "https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/merge.md"
          }
      }).
      when('/operators/conditional/takeUntil', {
          templateUrl: 'prerendered/operators/conditional/takeUntil.html',
          controller: 'buttonsController',
          data: {
              prefill: 2,
              href_ext: "https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/merge.md"
          }
      }).
      when('/operators/creating', {
          templateUrl: 'prerendered/operators/creating/default.html',
      }).
      when('/single', {
          templateUrl: 'prerendered/single/default.html',
      }).
      when('/subject', {
          templateUrl: 'prerendered/subject/default.html',
      }).
      when('/scheduler', {
          templateUrl: 'prerendered/scheduler/default.html',
      }).
      otherwise({
          templateUrl: 'prerendered/home.html'
      });
  }]);
