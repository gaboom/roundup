
var mainService = angular.module('mainService', []);
  mainService.factory('mainService', function ($window) {
   
    var cardData = {
  		cardNo :0,
  		name : '',
  		expDate : '',
  		issueDate : ''
  	};

  	$window.config = {
       systemCurrency : 'HK'
    };
  	$window.config.roundupMap = {
  	   'HK' : 10,
       'GBP' : 1,
       'JPY' : 100

  	}

  	var txnAmount = 12;


    var txnResult = {};

    var txnCount = [156 ,145, 234];


    // Public API here
    return {
      	someMethod: function () {
       		return meaningOfLife;
     	},

      	getCardData: function() {
  			return cardData;
  		},

  		setCardData: function(newCardData) {
  			cardData = newCardData;
  		},
  	
  		getTxnAmount: function() {
  			return txnAmount;
  		},

  		getRoundupTxnValue: function(value) {
        var rVal = $window.config.roundupMap[$window.config.systemCurrency];        
        return Math.ceil(value /rVal)*rVal;
		},
      getShareAmount : function() {
        return this.getRoundupTxnValue(txnAmount) - txnAmount;
      },
      getTxnResult : function() {
        return txnResult;
      },
      setTxnResult : function(result) {
        txnResult = result;
      },
      getTxnCount : function(type) {
        return txnCount[type];
      },
      addTxnCount : function(type) {
        txnCount[type] = txnCount[type]+1;
      }
    };
  });
