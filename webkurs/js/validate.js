	function validate(){
			var name=document.getElementById("name");
			var email = document.getElementById("email");
      		var tel=document.getElementById("telefon");
			var nachricht = document.getElementById("nachricht");
			
			var name_err=document.getElementById("name_err");
			var email_err=document.getElementById("email_err");			
			var tel_err=document.getElementById("tel_err");
			var nachricht_err=document.getElementById("nachricht_err");
			
			var email_inv=document.getElementById("email_inv");
			var tel_inv=document.getElementById("tel_inv");
			
			var email_regex=/^[a-z][a-zA-Z0-9_.]*(\.[a-zA-Z][a-zA-Z0-9_.]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;
			var tel_regex=/^[\s()+-]*([0-9][\s()+-]*){6,20}$/
      
			if(name.value==""){
				name_err.style.display="block";
				name.style.border="1px solid red";
				name.focus();
				return false;
			}
				
			if(name.value!=""){
				name_err.style.display="none";
				name.style.border="";
				
			}
			if(email.value==""){
				email_err.style.display="block";
				email.style.border="1px solid red";
				email.focus();
				return false;	
			}
			if(email.value!=""){
				if(email_regex.test(email.value)==false){
						email_inv.style.display="block";
						email_err.style.display="none";
						email.focus();
						return false					
					}else if(email_regex.test(email.value)==true){
						email_inv.style.display="none";
					}
				email_err.style.display="none";
				email.style.border="";
			}
      		if(tel.value==""){
				tel_err.style.display="block";
				tel.style.border="1px solid red";
				tel.focus();
				return false;	
			}
			if(tel.value!=""){
				if(tel_regex.test(tel.value)==false){
						tel_inv.style.display="block";
						tel_err.style.display="none";
						tel.focus();
						return false					
					}else if(tel_regex.test(tel.value)==true){
						tel_inv.style.display="none";
					}
				tel_err.style.display="none";
				tel.style.border="";
			}
			if(nachricht.value==""){
					nachricht_err.style.display="block";
					nachricht.style.border="1px solid red";
					nachricht.focus();
					return false;
			}
			if(nachricht.value!=""){
				nachricht_err.style.display="none";
				nachricht.style.border="";
			}
					
				
			
			
			if(name.value!="" && email.value!="" && tel.value!="" && nachricht.value!=""){
				alert("Nachricht erfolgreich versendet.");
			}

		}
	