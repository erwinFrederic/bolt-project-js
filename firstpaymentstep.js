//Get the element Form which ID is views-form-for-table-flag-lists-user-list-block-2 
theForm = document.querySelector('#views-form-for-table-flag-lists-user-list-block-2');
theForm2 = document.querySelector('#views-form-for-table-flag-lists-user-list-block-3');
theForm3 = document.querySelector('#views-form-for-table-flag-lists-user-list-block-4');
theForm4 = document.querySelector('#views-form-for-table-flag-lists-user-list-block-5');
theForm5 = document.querySelector('#views-form-for-table-flag-lists-user-list-block-6');
theForm6 = document.querySelector('#views-form-for-table-flag-lists-user-list-block-7');

//changing action property in Form object
if(theForm){
	theForm.action = 'https://afrimarket.ci'; // prestashop - https://librairiedefrance.net/stage/ - http://logofie.com/fr
}
if(theForm2){
	theForm2.action = 'https://www.eshopcool.com/index.php';
	theForm2.method = 'GET';
}
if(theForm3){
	// ---> http://wasiricom/';
	theForm3.action = 'http://mage2.madoxdemo.com/';
}
if(theForm4){
	theForm4.action = 'http://cdiscount.ci/';
}
if(theForm5){
	theForm5.action = 'http://pdastoreci.com/magento/';
}
if(theForm6){
	theForm6.action = 'https://librairiedefrance.net/stage/';
}

//Adding submit button to form

//--->insert
if(theForm){
	var newSubmit = document.createElement('input');

	newSubmit.type = 'submit';
	newSubmit.class = 'button';
	newSubmit.id = 'custom-one-submit';
	newSubmit.value = 'payer';
	newSubmit.setAttribute('tabindex', '10');
	
	document.getElementById('views-form-for-table-flag-lists-user-list-block-2').appendChild(newSubmit);
}
if(theForm2){
	var newSubmit2 = document.createElement('input');

	newSubmit2.type = 'submit';
	newSubmit2.class = 'button';
	newSubmit2.id = 'custom-two-submit';
	newSubmit2.value = 'payer';
	newSubmit2.setAttribute('tabindex', '10');
	
	document.getElementById('views-form-for-table-flag-lists-user-list-block-3').appendChild(newSubmit2);
}
if(theForm3){
	var newSubmit3 = document.createElement('input');

	newSubmit3.type = 'submit';
	newSubmit3.class = 'button';
	newSubmit3.id = 'custom-three-submit';
	newSubmit3.value = 'payer';
	newSubmit3.setAttribute('tabindex', '10');
	
	document.getElementById('views-form-for-table-flag-lists-user-list-block-4').appendChild(newSubmit3);
}
if(theForm4){
	var newSubmit4 = document.createElement('input');

	newSubmit4.type = 'submit';
	newSubmit4.class = 'button';
	newSubmit4.id = 'custom-four-submit';
	newSubmit4.value = 'payer';
	newSubmit4.setAttribute('tabindex', '10');
	document.getElementById('views-form-for-table-flag-lists-user-list-block-5').appendChild(newSubmit4);
}
if(theForm5){
	var newSubmit5 = document.createElement('input');

	newSubmit5.type = 'submit';
	newSubmit5.class = 'button';
	newSubmit5.id = 'custom-five-submit';
	newSubmit5.value = 'payer';
	newSubmit5.setAttribute('tabindex', '10');
	
	document.getElementById('views-form-for-table-flag-lists-user-list-block-6').appendChild(newSubmit5);
}
if(theForm6){
	var newSubmit6 = document.createElement('input');

	newSubmit6.type = 'submit';
	newSubmit6.class = 'button';
	newSubmit6.id = 'custom-five-submit';
	newSubmit6.value = 'payer';
	newSubmit6.setAttribute('tabindex', '10');
	
	document.getElementById('views-form-for-table-flag-lists-user-list-block-7').appendChild(newSubmit6);
}


//Adding security Param "de" form
if(theForm){
	var newParam = document.createElement('input');

	newParam.type = 'hidden';
	newParam.name= 'de';
	newParam.id = 'custom-first-param';
	newParam.value = '1';
	newParam.setAttribute('tabindex', '11');
	
	//--->insert
	document.getElementById('views-form-for-table-flag-lists-user-list-block-2').appendChild(newParam);
}

/*if(theForm2){
	var newParam = document.createElement('input');

	newParam.type = 'hidden';
	newParam.name= 'route';
	newParam.id = 'custom-second-param';
	newParam.value = 'checkout/cart';
	newParam.setAttribute('tabindex', '11');
	
	//--->insert
	document.getElementById('views-form-for-table-flag-lists-user-list-block-3').appendChild(newParam);
}*/

