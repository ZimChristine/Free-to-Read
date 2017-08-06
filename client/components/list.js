angular.module('reading')
.controller('ListCtrl', function() {

})
.component('titleList', {
  bindings: {
    titles: '<'
  },
  templateUrl: '../templates/list.html',
  controller: 'ListCtrl'
})