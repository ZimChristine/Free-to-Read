angular.module('reading') //do I need to initialize with [] as second argument here?

  .controller('AppCtrl', () => {
    this.titleList = [];

    this.addTitle = () => {
      this.titleList.push(this.newBook);
      this.newBook = '';
    }
  })
  .component('app', {
    //templateUrl: '../templates/app.html',
    controller: 'AppCtrl'
  });

