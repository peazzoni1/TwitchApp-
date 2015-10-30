var app = angular.module('twitchApp', []);

app.controller('UserCtrl', ['$http', function($http) {
 var vm = this; 
 vm.userData = [];
  
  vm.getUser = function() {
  $http.get('https://api.twitch.tv/kraken/channels/' + vm.newUser).success(function(data) {
    vm.userData.push({"game" : data.game, "name" : data.display_name, "logo" : data.logo});
    });
    vm.newUser = ' ';
  }
}]);