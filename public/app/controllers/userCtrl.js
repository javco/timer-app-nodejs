

angular.module('userControllers', [])
.controller('regCtrl', function($http){
    
    console.log('testing registration controller');

    var app = this;

    this.regUser = function(regData) {
        console.log('form submitted', this.regData);
        app.errorMsg = false;
        $http.post('/api/users', this.regData).then(function(data){
            console.log(data);
            if(data.data.success){
                //Create Success Message
                app.successMsg = data.data.message;
                //Redirect to Home page
            }
            else{
                //Create Error Message
                app.errorMsg = data.data.message;
            }
        })
        
    }

});