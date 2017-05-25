angular.module('app')
  .controller('EditPost', EditPost)
  function EditPost($http, $state){
    vm = this

    vm.$onInit = function(){

      vm.post = $state.params.post
      console.log('post', vm.post);


    vm.updatePost = function(post) {
      $http.patch('http://localhost:8080/api/posts/' + vm.post.id, post)
      .then(function(response){
        console.log('got hit');
        $state.go('home')
      }).catch(function(err){
        console.log('catch hit', err);

      })
      }
    }
  }
