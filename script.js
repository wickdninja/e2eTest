(function() {
angular.module('demo', [])
.controller('DemoCtrl', DemoCtrl);


function DemoCtrl(){
  var vm = this; 
  vm.hw = "hello world";
}
  
}());
