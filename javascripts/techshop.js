function CheckOther(val){
	
	
var element=document.getElementById('other');

var label=val[val.selectedIndex].innerHTML;
 if(label=='Other')
   element.style.display='block';
 else  
   element.style.display='none';
}