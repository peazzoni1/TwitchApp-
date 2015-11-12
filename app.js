var app = angular.module('twitchApp', []);

app.controller('UserCtrl', ['$http', function ($http) {
    var vm = this;
    //initialize empty array for table 
    vm.userData = [];
    //make API call and push json data to array when submit button is clicked
    vm.getUser = function () {
        $http.get('https://api.twitch.tv/kraken/streams/' + vm.newUser).success(function (data) {
            if (data.stream !== null) { //get data if stream is live

                vm.userData.push({
                    "game": data.stream.game,
                    "name": data.stream.channel.display_name,
                    "logo": data.stream.channel.logo,
                    "url": data.stream.channel.url,
                    "status": "fa fa-check"
                });

                vm.newUser = ' '; // reset submit field 
            } else { //get offline data 
                $http.get(data._links.channel).success(function (data) {
                    vm.userData.push({
                        "game": data.game,
                        "name": data.name,
                        "url": data.url,
                        "logo": data.logo,
                        "status": "fa fa-exclamation"
                    });
                });

                vm.newUser = ' ';
            }
        });
    }
    vm.showAll = function(item) { 
    return item ==="fa fa-check" || item === "fa fa-exclamation";
    }
}]);