angular.module('reading') //do I need to initialize with [] as second argument here?

  .controller('AppCtrl', () => {
    this.purple = 'purple is NICCCCCCE!';
  })
  .component('app', {
    templateUrl: '../templates/app.html',
    controller: 'AppCtrl'
  });

