/* 1. prova logga in - komma vidare till domare sidan
Kolla vilket id(domare, el användare) och gå vidare till olika sidor*/
function User(position, userName, password){
	this.position = position;//lag el domare
	this.userName = userName;
	this.password = password;
	return this;
	}


window.onload = function(){
	var userArr = [];
	//userArrPass = [];
	var adam = new User("domare", "AdamDomare", 1234);
	var thor = new User("lag", "ThorLagkapten", 4321);
	userArr.push(adam);
	userArr.push(thor);

	click(userArr);
}
var click = function(userArr){
	var user = document.getElementById('value-user');
	var pass = document.getElementById('value-pass');
		document.getElementById('send1').onclick = function(e){
            e.preventDefault();
			console.log('Andvändarnamn: '+user.value+' Lösenord: '+pass.value);
			//console.log('array '+userArrName+userArrPass);
			//Checkar så att inskrivna namn och lösenord finns registrerat
			if(user.value !== undefined && pass.value !== undefined){
				for(var i = 0; i < userArr.length; i++){
				console.log('Checkar i forloop '+userArr[i].userName+' lösen '+userArr[i].password);
				if(user.value === userArr[i].userName){
					if(pass.value === userArr[i].password){
						console.log('Detta är rätt användarnamn OCH lösenord');
						if(userArr[i].position === "lag"){
							//funktion
						}else{
							//domare funktion
						}
					}
					console.log('Detta är rätt användarnamn');
			}else{
				document.getElementById('logg').innerHTML += 'Fel lösenord eller användarnamn';
				console.log('Fel lösenord eller användarnamn');
			}
			}
		}
	}
}


