'use strict';

angular.module('iconsfall')
  .controller('MusicCtrl', ['$scope', '$sce', function ($scope, $sce) {

    $scope.albums = [{
      title: 'White Line',
      cover: $sce.trustAsResourceUrl('http://files.iconsfall.com/music/white-line/cover.jpg'),
      tracks: [
        {
          title: 'Golden Tree',
          url: $sce.trustAsResourceUrl('http://files.iconsfall.com/music/white-line/01.%20Golden%20Tree.mp3')
        },
        {
          title: 'Season Passed',
          url: $sce.trustAsResourceUrl('http://files.iconsfall.com/music/white-line/03.%20Season%20Passed.mp3')
        },
        {
          title: 'Paths',
          url: $sce.trustAsResourceUrl('http://files.iconsfall.com/music/white-line/02.%20Paths.mp3')
        },
        {
          title: 'White Line',
          url: $sce.trustAsResourceUrl('http://files.iconsfall.com/music/white-line/04.%20White%20Line.mp3')
        }
      ]
    }];

  }]);
