
console.log('Testing main app config')

angular.module('timerApp', ['appRoutes', 'userControllers'])
    .config(function(){
        console.log('testing user application')
    })