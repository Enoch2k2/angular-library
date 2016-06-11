var Tab = {
  transclude: true,
  bindings: {label: '@'},
  require: { tabs: '^tabs' },
  template: [
    '<div class="tabs__content" ng-if="$ctrl.selected">',
      '<ng-transclude></ng-transclude>',
    '</div>'
  ].join(''),
  controller: function($scope){
    thisTab = this;
    this.$onInit = function(){
      this.tabs.addTab(thisTab);
    };
  }
}

angular
  .module('app')
  .component('tab', Tab);
