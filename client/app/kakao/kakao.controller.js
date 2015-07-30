'use strict';

angular.module('skyfly33App')
.controller('KakaoCtrl', function ($scope, $http) {
	$scope.message = 'Hello';

	// 스토리 공유 버튼을 생성합니다.
	Kakao.Story.createShareButton({
		container: '#kakaostory-share-button',
		url: 'http://www.naver.com',
		text: '카카오 개발자 사이트로 놀러오세요! #개발자 #카카오 :)'
});

	// 스토리 구독 버튼을 생성합니다.
	Kakao.Story.createFollowButton({
		container: '#kakaostory-follow-button',
		id: 'daumkakao'
	});

	$scope.submitToTestdoc = function() {
		var sampleUser = {
			'user' : 'skyfly33',
			'age' : 26
		};

		$http.post('/api/testdocs', sampleUser);
	};
});