var techshop= angular.module('app', ['ui.sortable','ngRoute','pascalprecht.translate', 'ngLocale']);

var control= techshop.controller("MainController", function($http, $scope, $location, $locale, $translate){
	
	
    var vm = this;
	vm.language = 'en';
    vm.title = 'Example';
	vm.composeEmail = {};
	vm.composeContact = {};
		
	
	/* Types of gadgets */
    vm.computing = ["LAPTOP", "PC", "TABLET", "Smartphone", "OTHER"];
	
	vm.photo = [
	  'DIGITALCAMERA','ACTIONCAMERA', 'OTHER'
	];
	
	vm.wearable = [
	     'ACTTRACKERS',
	    'WEARABLECAM',
		'SMARTWATCHES',
	      'HEALTHDEVICES',
		'GESTURECONTROL',
		'OTHER'
	];
	
	
	vm.sound = [ 'HEADPHONES','HOMECINEMA', 'PCSPEAKER', 'WSPEAKERS', 'MP3/4', 'OTHER'];
	
	vm.home = ['TV','COFFEEMAKER', 'DEHUMIFIER' ,'DISHWASHER', 'MICROWAVE','WMACHINE', 'FRIDGE', 'HEATER','OVEN', 'VACUUMCLEANER','OTHER'];
	
			
	
	/* List of characteristics */
  	vm.listComputing = ["Battery Life", "Display/Resolution", "Big Screen","Small Screen", "GPS/Navigation", "Storage", "Camera","Design"
    , "Multimedia", "Easy Use", "Brand"];
      vm.listPhoto = ["Battery Life", "Touch Screen", "Storage", "Wifi","Design", "Easy Use", "Brand"];
    vm.listWearable = ["Battery Life", "Display/Resolution",  "Design",  "Easy Use", "Brand", "Fashion"];
     vm.listSound = [ "Brand", "Bluetooth","Bass", "Design","Power"];
     vm.listHome = ["Brand", "Design", "Power", "Energy Rating", "Easy Use"];
	// vm.listHomeBasic = ["Design", "Power", "Brand", "Energy rating"];
  
	vm.composeEmail.listNeed = [];
	vm.composeEmail.listNoNeed = [];
	// vm.composeEmail.gadget = {};
	
	vm.loadBasket=function(){
		
	  	vm.listComputing = ["Battery Life", "Display/Resolution", "Big Screen","Small Screen", "GPS/Navigation", "Storage", "Camera","Design"
	    , "Multimedia", "Easy Use", "Brand"];
	      vm.listPhoto = ["Battery Life", "Touch Screen", "Storage", "Wifi","Design", "Easy Use", "Brand"];
	    vm.listWearable = ["Battery Life", "Display/Resolution",  "Design",  "Easy Use", "Brand", "Fashion"];
 	     vm.listSound = [ "Brand", "Bluetooth","Bass", "Design","Power"];
	     vm.listHome = ["Brand", "Design", "Power", "Energy Rating", "Easy Use"];
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
 									  window.location = '/success'
								  }else{
								  	  window.location = '/error'
								  }
							  }
 						)
 						;
			}else{
       	 		
				$scope.userForm.submitted=true;
				
				
		}
		 
		 
	};
	
	vm.saveInfoContact = function(isValid) {
		if (isValid) {
						 $http.post('save.php', JSON.stringify(vm.composeEmail))
 						.success(
							function(data, status) {
							      if (data == 'success') {
									  
 									  	window.location = '/contactsuccess'
									 
								  }else{
								  	  window.location = '/error'
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
	  	vm.language = key;
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
  	  'EXISTS':'DOES IT EXIST?',
  	  'SPEC':'I kNOW WHAT I WANT',// 'TECH BY SPEC',
	  
  	  'GIFT':'GIFT ADVICE',
  	  'PREMIUM':'PREMIUM SHOPPING',
  	  'GADGETWEEK':'Gadget of the Week',
  	  'MAIN':'We find the perfect product for you!',
  	  'MAIN2':'Your Technology Personal Shoppers',
  	  'TITLE1': 'Are you looking  to purchase new technology ? ',
  	  'TITLE2':  'Do you need the help of an expert or mainly want us to do all the research for you?',
  	  'TITLE3': " We focus on your needs, there are a lot of options out there.... Let's find the one suitable for you at the best price.",
  	  'TITLE4': "Tailored, personalised search. Check the sections below and ask us advice. For a limited period  ",
  	   'TITLE5': "IT''S FREE !!!",
        'EX':'Examples',
  	 'FOO': 'This is a paragraph',
  	  'SOUND':'Sound',
  	  'PHOTO':'Photo',
  	  'COMPUTING':'Computing & Phone',
  	  'COMPUTINGSHORT':'Computing',
  	  'OTHER':'Other',
  	  'OTHEREG':'Not in the list? Name it',
  	   'OTHEREGMENU':'Not in the main menu? Name it',
  	  'WEARABLE':'Wearable Technology',
  	  'HOUSE':'House',
  	   'WE':'We',
  	  'CONTACT':'Contact Us',
  	    'CONTACT1':'Contact',
  	   'YOU':'You',
  	  'YOUR':'YOUR',
  	  'YOURL':'Your',
  	  'MOREINFO':'A BIT MORE INFO',
  	  'MOREINFOEG':'Tell us a bit more about you and/or how you are going to use this gadget so we can choose the perfect match for you.....',
	 
  	  'SUBMIT1':'Find Perfect Match',
  	  'SUBMIT2':'Find Perfect Gift',
  	  'SUBMIT3':'Contact',
  	  'SUBMITPM':'Find Perfect Match',
		
	  'SUBMITED':' Cool!! Submitted',
		'SUCCESS': 'You have successfully submitted your query. ',
		'SUCCESS1': 'You are a bit closer to your desire gadget/solution. We will send you an e-mail with a link to get the results very soon ',
		'SUCCESS2': 'PS: This is our BETA version and we are getting a lot of queries. It might be up to 5 days until we contact you back. Hopefully is a bit less',
		
		
		'NOSUBMITED':' Sorry!!',
		'SORRY': '	Your query has not been submitted correctly.',
		'SORRY1': 'Please try again. Sorry for any inconvenience caused.',
	 
		
  	  'BUDGET':'Budget',
  	   'BUDGETEG':'Amount or range',
	  
	  
  	   'LAPTOP': 'Laptop',
		'PC':'Desktop PC', 
  	   'TABLET': 'Tablet',

 	  'TV': 'TV',
      'COFFEEMAKER': 'Coffee Maker', 
  	  'DEHUMIFIER': 'Dehumidifier' ,
  	  'DISHWASHER': 'Dishwasher', 
  	  'MICROWAVE': "Microwave",
  	  'WMACHINE': "Washing Machine", 
  	  'FRIDGE': "Fridge", 
  	  'HEATER': "Heater",
  	  'OVEN': 'Oven', 
  	  'VACUUMCLEANER':'Vacuum cleaner',
	  
  	  'DIGITALCAMERA':'Digital Camera',
	  'ACTIONCAMERA':'Action Camera',
	  
  	  'HEADPHONES':'Headphones/Earbuds',
  	  'HOMECINEMA':'Home Cinema Speakers', 
  	  'PCSPEAKER':'PC Speakers', 
  	  'WSPEAKERS': 'Wireless Speakers', 
	  
	  
  	  'ACTTRACKERS':'Activity trackers',
  	  'WEARABLECAM':  'Wearable Cameras',
  	  'SMARTWATCHES': 'Smart Watches',
  	  'HEALTHDEVICES':  'Healthcare Devices',
  	  'GESTURECONTROL':'Gesture Control',
	
  	   'REQUIRED': 'Required!',
  	  'CEMAIL':'Confirm Email',
  	  'IEMAIL': 'Your email is incorrect',
  	  'NOTMATCHEMAIL': ' Emails do NOT match',
	  
  	  'NAME': 'Full Name',
  	  'CITY': 'City, Town',
  	  'COUNTRY': 'Country',
  	  'AMOUNT': 'Amount or range',
		'MESSAGE': 'Message',
	  
  	  'AGE': 'Age',
  	  'TWENTIES': 'Twenties',
  	  'THIRTIES': 'Thirties',
  	  'FOURTIES': 'Fourties',
  	  'FIFHTIES': 'Fifties',
  	  'SIXTIES': 'Sixties',
  	   'SEVENTIES': 'Seventies',
  	   'EIGHTIES': 'Eighties',
  	  'AGE': 'Age',

  	  'PROF': 'Profession',
  	   'PROFEG': 'E.g. Nurse, Engineer, Journalist ....',
  	   'HOB': 'Hobbies',
  	   'HOBEG': 'E.g. Bloggs, Games, Travel, Read ...',
  	  'DRAG_DROP':' Drag and Drop into the bucket what it is important for you ordered by preference (optional)',
	  
  	 //PERFECT MATCH
  	  'PMLAPTOP':' Looking for a new phone or laptop? Tell us what you need, we are here for YOU.',
	 
  	   'PMSOUND':' Speakers, Home Theatre...you can ask us about anything to do with music and sound. We have specialists that look for the best sound for every budget.',
  	'PMPHOTO':' Are you looking to buy a digital camera? We find the best camera for your needs.',
  	  'PMHOUSE':'Technology also includes  house appliances. Are you looking to change your fridge, washing machine etc? We find the best deal for you.',
  	  'PMWEARABLE':'Are you looking for a new tracking fitness device or a fashion statement? Tell us what you need.',
  	  'PMOTHER':'The gadget that you are looking for is not in the main menu? Please let us know what it is...We will try to find it for you,  no matter how crazy you might think it sounds! ',
	 
  	   // Exists
	  
    	 'EXISTS1':'We find the solution for you!',
    	 'EXISTS2':'Are you wondering if a specific product or tech solution exists?',
  	  'EXISTS3':' Are you trying to improve your day to day or how your business works?',
	 
  	 'EXISTS4':"Describe",
	 
    	 'EXISTS5':" what you are trying to solve, ",
  	 'EXISTS6': "we research ",
  	 'EXISTS7':" the solution for you. Maybe you think it is not possible but we might find the way to make it a reality. ",
  	 'EXISTS8':"We focus in solving problems for you or your business to make your life easier. Sometimes the solution is closer and cheaper than you think. ",
        'EXISTS9': "Your crazy gadgets search go in this category too!",
	  
  	   'EXISTS10':' What is the problem that you need to solve?',
		 'EXISTS11':' Describe what are you trying to achieve...',
  	  // Premium
	  
    	'PREM1':'Premium Shopping Experience',
    	'PREM2':"Technology makes your life easier but sometimes it's difficult to find the right solution. ",
    	'PREM3':"Do you need our dedicated personal assistance? Do you have an important decision to make and need guidance? Contact us and hopefully we can provide the personal advice that you need . ",
  	 	'PREM4'  :'How can we help?',
    	'PREM5':"We sit down with you and discuss posible solutions, we deal with you providers so you know they won't trick you with tech talk  or we can even go shopping with you ;) ",
		
  	 	  // Tech by spec
    'SPEC1':'Get only the best!',
    'SPEC2':'Technology By Specifications',
    'SPEC3':"Do you already know the specifications that you want for your next gadget but don't have time to research? We will find the best ones for you at the best price.  ",
  	 'SPEC4':"Or do you already have a gadget in mind? Tell us which one and we will let you know if it is a good choice and advise you about others that you could get at the same price.",
  	  'GADGETSPEC':'Gadget Spec',
  	  //GIFT
  	  'GIFT1':'Gift the best in tech!',
  	  'GIFT2':'Gift Advice',
   	 'GIFT3':'Are you not really into technology but you would like to get somebody a special tech gift? We are here to help!',
    	'GIFT4':'We find for you original gadgets. We give you ideas and best prices, including where to find it in a physical shop if you are not really into shopping online.', 
   	 'GIFT5':'You just need to describe the person that you want to surprise and we do all the hard work to find the perfect present at the perfect price :)',
  	  'GIFT6':'How you want to surprise him/her?',
		'GIFT7':'Tell us a bit about that special person including any interest/hobbies to help us find the perfect gadget to surprise him/her with',
		'GIFTBUDGET':'Budget for the present :)',
		
		//People
		'HELENA':'"Thanks a million. Very recommendable service !!!"',
		'LUCIA':'"Super professional"',
		'JCARLOS':'"I followed your advice and it happened"',
		'KINGA':'"Wooow"',
		'MAMEN':'"I saved so much money"',
		'CUNADO':'"I love my present"',
		
	//why section
		'DOCUMENT':'WE DOCUMENT - YOU CHOOSE',
		'SEVERALLANGUAGES':'SEVERAL LANGUAGES',
		
		'WHY1':'Why  have a Personal Technology Shopper ? ',
		'WHY2':'You might want to use us for different reasons, depending on the type of shopper that you are',
		'MONEY1':'We know where to find the best deals, so you can save money on your 	purchase.',
		
		'IDEAS1':' Ask us for gift ideas, to help you solve problems for your family or company. Our heads are continually working to improve your life.',
		'EXCLUSIVITY1':'We Focus on YOU and nobody else. All our efforts are tailored to get you the best.',
		
		'DOCUMENT1':'We give enough information so YOU can make your own decision.',
		'KNOWDLEGE1':"We are experts in technology. It's difficult to stay up to date but we try our best to be on top of everything tech related . ",
				'SUITABILITY1':"We don't look for the best. We look for the best for you.",
			'QUALITY1':"Get quality. Using our advice you can find a better  product for the same budget.",
		'INDEPENDENT1':"We are not tied to any shop and/or gadget. We advise you of the best gadget and best prices that we can find. If you are happy with our advice you can buy it wherever you want.",
		'SEVERALLANGUAGES1':"We speak Spanish and English. We can help you in any of these two languages and deal with your technology providers on both. ",
		
		'TIME1':"It's not about 'having' time. It's about making time." ,
		'TIME2':'We do all the research for you, so you can use your time for something else.',
		'GADGETSWEEK':'More gadgets of the week'
		
    });
  
    $translateProvider.translations('es', {
  	   'HOME':'YTS',
  	  'EXISTS':'¿EXISTE?',
  	  'SPEC':'SÉ LO QUE QUIERO',
	  
  	  'GIFT':'REGALOS ESPECIALES',
  	  'PREMIUM':'PREMIUM',
  	   'GADGETWEEK':'Gadget de la semana',
  	  'MAIN':'¡Encontramos el mejor producto para ti!',
  	  'MAIN2':'Tu Personal Shopper de Tecnología',
  	  'TITLE1': ' Dinos lo que necesitas. Nosotros lo encontramos. ',
  	  'TITLE2':  'Ahorra tiempo y dinero ',
  	  'TITLE3': " Hacemos búsquedas personalizadas, nos centramos en tus necesidades, te escuchamos....y encontramos lo mejor para ti al mejor precio",
  	  'TITLE4': " Echa un vistazo a las siguientes categorías y déjanos aconsejarte. Por un  periodo limitado  ",
  	   'TITLE5': "¡¡ES GRATIS !!",
      'FOO': 'This is a paragraph',
  	  'SOUND':'Sonido',
  	  'PHOTO':'Fotografía',
  	  'COMPUTING':'Ordenadores y Telefonía',
  	   'COMPUTINGSHORT':'Ordenadores',
  	  'OTHER':'Otro',
  	  'OTHEREG':'¿No está ne la lista? Dinos lo q buscas',
  	  'OTHEREGMENU':'¿No está ne nuestro menú? Dinos lo q buscas',
  	  'WEARABLE':'Tecnología ponible',
  	  'HOUSE':'Hogar',
  	  'EX':'Ejemplos',
  	   'WE':'Nosotros',
  	   'CONTACT':'Contáctanos',
  	    'CONTACT1':'Contactar',
  	  'YOU':'TÚ',
  	   'YOUR':'TU',
  	  'YOURL':'Tu',
  	  'BUDGET':'Presupuesto',
  	   'BUDGETEG':'Cantidad or rango',
	  
  	  'MOREINFO':'MÁS INFORMACIÓN',
  	   'MOREINFOEG':'Cuéntanos un poco a cerca de ti y como vas a usar este gadget para poder elegir el que mejor se adecua a ti .....',
	
  	  'NAME': 'Nombre Completo',
  	  'CITY': 'Ciudad',
  	  'COUNTRY': 'País',
  	  'AMOUNT': 'Cantidad o rango',
  	  'MESSAGE': 'Mensaje',
	  
  	   'LAPTOP': 'Portátil',
		'PC':'PC sobremesa', 
  	   'TABLET': 'Tableta',
		 'TV': 'TV',
	  
         'COFFEEMAKER': 'Cafetera', 
  	  'DEHUMIFIER': 'Deshumidificador' ,
  	  'DISHWASHER': 'Lavavajillas', 
  	  'MICROWAVE': "Microondas",
  	  'WMACHINE': "Lavadora", 
  	  'FRIDGE': "Frigorífico", 
  	  'HEATER': "Calefacción",
  	  'OVEN': 'Horno', 
  	  'VACUUMCLEANER':'Aspiradora',
	  
  	   'DIGITALCAMERA':'Cámara Digital',
	   'ACTIONCAMERA':'Cámara Deportiva',
	  
  	  'HEADPHONES':'Cascos',
  	  'HOMECINEMA':'Altavoces Home Cinema', 
  	  'PCSPEAKER':'Altavoces para PC', 
  	  'WSPEAKERS': 'Altavoces inalámbricos', 
	  
	  
  	  'ACTTRACKERS':'Monitores de Actividad',
  	  'WEARABLECAM':  'Cámaras Portátiles',
  	  'SMARTWATCHES': 'Relojes Inteligentes',
  	  'HEALTHDEVICES':  'Aparatos para la Salud ',
  	  'GESTURECONTROL':' Controladores de Gestos',
	
	  
	  
  	    'REQUIRED': '¡Obligatorio!',
  	  'CEMAIL':'Confirmar Email',
  	   'IEMAIL': ' Email incorrecto',
  	   'NOTMATCHEMAIL': ' Los emails NO son iguales',
	 
	  
  	  'AGE': 'Edad',
  	  'TWENTIES': 'En mis 20',
  	  'THIRTIES': 'En mis 30',
  	  'FOURTIES': 'En mis 40',
  	  'FIFHTIES': 'En mis 50',
  	  'SIXTIES': 'En mis 60',
  	   'SEVENTIES': 'En mis 70',
  	   'EIGHTIES': 'En mis 80',
	  
  	  'PROF': 'Profesión',
  	   'PROFEG': 'Ej. Enfermer@, arquitecto, periodista, ....',
  	  'HOB': 'Aficiones',
  	   'HOBEG': 'Ej. Blogs, viajar, leer, videojuegos ...',
  	  'DRAG_DROP':' Mueve dentro del cubo lo que es important para ti en orden de preferencia (opcional)',
	  
	    
  	  // 'SUBMIT1':'Comprar lo mejor',
  	   'SUBMIT1':'Aconséjame',
  	   'SUBMIT2':'Encontrar regalo perfecto',
  	   'SUBMIT3':'Contactar',
  	   'SUBMITPM':'Encontrar Perfect Match',
		
		'SUBMITED':' ¡¡Gracias por contactarnos!!',
		'SUCCESS': 'Ya tenemos la información que necesitamos. ',
  	  	'SUCCESS1': 'Estás un paso más cerca de tu deseado gadget/producto. Te mandaremos un e-mail con un link a los resultados pronto. ',
		'SUCCESS2': 'PD: Esta es nuestra version BETA y estamos teniendo muchas preguntas. Puede que tardemos hasta 5 días en contactarte. Esperamos que sea menos ',
		
		'NOSUBMITED':' ¡¡Lo sentimos!!',
		'SORRY': '	Su información no ha sido tramitada correctamente.',
		'SORRY1': 'Por favor, inténtelo de nuevo. Lo sentimos.',
	 
  	 //PERFECT MATCH
  	  'PMLAPTOP':'¿Buscas un nuevo ordenador o smartphone? Dinos lo que buscas, estamos aquí para ayudarte.',
  	   'PMSOUND':' Altavoces, cascos ...nos puedes preguntar lo que quieras a cerca de música y sonido. Tenemos especialistas que buscan lo mejor adaptado a cualquier tipo bolsillo.',
  	 'PMPHOTO':' ¿Estás buscando una cámara digital? Buscamos la mejor cámara que se adapte a tus necesidades.',
  	  'PMHOUSE':'La tecnología está también en nuestro hogar. ¿Buscas cambiar tu frigorífico, lavadora, etc? Buscamos la mejor oferta para ti. ',
	 
  	  'PMWEARABLE':' ¿Buscas un nuevo monitor de actividad o un gadget que marque tendencia? Dinos lo que buscas.',
  	  'PMOTHER':'Lo que estás buscando no aparece en el menú? Dinos lo que buscas...Intentamos encontrarlo aunque parezca imposible.',
  	   // Exists
	  
    	'EXISTS1':'¡Encontramos la solución adecuada para ti!',
    	'EXISTS2':'¿Quieres sabes si un determinado producto o solución existe ?',
  	    'EXISTS3':' ¿Estás intentando mejorar tu día a día o tu negocio?',
  	  'EXISTS4':"Describe",
	 
    	'EXISTS5':" ¿Cuál es el problema que estás intentando solucionar, ",
  		 'EXISTS6':" nosotros investigamos ",
  	   'EXISTS7':" la solución que necesitas, quizás creas que no es posible pero igual nosotros encontramos una manera de hacerlo realidad. ",
  		'EXISTS8':"Nos centramos en resolver tus problemas y los de tu negocio, para simplificar y optimizar tu trabajo. A veces la solución está más cerca de lo que crees.",
       'EXISTS9':"Si estás buscando un gadget raro este también es tu apartado. ",
	  
  		 'EXISTS10':' ¿Cuál es el problema que estás intentando solucionar?',
		 'EXISTS11':' Describe lo que necesitas...',
  	   // Premium
	  
    	'PREM1':'Consejo Personalizado Premium',
    	'PREM2':'La tecnología hace tu vida más simple pero a veces es difícil encontrar la solución adecuada.',
  	
    	'PREM3':"¿Necesitas atención dedicada? ¿Tienes que tomar una decisión importante y necesitas consejo? Contáctanos e intentaremos darte la atención personal que necesitas",
  	'PREM4'  :'¿Cómo podemos ayudarte?',
    	'PREM5':"Nos sentamos contigo y discutimos posible soluciones, hablamos con tus proveedores para que no te engañen con jerga técnica o incluso podemos ir a comprar contigo ;) ",
		
	  
	 
	
  	  // Tech by spec
	  
    	'SPEC1':'¡Compra sólo lo mejor!',
    	'SPEC2':'Tecnología por especificaciones',
    	'SPEC3':"¿Sabes el tipo de especificaciones que quieres pero no tienes tiempo de buscar? Nosotros investigamos para encontrar el mejor producto con esas condiciones al mejor precio. ",
  	 'SPEC4':"O ya sabes que gadget quieres? Dinos cual y te decimos si es una buena opción y te enseñamos otros que puedes comprar al mismo precio.",
  	  'GADGETSPEC':'Especificaciones',
  	  //GIFT
  	  'GIFT1':'¡Regala lo mejor en tecnología!',
  	  'GIFT2':'Regalos Especiales',
   	 'GIFT3':'¿No sabes de tecnología pero te gustaría regalar algo especial? ¡Te ayudamos!',
    	'GIFT4':'Encontramos un gadget original para esa persona. Te damos ideas, mejores precios, incluyendo websites o tiendas donde puedes compralo si no te gusta comprar online.', 
   	 'GIFT5':'Sólo necesitas describir a la persona que quieres sorprender y nosotros hacemos todo el trabajo duro y encontramos el regalo perfecto',
  	   'GIFT6':'¿Cómo te gustaría sorprenderl@?',
		'GIFT7':'Cuéntanos algo a cerca de esa persona especial a la que quieres sorprender incluyendo intereses o aficiones para ayudarnos a encontrar el gadget perfecto para el/ella',
		'GIFTBUDGET':'Presupuesto para el regalo :)',
	   'TEAM':'El Equipo',
		
		
		//People
		'HELENA':'"Mil gracias por todo.Servicio hiper recomendable!!!"',
		'LUCIA':'"Super profesional"',
		'JCARLOS':'"Seguí tu consejo y así fue"',
		'KINGA':'"Woow"',
		'MAMEN':'"Me he ahorrado mucho dinero"',
		'CUNADO':'"Me ha encantado mi regalo"',
		//why section
		'DOCUMENT':'TE INFORMAMOS - TÚ DECIDES',
		'DOCUMENT1':'Te damos suficiente información para que TÚ decidas.',
		'SEVERALLANGUAGES':'VARIOS IDIOMAS',
		'TIME':'TIEMPO',
		'MONEY':'DINERO',
		'EXCLUSIVITY':'EXCLUSIVIDAD',
		'INDEPENDENT':'INDEPENDENCIA',
		'QUALITY':'CALIDAD',
		'SUITABILITY':'IDONIEDAD',
		'KNOWLEDGE':'CONOCIMIENTO',
		'KNOWDLEGE1':"Somos expertos en tecnología. Es difícil estar al corriente de todo lo que ocurre en este área, nosotros lo intentamos.",
		'SUITABILITY1':"No buscamos lo mejor. Buscamos lo mejor para ti. ",
			'QUALITY1':" Obtén mejor calidad. Usando nuestros servicios puedes encontrar un mejor producto por el mismo dinero.",

		'EXCLUSIVITY1':'Nos centramos en ti y nadie más. Nuestros esfuerzos están diseñados para conseguirte lo mejor.',
		'SEVERALLANGUAGES1':"Hablamos Español e Inglés. Podemos darte consejo o tratar con tus proveedores en estos dos idiomas. ",
		
		'INDEPENDENT1':"No estamos atados a ninguna tienda o gadget. Te aconsejamos a cerca de los mejores gadgets al mejor precio, si te interesan puedes comprarlos donde tú quieras.",
		'MONEY1':'Sabemos donde encontrar las mejores ofertas, para que ahorres dinero en tu compra.',
		'TIME1':"No es acerca de 'tener' tiempo. Es acerca de hacer tiempo." ,
		'TIME2':'Investigamos por ti, para que tú no tengas que hacerlo.',
		'IDEAS1':' Pregúntanos acerca de regalos, o cómo resolver problemas en tu casa o empresa usando tecnología. ',
		'WHY1':'¿Por qué?',
		'WHY2':'Dependiendo del tipo de usuario que seas, puede que te seamos útiles por diferentes razones',
			'GADGETSWEEK':'Más gadgets de la semana'
		
    });


// Enable escaping of HTML
  $translateProvider.useSanitizeValueStrategy('escaped');
  
  
  $translateProvider.preferredLanguage('en');
}]);

