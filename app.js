var app = angular.module('twitchApp', []);

app.controller('UserCtrl', ['$http', function($http) {
 var vm = this; 
//initialize empty array for table 
 vm.userData = [];
  //make API call and push json data to array
  vm.getUser = function() {
  $http.get('https://api.twitch.tv/kraken/streams/' + vm.newUser).success(function(data) {
      if (data.stream !== null) {  
    
vm.userData.push({"game" : data.stream.game, "name" :    data.stream.channel.display_name, "logo" : data.stream.channel.logo, "status" : "fa fa-check"});
    
    vm.newUser = ' ';
}
  else { 
      
      $http.get(data._links.channel).success(function(data) { 
      vm.userData.push({"game" : data.game, "name" : data.name, "logo" : data.logo, "status" : "fa fa-exclamation" });
      });
       
      vm.newUser = ' ';
      } 
  });
  }                                                                         
}]);
      
      