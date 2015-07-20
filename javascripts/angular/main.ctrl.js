var techshop= angular.module('app', ['ui.sortable','ngRoute','pascalprecht.translate', 'ngLocale']);

var control= techshop.controller("MainController", function($http, $scope, $location, $locale, $translate){
	
	
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
	
	vm.sound = [ 'Headphones','Earbuds','Home Cinema Speakers', 'PC Speakers', 'Wireless Speakers', 'MP3/4', 'Other'];
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
	
	
   	vm.changeLanguage= function(key){
   		// alert(key);
   		  $translate.use(key);
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


techshop.config(['$translateProvider', function ($translateProvider) {
	

  $translateProvider.translations('en', {
	   'HOME':'HOME',
	  'EXISTS':'DOES THIS EXIST?',
	  'SPEC':'TECH BY SPEC',
	  
	  'GIFT':'GIFT ADVICE',
	  'PREMIUM':'PREMIUM SHOPPING',
	  'GADGETWEEK':'Gadget of the Week',
	  'MAIN':'We find the perfect product for you!',
	  'MAIN2':'Your Technology Personal Shoppers',
	  'TITLE1': 'Are you looking for your new technology purchase? ',
	  'TITLE2':  'Do you need the help of an expert or mainly want us to do all the research for you?',
	  'TITLE3': " We focus on your needs, there are a lot of options out there.... Let's find the one suitable for you at the best price.",
	  'TITLE4': "Tailored, personalised search. Check the sections below and ask us advice. For a limited period  ",
	   'TITLE5': "IT''S FREE !!!",
      'EX':'Examples',
	 'FOO': 'This is a paragraph',
	  'SOUND':'Sound',
	  'PHOTO':'Photo',
	  'COMPUTING':'Computing & Phone',
	  'OTHER':'Other',
	  'WEARABLE':'Wearable Technology',
	  'HOUSE':'House',
	   'WE':'We',
	  'CONTACT':'Contact Us',
	    'CONTACT1':'Contact',
	   'YOU':'You',
	  'YOUR':'Your',
	  'MOREINFO':'A BIT MORE INFO',
	   'SUBMIT1':'Find Perfect Match',
	  'SUBMIT2':'Find Perfect Gift',
	  'SUBMIT3':'Contact',
	  'BUDGET':'Budget',
	  
	  
	    'REQUIRED': 'REQUIRED',
	  'NAME': 'Name',
	  'CITY': 'City, Town',
	  'COUNTRY': 'Country',
	  'AMOUNT': 'Amount or range',
	   'MESSAGE': 'Message',
	  
	  'AGE': 'Age',
	  'PROF': 'Profession',
	   'HOB': 'Hobbies',
	  'DRAG_DROP':' Drag and Drop into the bucket what it is important for you ordered by preference (optional)',
	  
	 //PERFECT MATCH
	  'PMLAPTOP':' Looking for a new phone or laptop? Tell us what you need, we are here for YOU.',
	 
	   'PMSOUND':' Speakers, Home Theather...you can ask us about anything to do with music and sound. We have specialist that look for the best sound for every budget.',
	'PMPHOTO':' Are you looking to buy a digital camera? We find the best camera for your needs.',
	  'PMHOUSE':'Tehcnology is as well in our house appliances. Are you looking to change your fridge, washing machine, IoT etc? We find the best deal for you.',
	  'PMWEARABLE':'Do you need inmediate access to information? Are you looking for a new tracking fitness device or a fashion statement? Tell us what you need.',
	  'PMOTHER':'The gadget that you are looking for is not in the main menu? Please let us know what it is...We try to get it for you, as crazy as it might sound like.',
	 
	   // Exists
	  
  	 'EXISTS1':'We find the solution for you!',
  	 'EXISTS2':'Are you wondering if a specific product or tech solution exists?',
	  'EXISTS3':' Are you trying to improve your day to day or how your business works?',
	 
	 'EXISTS4':"Describe",
	 
  	 'EXISTS5':" what you trying to solve, ",
	 'EXISTS6': "we research ",
	 'EXISTS7':" the solution for you, maybe you think it is not possible but we might find the way to make it reality. ",
	 'EXISTS8':"We focus in solving problems for you or your business to make your life easier. Sometimes the solution is closer and cheaper than you think. ",
      'EXISTS9': "Your crazy gadgets search go in this category too!",
	  
	   'EXISTS10':' What is the problem that you need to solve?',
	  // Premium
	  
  	'PREM1':'Premium Shopping Experience',
  	'PREM2':'Technology makes your life easier but sometimes is dificult to find the right solution. ',
  	'PREM3':"Do you need our dedicated personal assistance? Do you have an important decision to make and need guidance? Contact us and hopefully we can provide the personal advice that you need . ",
	 	'PREM4'  :'How can we help?',
	 	  // Tech by spec
  'SPEC1':'Get only the best!',
  'SPEC2':'Technology By Specifications',
  'SPEC3':"Do you already know the specifications that you want for your next gadget but don't have time to research? We will find the best ones for you at the best price.  ",
	 'SPEC4':"Or do you already have a gadget in mind? Tell us which one and we let you know if it is a good choice and advice you with others that you could get at the same price.",
	  'GADGETSPEC':'Gadget Spec',
	  //GIFT
	  'GIFT1':'Gift the best in tech!',
	  'GIFT2':'Gift Advice',
 	 'GIFT3':'Are you not really into technology but you would like to gift somebody an special tech gift? We are here to help!',
  	'GIFT4':'We find for you an original gadget to gift. We give you ideas and best prices, including where to find it in a physical shop if you are not really into shopping online.', 
 	 'GIFT5':'You just need to describe the person that you want to surprise and we do all the hard work to find the perfect present at the perfectprice :)',
	  'GIFT6':'How you want to surprise him/her?',
	  'TEAM':'The Team'
  });
  
  $translateProvider.translations('es', {
	   'HOME':'YTS',
	  'EXISTS':'EXISTE?',
	  'SPEC':'SÉ LAS ESPECIFICACIONES',
	  
	  'GIFT':'REGALOS ESPECIALES',
	  'PREMIUM':'PREMIUM',
	   'GADGETWEEK':'Gadget de la semana',
	  'MAIN':'Encontramos el mejor producto para ti!',
	  'MAIN2':'Tu Personal Shopper de tecnología',
	  'TITLE1': ' Dinos lo qué necesitas. Nosotros lo encontramos ',
	  'TITLE2':  'Ahorra tiempo y dinero ',
	  'TITLE3': " Hacemos búsquedas personalizadas, nos centramos en tus necesidades, te escuchamos....y encontramos lo mejor para ti al mejor precio",
	  'TITLE4': " Echa un vistazo a las siguientes categorías y déjanos aconsejarte. Por un  periodo limitado  ",
	   'TITLE5': "ES GRATIS !!!",
    'FOO': 'This is a paragraph',
	  'SOUND':'Sonido',
	  'PHOTO':'Fotografía',
	  'COMPUTING':'Ordenadores y Telefonía',
	  'OTHER':'Otros',
	  'WEARABLE':'Tecnología ponible',
	  'HOUSE':'Casa',
	  'EX':'Ejemplos',
	   'WE':'Nosotros',
	   'CONTACT':'Contáctanos',
	    'CONTACT1':'Contactar',
	  'YOU':'Tú',
	   'YOUR':'TU',
	  'BUDGET':'Presupuesto',
	  'MOREINFO':'MÁS INFORMACIÓN',
	  'NAME': 'Nombre',
	  'CITY': 'Ciudad',
	  'COUNTRY': 'País',
	  'AMOUNT': 'Cantidad o rango',
	  'MESSAGE': 'Mensaje',
	  
	  
	    'REQUIRED': 'Obligatorio',
	  
	  'AGE': 'Edad',
	  'PROF': 'Profesión',
	  'HOB': 'Aficiones',
	  'DRAG_DROP':' Mueve dentro del cubo lo que es important para ti en orden de preferencia (opcional)',
	  
	    
	  // 'SUBMIT1':'Comprar lo mejor',
	   'SUBMIT1':'Aconséjame',
	   'SUBMIT2':'Encontrar regalo perfecto',
	   'SUBMIT3':'Contactar',
	 
	 //PERFECT MATCH
	  'PMLAPTOP':' Buscas un nuevo ordenador o smartphone ? Dinos lo que buscas, estamos aquí para ayudarte.',
	   'PMSOUND':' Altavoces, cascos ...nos puedes preguntar lo que quieras a cerca de música y sonido. Tenemos especialistas que buscan lo mejor adaptado a cualquier tipo bolsillo.',
	 'PMPHOTO':' Estás buscando una cámara digital? Buscamos la mejor cámara que se adapte a tus necesidades.',
	  'PMHOUSE':'La tecnología está también en nuestro hogar. Buscas cambiar tu frigorífico, lavadora, etc? Buscamos la mejor oferta para ti. ',
	 
	  'PMWEARABLE':' Buscas un nuevo monitor de actividad o un gadget que marque tendencia? Dinos lo que buscas.',
	  'PMOTHER':'Lo que estás buscando no aparece en el menú? Dinos lo que buscas...Intentamos encontrarlo aunque parezca imposible.',
	   // Exists
	  
  	'EXISTS1':'Encontramos la solución adecuada para ti!',
  	'EXISTS2':'Quieres sabes si un determinado producto o solución existe ?',
	    'EXISTS3':' Estás intentando mejorar tu día a día o tu negocio?',
	  'EXISTS4':"Describe",
	 
  	'EXISTS5':" cuál es el problema que estás intentando solucionar, ",
	 'EXISTS6':" nosotros investigamos ",
	 'EXISTS7':" la solución que necesitas, quizás creas que no es posible pero igual nosotros encontramos una manera de hacerlo realidad. ",
	'EXISTS8':"Nos centramos en resolver tus problemas y los de tu negocio, para simplificar y optimizar tu trabajo. A veces la solución está más cerca de lo que crees.",
     'EXISTS9':"Si estás buscando un gadget raro este también es tu apartado. ",
	  
	 'EXISTS10':' Cuál es el problema que estás intentando solucionar?',
	   // Premium
	  
  	'PREM1':'Consejo Personalizado Premium',
  	'PREM2':'La tecnología hace tu vida más simple pero a veces es difícil encontrar la solución adecuada.',
  	
  	'PREM3':"Necesitas atención dedicada? Tienes que tomar una decisión importante y necesitas consejo? Contáctanos e intentaremos darte la atención personal que necesitas",
	'PREM4'  :'Cómo podemos ayudarte?',
	  
	 
	
	  // Tech by spec
	  
  	'SPEC1':'Compra sólo lo mejor!',
  	'SPEC2':'Tecnología por especificaciones',
  	'SPEC3':"Sabes el tipo de especificaciones que quieres pero no tienes tiempo de buscar? Nosotros investigamos para encontrar el mejor producto con esas condiciones al mejor precio. ",
	 'SPEC4':"O ya sabes que gadget quieres? Dinos cual y te decimos si es una buena opción y te enseñamos otros que puedes comprar al mismo precio.",
	  'GADGETSPEC':'Especificaciones',
	  //GIFT
	  'GIFT1':'Regala lo mejor en technología!',
	  'GIFT2':'Regalos Especiales',
 	 'GIFT3':'No sabes de tecnología pero te gustaría regalar algo especial? Te ayudamos!',
  	'GIFT4':'Encontramos un gadget original para esa persona. Te damos ideas, mejores precios, incluyendo websites o tiendas donde puedes compralo si no te gusta comprar online.', 
 	 'GIFT5':'Sólo necesitas describir a la persona que quieres sorprender y nosotros hacemos todo el trabajo duro y encontramos el regalo perfecto',
	   'GIFT6':'Cómo te gustaría sorprendel@?',
	   'TEAM':'El Equipo'
  });

// Enable escaping of HTML
  $translateProvider.useSanitizeValueStrategy('escaped');
  
  
  $translateProvider.preferredLanguage('en');
}]);

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





