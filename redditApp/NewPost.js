angular.module('app')
  .controller('NewPost', NewPost)
  function NewPost($http, $state){
    vm = this

    vm.submitPost = function () {
      vm.post.votes = 17
      vm.post.date = 'meow'
      $http.post('http://localhost:7006/api/posts', vm.post)
      .then(function(response){
        console.log('got hit');
        $state.go('home')
      }).catch(function(err){
        console.log('catch hit', err);
      })
    }

  }
