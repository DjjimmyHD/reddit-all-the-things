angular.module('app')
  .controller('Reddit', Reddit)

function Reddit($http) {
  vm = this
vm.$onInit = function() {
  console.log('init');
  $http.get('http://localhost:8080/api/posts')
  .then(function(response){
    console.log(response);
    vm.posts = response.data
    console.log(vm.posts);
  })


  vm.editPost = function() {

  }
    vm.deletePost = function(e, post) {
     let meow =  vm.posts[vm.posts.indexOf(post)].id
      $http.delete('http://localhost:8080/api/posts/'+ meow)
      e.preventDefault()

      vm.posts.splice(vm.posts.indexOf(post), 1)
    }
  }
}
