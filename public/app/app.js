
console.log('Testing main app config')

angular.module('timerApp', ['appRoutes', 'userControllers', 'userServices'])
    .config(function(){
        console.log('testing user application')
    })