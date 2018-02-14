// object for username and passwords
var objUsers = [ 
	{
		username: "Martinsilva",
		Password: "Password1"
	},
	{
		username: "Kevin1",
		password: "password2"
	},
	{
		username: "mrAnderson",
		password: "matrix1"
	}
]




function getInfo() {
	let userinfo = document.getElementById("displayLogin");
	var userName = document.getElementById("userName").value;
	var passWord = document.getElementById("passWord").value;
	for(let i = 0; i < objUsers[i].length; i++){
		if(userName == objUser[i].username && passWord == objUser[i].password);{
				displayLogin.innerHTML = "Hi " + objUsers[i].username + ", Welcome to the Matrix!";
		}
		if(false){
			displayLogin.innerHTML = "You may not enter the Matrix!"
		}
	}
}
console.log(objUsers);