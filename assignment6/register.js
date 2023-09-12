window.onload = pageLoad;

function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
    form.onreset = reform;
}

function validateForm() {
    var a = document.getElementById('passwordA');
    var b = document.getElementById('passwordB');

    if (a.value != b.value)
    {
        alert("กรอกไม่ถูกเว้ย")
        document.getElementById('errormsg')
        return false;
    }

    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}

function reform(){
    document.getElementById("myForm") = null;
}