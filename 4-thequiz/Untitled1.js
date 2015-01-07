
function User(position, userName, password){
	this.position = position;//lag el domare
	this.userName = userName;
	this.password = password;
	return this;
	}


window.onload = function(){
	var userArr = [];
	//userArrPass = [];
	var adam = new User("domare", "AdamDomare", "1234");
	var thor = new User("lag", "ThorLagkapten", "4321");
	userArr.push(adam);
	userArr.push(thor);
	
	document.getElementById('send3').onclick = function(e){
            e.preventDefault();
            console.log(document.getElementById('send3'));
            regi();
	        
	};
	
	var regi = function(){
	 		document.getElementById('logg').setAttribute('class', 'hidden');
	 		document.getElementById('skapa').setAttribute('class', '');
	
	 		var user = document.getElementById('value-user2');
			var pass = document.getElementById('value-pass2');
			var pos = document.getElementById('value-pos');
			document.getElementById('send4').onclick = function(e){
	            e.preventDefault();
				console.log('Andvändarnamn: '+user.value+' Lösenord: '+pass.value);
	
	 		for(var i = 0; i < userArr.length; i++){
						console.log('Checkar i forloop '+userArr[i].userName);
						if(user.value === userArr[i].userName){
								document.getElementById('fel2').innerHTML = 'Tyvärr detta användarnamn finns redan';
							}else{
								var newUser = new User(pos, user.value, pass.value);
								userArr.push(newUser);
								console.log(userArr);
							}
							
					}
		};
	};
	
	
	var inlogg = function(userArr){
		var user = document.getElementById('value-user');
		var pass = document.getElementById('value-pass');
			document.getElementById('send1').onclick = function(e){
	            e.preventDefault();
				console.log('Andvändarnamn: '+user.value+' Lösenord: '+pass.value);
				//Checkar så att inskrivna namn och lösenord finns registrerat
					for(var i = 0; i < userArr.length; i++){
						console.log('Checkar i forloop '+userArr[i].userName+' lösen '+userArr[i].password);
						if(user.value === userArr[i].userName && pass.value === userArr[i].password){
								console.log('Detta är rätt användarnamn OCH lösenord');
								if(userArr[i].position === "lag"){
									console.log('LAG');
									result();
								}else{
									console.log('DOMARE');
									judge();//domare funktion
								}
							}else{
								document.getElementById('fel').innerHTML = 'Fel användarnamn eller lösenord.';
	
							}
							
					}
			};
			
	};
	
	 var result = function(){
	 		document.getElementById('logg').setAttribute('class', 'hidden');
	 		document.getElementById('anvandare').setAttribute('class', '');
	 };
	 var judge = function(){
	 		document.getElementById('logg').setAttribute('class', 'hidden');
	 		document.getElementById('domare').setAttribute('class', '');
	 };
	 
};



