window.onload = pageLoad;

function A() {
    document.getElementById()
}
function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
    if (document.getElementById("passwordA") == document.getElementById("passwordB"))
    alert("Accept Error")
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}