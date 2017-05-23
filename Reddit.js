angular.module('app')
  .controller('Reddit', Reddit)

function Reddit() {
  vm = this
vm.$onInit = function() {
  vm.posts = [
    {
    title: 'hello',
    body: 'check me out I am a body of a post',
    author: 'James Schultz',
    imageUrl: 'https://pbs.twimg.com/profile_images/756261447236104194/H1Wfs_pK.jpg'
    },
    {
    title: 'second',
    body: 'check me out I am a body of a post',
    author: 'James Schultz',
    imageUrl: 'http://i.dailymail.co.uk/i/pix/2017/01/16/20/332EE38400000578-4125738-image-a-132_1484600112489.jpg'
    }]
  vm.submitPost = function () {
    vm.posts.push(vm.post)
    delete vm.post

    }
    vm.deletePost = function(e, post) {
      e.preventDefault()

      vm.posts.splice(vm.posts.indexOf(post), 1)
    }
  }
}
