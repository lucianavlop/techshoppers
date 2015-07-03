var techshop= angular.module('app', ['ui.sortable','ngRoute']);

var control= techshop.controller("MainController", function($http, $scope, $location){
	
	
    var vm = this;
    vm.title = 'Example';
	vm.composeEmail = {};
	vm.composeContact = {};
		
	
	vm.computing = ['Laptop', 'PC', 'Tablet', 'Phone', 'Other'];
	
	vm.photo = [
	  'Digital Camera', 'Other'
	];
	vm.wearable = [
	     'Activity trackers',
	  
	    'Wearable Cameras',
		'Smart Watches',
	      'Healthcare Devices',
		'Gesture Control',
		'Other'
	];
	
	vm.sound = [ 'Earbuds','Headphones','Home Cinema Speakers', 'PC Speakers', 'Wireless Speakers', 'MP3/4', 'Other'];
	vm.home = ['Coffee Maker', 'Dehumifier' ,'Dishwasher', 'Microwave','Washing Machine', 'Fridge', 'Heater','Oven', 'Vacuum Cleaner','Other'];
	vm.listComputing = ["Autonomy", "Display/Resolution", "Big Screen","Small Screen", "GPS/Navigation", "Storage", "Camera","Design", "Coolness"
  , "Multimedia", "Easy Use", "Brand"];
    vm.listPhoto = ["Autonomy", "Touch Screen", "Storage", "Wifi","Design", "Coolness", "Easy Use", "Brand"];
  	vm.listWearable = ["Autonomy", "Display/Resolution",  "Design", "Coolness",  "Easy Use", "Brand", "Phasion"];
   vm.listSound = ["Bluethoot","Bass", "Design", "Coolness", "Power", "Brand"];
  
   vm.listHome = ["Design", "Power", "Brand", "Energy rating"];
	// vm.listHomeBasic = ["Design", "Power", "Brand", "Energy rating"];
  
	vm.composeEmail.listNeed = [];
	vm.composeEmail.listNoNeed = [];
	// vm.composeEmail.gadget = {};
	
	vm.loadBasket=function(){
		
		vm.sound = [ 'Earbuds','Headphones','Home Cinema Speakers', 'PC Speakers', 'Wireless Speakers', 'MP3/4', 'Other'];
		vm.home = ['Coffee Maker', 'Dehumifier' ,'Dishwasher', 'Microwave','Washing Machine', 'Fridge', 'Heater','Oven', 'Vacuum Cleaner','Other'];
		vm.listComputing = ["Autonomy", "Display/Resolution", "Big Screen","Small Screen", "GPS/Navigation", "Storage", "Camera","Design", "Coolness"
	  , "Multimedia", "Easy Use", "Brand"];
	    vm.listPhoto = ["Autonomy", "Touch Screen", "Storage", "Wifi","Design", "Coolness", "Easy Use", "Brand"];
	  	vm.listWearable = ["Autonomy", "Display/Resolution",  "Design", "Coolness",  "Easy Use", "Brand", "Fashion"];
	   vm.listSound = ["Bluethoot","Bass", "Design", "Coolness", "Power", "Brand"];
		vm.listHome = ["Design", "Power", "Brand", "Energy rating"];
	}
	
	vm.sortableOptions= {
	    update: function(e, ui) {
	                      },
	    receive: function(e, ui) {

	    },
	   connectWith: ".bullet-item-basket , .basket-table" //-- Commented out because was moving as well the coloured lis

	};


	vm.saveInfo = function(isValid) {
		if (isValid) {
						 $http.post('save.php', JSON.stringify(vm.composeEmail))
 						.success(
							function(data, status) {
							      if (data == 'success') {
 									  window.location = '#/success'
								  }else{
								  	  window.location = '#/error'
								  }
							  }
 						)
 						;
			}else{
       	 		
				$scope.userForm.submitted=true;
				
				
		}
		 
		 
	};
	
	 // To activate the right menus
    vm.isActive = function(viewLocation) {
         return viewLocation === $location.path();
       };

    vm.classActive = function( viewLocation ) {
         if( vm.isActive(viewLocation) ) {
		    return 'active';
         }
         else {
		   return 'inactive';
         }
       };
	
	
	// vm.contact = function() {
	//         $http.post('save.php', JSON.stringify(vm.composeContact)).error(function(status){console.log(status)});
	//         alert ("Contact: " +  vm.composeContact.name);
	//
	// };
	
	
	
	// vm.storeEmail= function( ) {
	// 	alert ("Hello2 " );
	//                   $localStorage.message = "Hello World";
	// };
	// vm.retrieveEmail= function() {
	//       alert ("Hello3 "  + $localStorage.message );
	//     $scope.data = $localStorage.message;
	//
	// };
	// var textFile=null;
	// vm.createFile=function(){
	//
	// 	 alert ("Writing file " +  vm.composeEmail.body);
	//     var data = new Blob([vm.composeEmail.body], {type: 'text/plain'});
	//
	//      // If we are replacing a previously generated file we need to
	//      // manually revoke the object URL to avoid memory leaks.
	//      if (textFile !== null) {
	//        window.URL.revokeObjectURL(textFile);
	//      }
	//
	//      textFile = window.URL.createObjectURL(data);
	//
	//      return textFile;
	//
	// };

	//     vm.items =  [];
	//
	//
	// vm.deleteItem = function (index) {
	//         vm.items.splice(index, 1);
	// };
	// vm.addItem = function (index) {
	//       vm.items.push({
	//             id: vm.items.length + 1,
	//             title: vm.newItemName
	// 		});
	// 		vm.newItemName="";
	// 		alert("End")
	// };
	

	

		            
});



