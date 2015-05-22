<!DOCTYPE html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->

<head>
	
	

  <meta charset="utf-8" />
  <!-- Set the viewport width to device width for mobile -->
  <meta name="viewport" content="width=device-width" />

  <title>Technology Shoppers </title>
  <link rel="stylesheet" href="stylesheets/foundation.min.css">
  <link rel="stylesheet" href="stylesheets/main.css">
  <link rel="stylesheet" href="stylesheets/app.css">

  <link rel="stylesheet" href="stylesheets/techshop.css">
   <link rel="stylesheet" href="stylesheets/googlecssfonts.css">
    <link rel="stylesheet" href="foundation-icons/foundation-icons.css">
    <link rel="stylesheet" href="foundation-icons/foundation-icons.eot">
    <link rel="stylesheet" href="foundation-icons/foundation-icons.svg">
    <link rel="stylesheet" href="foundation-icons/foundation-icons.ttf">
    <link rel="stylesheet" href="foundation-icons/foundation-icons.woff">

    
   

  <script src="javascripts/modernizr.foundation.js"></script>
  
  <link rel="stylesheet" href="ligature.css">
  
  <!-- Google fonts -->
  <!-- <link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Playfair+Display:400italic' rel='stylesheet' type='text/css' /> -->
  
  
  
  
  <!-- for sortable -->
   <script src="javascripts/jquery.js"></script>   
    <!-- <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
 --><script src="javascripts/jquery-ui-1.11.4/jquery-ui.min.js"></script>
  
  <script src="javascripts/jquery.ui.touch-punch.min.js"></script>
  
  
  <!-- <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.4/angular.min.js"></script>
   -->   
	<script src="javascripts/angular/angular.min.js"></script>
	
  <!-- <script src="//cdnjs.cloudflare.com/ajax/libs/angular-ui/0.4.0/angular-ui.min.js"></script> TODO: DO I need this
  -->
	  
	  <!-- <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.1/angular-route.min.js"></script>
 --><script src="javascripts/angular/angular-route.min.js"></script>
  
  <script src="javascripts/angular/ngStorage-master/ngStorage.min.js"></script>
   <script src="javascripts/angular/ui-sortable-master/src/sortable.js"></script>
  
 
  <script src="javascripts/angular/appAngular.js"></script>
	 
   <script src="javascripts/angular/main.ctrl.js"></script>
   
   <script src="javascripts/techshop.js"></script>
  
  <!-- IE Fix for HTML5 Tags -->
  <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->

</head>

<body ng-app="app" ng-controller="MainController as main">
	

<!-- ######################## Main Menu ######################## -->
 
<nav>

     <div class="twelve columns header_nav">
	 
	 <div class="row">
    
	    <ul id="menu-header" class="nav-bar horizontal">
	    
	
         <li ng-class="main.classActive('/')" ><a href="#/">Home</a></li>
      
          <!-- <li class="has-flyout">
           <a href="#">Example Pages</a><a href="#" class="flyout-toggle"></a>
            <ul class="flyout">
				- Flyout Menu -
              <li class="has-flyout"><a href="blog.html">Blog</a></li>
              <li class="has-flyout"><a href="blog_single.html">Blog Single Page</a></li>
              <li class="has-flyout"><a href="products-page.html">Products Page</a></li>
              <li class="has-flyout"><a href="product-single.html">Product Single</a></li>
              <li class="has-flyout"><a href="pricing-table.html">Pricing Table</a></li>
              <li class="has-flyout"><a href="contact.html">Contact Page</a></li>
            </ul>
          </li> --><!-- END Flyout Menu -->
         <li ng-class="main.classActive('/spec')" ><a href="#/spec">Tech by Spec</a></li>
           
          <li ng-class="main.classActive('/exists')" ><a href="#/exists">Does this exist?</a></li>
          
          <li ng-class="main.classActive('/gift')" ><a href="#/gift">Gift Advice</a></li>
		  <li ng-class="main.classActive('/premium')" ><a href="#/premium">Premium Shopping</a></li>
		    <!-- <li ng-class="main.classActive('/contact')" ><a href="#/contact">Contact Us</a></li>  -->
          <li ng-class="main.classActive('/blog3')" ><a href="#/blog3">Blog</a></li> 
   	   		<!-- <p style="float:  right; " class="version">  Beta  <br> (UK, Ireland and Spain)</p>  -->
			 <li ng-class="main.classActive('/blog')" >
	 		   <img src="images/label_green.png"   style="position:fixed; top:0px; right:0px;"   width="100" height="100" /> 
	 	    </li>
		</ul>
       
		
        
        <script type="text/javascript">
         //<![CDATA[
         $('ul#menu-header').nav-bar();
          //]]>
        </script>
	 </div>
       
     
      
</nav>
      
      


  <div ng-view>
  <!--
     This DIV loads templates depending upon route.
 -->
  </div>
  
<!-- ######################## Footer ######################## -->  
      
<footer>

      <div class="row">
      
          <div class="twelve columns footer">
			  We   &nbsp;<a href="#/contact" class="lsf-icon"  title="love"></a> gadgets !  &nbsp;&nbsp; <a href="#/contact" class="lsf-icon" style="font-size:16px; margin-right:15px" title="">Contact Us</a> 
				
		 
              <!-- <a href="http://twitter.com/dieterarno" class="lsf-icon" style="font-size:16px; margin-right:15px" title="twitter">Twitter</a>
              <a href="http://csstemplateheaven.com/csstemplateheaven" class="lsf-icon" style="font-size:16px; margin-right:15px" title="facebook">Facebook</a> -->
              <a href="http://www.pinterest.com/yourtechshopper" class="lsf-icon" style="font-size:16px; margin-right:15px" title="pinterest"><!-- Pinterest --></a>
              <a href="http://twitter.com/yourtechshopper" class="lsf-icon" style="font-size:16px" title="instagram"><!-- Instagram --></a>
			  <br>
		  	<br>
		  
			<p style="color:lightgray">
		  	Copyright &copy; , 2015 - YOUR TECH SHOPPERS <br>
			<a href="#/conditions" >Terms & Privacy</a>
		  
			</p>
		  </div>
          
      </div>

</footer>		  

<!-- ######################## Scripts ######################## --> 

    <!-- Included JS Files (Compressed) -->
    <script src="javascripts/foundation.min.js" type="text/javascript"></script> 
    <!-- Initialize JS Plugins -->
     <script src="javascripts/app.js" type="text/javascript"></script>
	
</body>
</html>