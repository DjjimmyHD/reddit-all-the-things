angular.module('app', ['ui.router'])
  .component('home', {
    controller: 'Reddit',
    templateUrl: '/reddit.template.html'
  })
  .component('post', {
    controller: 'NewPost',
    templateUrl:'/newpost.template.html'
  })
