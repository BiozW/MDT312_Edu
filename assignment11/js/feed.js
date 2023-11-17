// check ว่ามีการ set cookies หรือยังถ้ามีจะไปยัง feed.html แต่ถ้าไม่มีจะกลับไปที่ index.html
function checkCookie(){
	var username = "";
	if(getCookie("username")==false){
		window.location = "index.html";
	}
}

checkCookie();
window.onload = pageLoad;

function getCookie(name){
	var value = "";
	try{
		value = document.cookie.split("; ").find(row => row.startsWith(name)).split('=')[1]
		return value
	}catch(err){
		return false
	} 
}

function pageLoad(){
	document.getElementById('postbutton').onclick = getData;

	document.getElementById('displayPic').onclick = fileUpload;
	document.getElementById('fileField').onchange = fileSubmit;
	
	var username = getCookie('username');

	document.getElementById("username").innerHTML = username;
	console.log(getCookie('img'));
	showImg('img/'+getCookie('img'));
	readPost();
}
// อัปเดตข้อมูลทุก 2 วิ
setInterval(readPost,2000);

function getData(){
	var msg = document.getElementById("textmsg").value;
	document.getElementById("textmsg").value = "";
	writePost(msg);
}

function fileUpload(){
	document.getElementById('fileField').click();
}

function fileSubmit(){
	document.getElementById('formId').submit();
}

// แสดงรูปในพื้นที่ที่กำหนด
//ไม่มีแก้
function showImg(filename){
	if (filename !==""){
		var showpic = document.getElementById('displayPic');
		showpic.innerHTML = "";
		var temp = document.createElement("img");
		temp.src = filename;
		showpic.appendChild(temp);
	}
}

// อ่าน post จาก file
// complete it
// อ่าน .json
async function readPost(){
	const read_log = await fetch("/readPost");
	const res_data = await read_log.json()
	showPost(res_data);
}

// เขียน post ใหม่ ลงไปใน file
// complete it
async function writePost(msg){
	let response = await fetch("/writePost",{
		method:"POST",
		headers:{
			'Accept':'application/json',
			'Content-Type':'application/json'
		},
		body: JSON.stringify({
			user:getCookie("username"),
			message:msg
			})
		});
}

// แสดง post ที่อ่านมาได้ ลงในพื้นที่ที่กำหนด
//ไม่มีแก้
function showPost(data){
	var keys = Object.keys(data);
	//ให้อยู่ใน feed-container
	var divTag = document.getElementById("feed-container");
	divTag.innerHTML = "";
	for (var i = keys.length-1; i >=0 ; i--) {

		var temp = document.createElement("div");
		temp.className = "newsfeed";
		divTag.appendChild(temp);
		var temp1 = document.createElement("div");
		temp1.className = "postmsg";
		temp1.innerHTML = data[keys[i]]["message"];
		temp.appendChild(temp1);
		var temp1 = document.createElement("div");
		temp1.className = "postuser";
		//ดึงชื่อจาก user จาก postDB ไม่ใช่ username จาก userDB Noooo อย่าสับสนนะเหวบคนต่อไป
		temp1.innerHTML = "Posted by: "+data[keys[i]]["user"];
		temp.appendChild(temp1);
		
	}
}