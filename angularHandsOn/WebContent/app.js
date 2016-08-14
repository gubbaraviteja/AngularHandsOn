(function() {

	var config = {
		apiKey : "AIzaSyCT20vdeQM_c-szUoBaLYmp1nn9IVIsNQQ",
		authDomain : "learnangular-ff01c.firebaseapp.com",
		databaseURL : "http://learnangular-ff01c.firebaseio.com",
		storageBucket : "learnangular-ff01c.appspot.com",
	};
	firebase.initializeApp(config);

	var plunker = angular.module('plunker', [ 'firebase' ]).controller('MyCtrl',
			function($firebaseObject) {
				const
				rootRef = firebase.database().ref().child('angular');
				const
				ref = rootRef.child('object');
				this.object = $firebaseObject(ref);
			});

})();
