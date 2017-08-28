

angular.module('userControllers', [])
.controller('regCtrl', function($http, $location, $timeout){
    
    console.log('testing registration controller');

    var app = this;

    this.regUser = function(regData) {
        console.log('form submitted', this.regData);
        
        app.loading = true;
        app.errorMsg = false;

        $http.post('/api/users', this.regData).then(function(data){
            console.log(data);
            if(data.data.success){
                app.loading = false;
                //Create Success Message
                app.successMsg = data.data.message;
                //Redirect to Home page
                $timeout(function(){
                    $location.path('/');
                }, 2000);
            }
            else{
                app.loading = false;
                //Create Error Message
                app.errorMsg = data.data.message;
            }
        })
        
    }

});