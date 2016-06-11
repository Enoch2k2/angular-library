var Tabs = {
  transclude: true,
  template: [
    '<div class="tabs">',
      '<ul class="tabs__list">',
        '<li ng-repeat="tab in $ctrl.tabs" ng-click="$ctrl.selectTab($index);">',
          '<a class="">{{tab.label}}</a>',
        '</li>',
      '</ul>',
      '<ng-transclude></ng-transclude>',
    '</div>'
  ].join(''),
  controller: function($scope){
    this.tabs = [];

    this.addTab = function(tab){
      tab.selected = this.tabs.length === 0 ? true : false;
      this.tabs.push(tab);
    };

    this.selectTab = function selectTab(index){
      for (var i = 0; i < this.tabs.length; i++) {
        this.tabs[i].selected = false;
      }
      this.tabs[index].selected = true;
    };
  }
}

angular
  .module('app')
  .component('tabs', Tabs);
