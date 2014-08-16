'use strict';

/**
 * @ngdoc function
 * @name paperclipApp.controller:ConnectorCtrl
 * @description
 * # ConnectorCtrl
 * Controller of the paperclipApp
 */
angular.module('paperclipApp')
// .factory('socketio', function($scope, connectorSettings, socketFactory) {

//     var port = connectorSettings[$scope.$index].port;
//     console.log('connecting with ' + port);

//     return socketFactory({
//         ioSocket: window.io.connect('http://localhost:' + port)
//     });
// })
.controller('ConnectorCtrl', function($scope, connectorSettings, socketFactory) {

    console.log(socketFactory);
    // specialize controller with configurations
    var config = connectorSettings[$scope.$index];


    this.connected = false;
    this.connect = function() {
        this.connected = true;
        return socketFactory({
            ioSocket: window.io.connect('http://localhost:' + config.port)
        });
    };

    this.name = config.name;
});