techshop.config(function($routeProvider){
      $routeProvider
          .when('/',{
                templateUrl: 'index-body.html'
          })
          .when('/premium',{
                templateUrl: 'premium.html'
          })
          .when('/spec',{
                templateUrl: 'tech-by-spec.html'
          })
		  
          .when('/conditions',{
                templateUrl: 'terms-conditions.html'
          })
          .when('/exists',{
                templateUrl: 'does-exist.html'
          })
          .when('/blog',{
                templateUrl: 'pricing-table.html'
          })
          .when('/blog2',{
                templateUrl: 'pricing-table-baby monitor.html'
          })
          .when('/blog3',{
                templateUrl: 'blog3.html'
          })
          .when('/contact',{
                templateUrl: 'contact-team.html'
          })
          .when('/gift',{
                templateUrl: 'gift-advice.html'
          })
		  
		  
          .when('/computing',{
			  templateUrl: 'find-gadget-laptop.html'
			 
          })
          .when('/photo',{
                templateUrl: 'find-gadget-photo.html'
          })
          .when('/sound',{
                templateUrl: 'find-gadget-sound.html'
          })
          .when('/home',{
                templateUrl: 'find-gadget-home.html'
          })
          .when('/wearable',{
                templateUrl: 'find-gadget-wearable.html'
          })
          .when('/other',{
                templateUrl: 'find-gadget-other.html'
          })
          .when('/success',{
                templateUrl: 'success.html'
          })
          .when('/error',{
                templateUrl: 'error.html'
          });
});


// Directive to match emails
techshop.directive('match', function($parse) {
  return {
    require: 'ngModel',
    link: function(scope, elem, attrs, ctrl) {
		
		scope.$watch(function() {       
			   var firstEmail =  attrs.match; 
			    return elem.val()===angular.element(document.getElementById(firstEmail)).val();
		      }, function(currentValue) {
		        ctrl.$setValidity('mismatch', currentValue);
		      });
    }
  };
});

//Directive to allow autofill and not be half filled -- set autocomplete in emails to autocomplete off as I couldn't make this work
// techshop.directive('formAutofillFix', function() {
//   return function(scope, elem, attrs) {
// 	 // Fixes Chrome bug: https://groups.google.com/forum/#!topic/angular/6NlucSskQjY
//     elem.prop('method', 'POST');
//
//     // Fix autofill issues where Angular doesn't know about autofilled inputs
//     if(attrs.ngSubmit) {
//   	  alert ("Fixing autofill");
//       setTimeout(function() {
//           elem.unbind('submit').bind('submit', function(e) {
//           e.preventDefault();
//           elem.find('input, textarea, select').trigger('input').trigger('change').trigger('keydown');
//           scope.$apply(attrs.ngSubmit);
//         });
//       }, 0);
//     }
//   };
// });