if(theForm3){
	var newParam = document.createElement('input');

	newParam.type = 'hidden';
	newParam.name= 'de';
	newParam.id = 'custom-third-param';
	newParam.value = '1';
	newParam.setAttribute('tabindex', '11');
	
	//--->insert
	document.getElementById('views-form-for-table-flag-lists-user-list-block-4').appendChild(newParam);
}

if(theForm4){
	var newParam = document.createElement('input');

	newParam.type = 'hidden';
	newParam.name= 'de';
	newParam.id = 'custom-fourth-param';
	newParam.value = '1';
	newParam.setAttribute('tabindex', '11');
	
	//--->insert
	document.getElementById('views-form-for-table-flag-lists-user-list-block-5').appendChild(newParam);

}

if(theForm5){
	var newParam = document.createElement('input');

	newParam.type = 'hidden';
	newParam.name= 'de';
	newParam.id = 'custom-fifth-param';
	newParam.value = '1';
	newParam.setAttribute('tabindex', '11');
	
	//--->insert
	document.getElementById('views-form-for-table-flag-lists-user-list-block-6').appendChild(newParam);
}

if(theForm6){
	var newParam = document.createElement('input');

	newParam.type = 'hidden';
	newParam.name= 'de';
	newParam.id = 'custom-fifth-param';
	newParam.value = '1';
	newParam.setAttribute('tabindex', '11');
	
	//--->insert
	document.getElementById('views-form-for-table-flag-lists-user-list-block-7').appendChild(newParam);
}

//Travail sur les rows
//--->Recuperation

//-----> Boucle de recup
var i=2;

for (i = 2; i < 8; i++){ 

	//---> Specific ID which change with the form selected
	specId = '#views-form-for-table-flag-lists-user-list-block-' + i;
	specId_suite = specId + ' .views-row';
	
	//suppression des hidden input 
		//--->form_buil_id
		if (i == 3) {
			specIdAllInputs = specId + " input[type=hidden]";
			allInputs = document.querySelectorAll(specIdAllInputs);
			
			for (var theInput in allInputs) {
				
				if(!isNaN(theInput)){
					originElt = specId + " div";
					origin = document.querySelector(originElt);
					removal = origin.removeChild(allInputs[theInput]);
					//alert(allInputs[theInput].innerHTML);
				}
					
			}
			
			//---> Suppression d'un select superflu
			selectToDiscard = specId + " select#edit-operation--2";
			selectTargeted = document.querySelector(selectToDiscard);
			if(selectTargeted) {
				selectParent = selectTargeted.parentNode;
				removal = selectParent.removeChild(selectTargeted);
			}			
			
			//---> Insertion du param route 
			originElt = specId + " div";
			originEltNode = document.querySelector(originElt);
			
			originBeforeRef = originElt + " #edit-select--2";
			originBeforeRefNode = document.querySelector(originBeforeRef);
			
			roadElt = document.createElement("input");
			roadElt.setAttribute("type", "hidden");
			roadElt.setAttribute("name", "route");
			roadElt.setAttribute("value", "checkout/cart");
			//roadElt.setAttribute("route", "checkout/cart");
			
			
			if(roadElt && originEltNode)
				var insertedNode = originEltNode.insertBefore(roadElt, originBeforeRefNode);
						
			
		}
		
	
	allRows = document.querySelectorAll(specId_suite);
        
		

	//--->Tests des rows avec foreach
	for (var item in allRows) {
	
		
	  //---> Verification si l'item est toujours un int
	  if(!isNaN(item)){
					
		  //--->Tentative de récuperer le input compris dans la row en question
		  //thisSpecInput = document.querySelector('#views-form-for-table-flag-lists-user-list-block-2 .views-row-'+[item+1] + ' input.vbo-select');
		  refRow = parseInt(item)+1;
		  theSync = specId + ' .views-row-' + refRow + ' div span div input[type="checkbox"]';
		  
		  //alert(theSync);
		  thisSpecInput = document.querySelector(theSync);

			  //--->Tentative de récupération de l'id de produit
			  /* Il y a potentiellement 2 champs
				 si le premier est vide, 
				 on prend le suivant
			  */
			  
			  theIdProd = specId + ' .views-row-' + refRow + ' .views-field-field-id-de-produit .field-content';
			  thisSpecId = document.querySelector(theIdProd);
			  
			  if(thisSpecId === 0 || thisSpecId === '') {
				  theIdProd = specId + ' .views-row-' + refRow + ' .views-field-field-long-id-du-produit .field-content';
				  thisSpecId = document.querySelector(theIdProd);
			  }
			  //alert(thisSpecId);
			  if(thisSpecId) {
				  thisSpecInput.value = thisSpecId.innerHTML;
			  }
			  
		  
		  if(i == 3) {
			valueSpecInput = "product_id[" + item + "]";
			thisSpecInput.setAttribute("name", valueSpecInput);
		  }

		  //alert(thisSpecInput);
		}
		
	}
	//alert(allRows);
}

//---> Modification Uniquement pour eC 