techshop.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider){
		//enabling HTML5 mode
      $locationProvider.html5Mode(true);
	
	   $locationProvider.hashPrefix('!');
	 
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
          .when('/ex1',{
                templateUrl: 'pricing-table-liam328.html'
          })
          .when('/ex2',{
                templateUrl: 'pricing-table-baby monitor.html'
          })
          .when('/blog',{
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
		  
          .when('/segun',{
                templateUrl: 'pricing-table-segun.html'
          })
		  
          .when('/clara301',{
                templateUrl: 'pricing-table-clara301.html'
          })
          .when('/juancarlos302',{
                templateUrl: 'pricing-table-juanCarlos302.html'
          })
          .when('/302b',{
                templateUrl: 'pricing-table-juanCarlos302b.html'
          })
          .when('/lucia303',{
                templateUrl: 'pricing-table-lucia303.html'
          })
          .when('/mamen304',{
                templateUrl: 'pricing-table-mamen304.html'
          })
          .when('/iria305',{
                templateUrl: 'pricing-table-iria.html'
          })
          .when('/helena306',{
                templateUrl: 'pricing-table-helena306.html'
          })
          .when('/helena306b',{
                templateUrl: 'pricing-table-helena306b.html'
          })
          .when('/astrid307',{
                templateUrl: 'pricing-table-astrid307.html'
          })
          .when('/lucia308',{
                templateUrl: 'pricing-table-lucia308.html'
          })
          .when('/nuria310',{
                templateUrl: 'pricing-table-nuria310.html'
          })

          .when('/kinga309',{
                templateUrl: 'pricing-table-Kinga309.html'
          })
          .when('/kinga309b',{
                templateUrl: 'pricing-table-Kinga309b.html'
          })
          .when('/ger311',{
                templateUrl: 'pricing-table-ger311.html'
          })
          .when('/jennifer312',{
                templateUrl: 'pricing-table-jennifer312.html'
          })
          .when('/brite313',{
                templateUrl: 'pricing-table-brite313.html'
          })
          .when('/daithi314',{
                templateUrl: 'pricing-table-daithi314.html'
          })
          .when('/martin320',{
                templateUrl: 'pricing-table-martin320.html'
          })
          .when('/nuria315',{
                templateUrl: 'pricing-table-nuria315.html'
          })
          .when('/androidbox318',{
                templateUrl: 'pricing-table-androidbox.html'
          })
          .when('/antonio319',{
                templateUrl: 'pricing-table-antonio319.html'
          })
          .when('/alvaro321',{
                templateUrl: 'pricing-table-alvaro321.html'
          })
          .when('/kerry322',{
                templateUrl: 'pricing-table-kerry322.html'
          })
          .when('/leire323',{
                templateUrl: 'pricing-table-leire323.html'
          })
          .when('/alejandro324',{
                templateUrl: 'pricing-table-alejandro324.html'
          })
          .when('/rubenphone325',{
                templateUrl: 'pricing-table-ruben325.html'
          })
          .when('/rubentablet327',{
                templateUrl: 'pricing-table-ruben327.html'
          })
          .when('/susanatablet328',{
                templateUrl: 'pricing-table-susana328.html'
          })
          .when('/liam328',{
                templateUrl: 'pricing-table-liam328.html'
          })
          .when('/gw-anker',{
                templateUrl: 'gw-anker.html'
          })
          .when('/gw-notepro3',{
                templateUrl: 'gw-redminote3.html'
          })
          .when('/gw-miband2',{
                templateUrl: 'gw-miband2.html'
          })
          .when('/contactsuccess',{
                templateUrl: 'contactsuccess.html'
          })
          .when('/error',{
                templateUrl: 'error.html'
          });
}]);


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





