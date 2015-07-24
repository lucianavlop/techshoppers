function CheckOther(val){
	
	
var element=document.getElementById('other');

var label=val[val.selectedIndex].innerHTML;
 if(label=='Other' || label== "Otro")
   element.style.display='block';
 else  
   element.style.display='none';
}