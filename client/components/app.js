angular.module('reading')
  .controller('BookCtrl', function($http){
    console.log("INSIDE CONTROLLER", this);
    this.titleList = [
      'Narnia',
    ];

    this.newTitle = this.newTitle;

    this.addTitle = function(){
      // make post request to db
      console.log("addTitle");
      this.newTitle = this.input;

      $http.post('/')
        .then(
          this.titleList.push(this.newTitle),
          console.log('Successful POST!'),
          console.log('POST FAIL', this.titleList)
        );
    }
  })
  .component('app', {
    controller: 'BookCtrl',
    templateUrl: '../templates/app.html'
  });

