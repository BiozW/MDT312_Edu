window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
    form.onreset = reform;
}

function checkLogin(){
	const queryString = window.location.search;

	const urlParams = new URLSearchParams(queryString);
	
	const usernamecheck = urlParams.get('username');
	const passwordcheck = urlParams.get('password');

	var user = document.forms["myLogin"]["username"];
	var pass = document.forms["myLogin"]["password"];

	if (user.value == usernamecheck && pass.value == passwordcheck)
	{
		alert("ยินดีด้วย ถูกแล้ว!!");
	}
	else
	{
		alert("ผิดโว้ยยย");
		return false;
	}
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
}

function reform(){
    document.getElementById("myForm") = null;
}