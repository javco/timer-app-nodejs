

angular.module('userControllers', [])
.controller('regCtrl', function($http){
    
    console.log('testing registration controller');

    this.regUser = function(regData) {
        console.log('form submitted', this.regData);
        $http.post('/api/users', this.regData).then(function(data){
            console.log(data);
        })
        
    }

});