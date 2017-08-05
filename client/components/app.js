angular.module('reading') //do I need to initialize with [] as second argument here?

  .controller('BookCtrl', () => {
    this.titleList = [];

    this.addTitle = () => {
      this.titleList.push(this.newTitle);
      this.newTitle = '';
    }
  })
  .component('books', {
    templateUrl: '../templates/app.html',
    controller: 'AppCtrl'
  });

