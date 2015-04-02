var mainController = angular.module('controllers', []);

mainController.controller('MainCtrl', function ($scope, $window, $location, mainService) {

    /*$http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
*/

	$scope.systemCurrency = $window.config.systemCurrency;
	
	$scope.getTxnAmount = function() {
		return mainService.getTxnAmount();
	};

	$scope.getRoundupTxnValue = function() {
		return mainService.getRoundupTxnValue(mainService.getTxnAmount());
	};

	$scope.getShareAmount = function() {
		return mainService.getShareAmount();
	}

	$scope.gotoCampaign = function() {
		$location.path('/campaign');
	};
	
 });

 mainController.controller('CampaignCtrl', function ($scope, mainService, ngDialog, $window, repower, $location) {

 	$scope.systemCurrency = $window.config.systemCurrency;
 	$scope.type = 0;

 	$scope.cardinfo = [
 	'5184680430000006',
 	'5184680430000014',
 	'5184680430000006'
 	]

 	$scope.dialog = {};

  	$scope.getShareAmount = function() {
		return mainService.getShareAmount();
	};

	$scope.openLocalDialog = function() {
		$scope.type = 0;
		$scope.dialog = ngDialog.open({
    		template: 'pages/local.html',
    		className: 'ngdialog-theme-plain',
    		scope: $scope
		});	
	};

	$scope.openGlobalDialog = function() {
		$scope.type = 2;
		$scope.dialog = ngDialog.open({
    		template: 'pages/global.html',
    		className: 'ngdialog-theme-plain',
    		scope: $scope
		});	
	};

	$scope.openPif = function() {
		$scope.type = 1;
		$location.path('/pif');
	};


	$scope.processTxn = function() {
		var account = $scope.cardinfo[$scope.type];
		repower.transfer(account, mainService.getShareAmount(), 'HKD').then(function(result) {
			mainService.setTxnResult(result);
			result.type = $scope.type;

			mainService.addTxnCount($scope.type);

			
			$location.path('/done');
			$scope.dialog.close();
		});

	};

	$scope.getTxnCount = function(type) {
		return mainService.getTxnCount(type);
	};

  });
  
var pifCounter = 13;

mainController.controller('PifCtrl', function($scope, $location, mainService) {
  $scope.next = function() {
    $location.path('/pifDone');
  };
  //if (pifCounter % 3 === 0) {
    
  //}
  
  $scope.pifCount = ++pifCounter;

  $scope.goVoucher = function() {
  	mainService.addTxnCount(1);
  	$location.path('/voucher');
  }
});

mainController.controller('DoneCtrl', function($scope, $location, mainService, $window) {
  $scope.name = 'Unicef';
  $scope.logo = 'images/unicef.png';
  $scope.result = mainService.getTxnResult();
  $scope.number = mainService.getTxnCount($scope.result.type);
  $scope.systemCurrency = $window.config.systemCurrency;
  $scope.amount = $scope.result.amount;
  $scope.line1 = 'Follow the movement';
  $scope.line2 = "#roundupUNICEF";

  if ($scope.result.type == 0 ) {
  	 $scope.logo = 'images/feeding_HK_logo.png';
  	 $scope.name = 'Feeding HK';
  }
  else {
  	$scope.name = 'Unicef';
  	$scope.logo = 'images/unicef_logo.png';
  }
  	

  $scope.gotoHome = function() {
  		$location.path('/');
  };



  $scope.get
});

mainController.controller('HomeCtrl', function($scope, $location) {
 

  $scope.gotoIndex = function() {
  		$location.path('/home');
  }

  $scope.gotoRoot = function() {
  		$location.path('/');
  }

});
